import { emptyProgress, finishSession, parseProgress, serializeProgress } from "./learning.mjs";

const DATABASE_NAME = "al-muddakir.maqra500.learning";
const STORE_NAME = "progress";

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (!globalThis.indexedDB) {
      reject(new Error("Browser ini tidak menyediakan penyimpanan progres."));
      return;
    }

    const request = indexedDB.open(DATABASE_NAME, 1);
    let blocked = false;
    request.onupgradeneeded = () => request.result.createObjectStore(STORE_NAME);
    request.onerror = () => reject(request.error);
    request.onblocked = () => {
      blocked = true;
      reject(new Error("Penyimpanan progres sedang dibuka di tab lain. Tutup tab lama lalu coba lagi."));
    };
    request.onsuccess = () => {
      const database = request.result;
      if (blocked) {
        database.close();
        return;
      }
      database.onversionchange = () => database.close();
      resolve(database);
    };
  });
}

function mergeSessions(current, incoming) {
  const sessions = new Map(current.sessions.map((record) => [record.sessionId, record]));
  for (const record of incoming.sessions) {
    const existing = sessions.get(record.sessionId);
    if (existing && JSON.stringify(existing) !== JSON.stringify(record)) {
      throw new Error("Cadangan memuat sesi dengan identitas sama dan isi berbeda.");
    }
    if (!existing) sessions.set(record.sessionId, record);
  }
  return { ...current, sessions: [...sessions.values()] };
}

export function createProgressStore(materials) {
  const blank = serializeProgress(emptyProgress(), materials);
  const source = materials[0]?.sourceSha256;
  if (!source || materials.some((material) => material.collectionId !== "MQ500" || material.sourceSha256 !== source)) {
    throw new Error("Progres Maqra’ 500 memerlukan daftar materi dari satu naskah patokan.");
  }
  const registry = materials.map((material) => ({ ...material, arabicPages: [...material.arabicPages] }));
  const key = `MQ500:${source}`;
  const subscribers = new Set();
  let channel;

  function notify() {
    for (const callback of subscribers) queueMicrotask(callback);
  }

  function openChannel() {
    if (!channel && typeof BroadcastChannel === "function") {
      try {
        channel = new BroadcastChannel(`${DATABASE_NAME}:${key}`);
        channel.onmessage = notify;
      } catch {
        // The UI can refresh from the database when the tab becomes active.
      }
    }
    return channel;
  }

  function publish() {
    notify();
    const active = openChannel();
    try {
      active?.postMessage("updated");
    } catch {
      // A notification failure cannot undo a committed write.
    } finally {
      if (!subscribers.size) {
        active?.close();
        channel = undefined;
      }
    }
  }

  async function transact(update) {
    const database = await openDatabase();
    try {
      return await new Promise((resolve, reject) => {
        const transaction = database.transaction(STORE_NAME, update ? "readwrite" : "readonly");
        const store = transaction.objectStore(STORE_NAME);
        let result;
        let failure;

        function abort(error) {
          failure = error;
          transaction.abort();
        }

        transaction.onabort = () => reject(failure ?? transaction.error ?? new Error("Progres belum dapat disimpan."));
        transaction.oncomplete = () => failure ? reject(failure) : resolve(result);

        const request = store.get(key);
        request.onerror = () => abort(request.error);
        request.onsuccess = () => {
          try {
            const current = parseProgress(request.result === undefined ? blank : request.result, registry);
            result = update ? update(current) : current;
            if (update) {
              const write = store.put(serializeProgress(result, registry), key);
              write.onerror = () => abort(write.error);
            }
          } catch (error) {
            abort(error);
          }
        };
      });
    } finally {
      database.close();
    }
  }

  async function write(update) {
    const result = await transact(update);
    publish();
    return result;
  }

  return {
    read: () => transact(),
    save: (session, rating) => write((current) => finishSession(current, session, rating, { materials: registry })),
    exportBackup: async () => serializeProgress(await transact(), registry),
    async mergeBackup(raw) {
      const incoming = parseProgress(raw, registry);
      return write((current) => mergeSessions(current, incoming));
    },
    subscribe(callback) {
      subscribers.add(callback);
      openChannel();
      return () => {
        subscribers.delete(callback);
        if (!subscribers.size) {
          channel?.close();
          channel = undefined;
        }
      };
    },
  };
}
