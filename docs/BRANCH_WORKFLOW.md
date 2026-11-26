# Tata kelola branch — R-129.1

## Peran cabang

`main`: baseline integrasi yang telah diperiksa secara teknis; bukan kurikulum disahkan.

`raudhah-integrated`: staging integrasi lintas modul sebelum PR ke main.

`hurairah-web-stable`: pengembangan Hurairah World; hanya folder hurairah-world/ kecuali perubahan integrasi yang disepakati.

| Cabang pengembangan | Mandat | Area kerja |
|---|---|---|
| `feature/kitab-iqra` | Kitab IQRA’ / audit inti | docs/kitab-iqra/ |
| `feature/quran` | Fahimunal Qur’an / FAHIM 1–3 | al-muddakir-quran/ |
| `feature/hadis` | Al Muddakir Hadis / KitabPedia | al-muddakir-hadis/ |
| `feature/lughah` | Nahwu, sharaf, balaghah | al-muddakir-lughah/ |
| `feature/alam` | Al Muddakir Alam | al-muddakir-faculties/ (unit ALM) |
| `feature/peradaban` | Al Muddakir Peradaban | al-muddakir-faculties/ (unit PRD) |
| `feature/matematika` | Al Muddakir Matematika | al-muddakir-faculties/ (unit MAT) |
| `feature/surau-shift` | Surau Shift | surau-shift/ |
| `feature/tan-project` | Tan Project | tan-project/ |
| `feature/pustaka-rehat` | Pustaka Rehat | pustaka-rehat/ |

Cabang adalah ruang kerja, bukan bukti aplikasi atau direktori telah tersedia. Hanya tiga fakultas pilot dan Hurairah World memiliki kode aplikasi pada baseline ini. Untuk jalur lain, register R-129 adalah titik awal; jangan mengunggah korpus privat, data santri, atau karya tanpa hak publikasi. Jalur Qur’an dan Hadis memerlukan validasi sumber/teks, serta reviewer manusia.

## Alur perubahan

1. Mulai dari main terbaru. Kerjakan satu tujuan per cabang; gunakan nama commit yang jelas, misalnya `feat(alam): ...` atau `docs(iqra): ...`.
2. Untuk tiga fakultas, curriculum.json adalah data contoh induk; sinkronkan data tertanam pada HTML. Batasi perubahan pada ID fakultas yang bersangkutan; perubahan mesin bersama dikerjakan pada staging dan diperiksa lintas fakultas.
3. Jalankan `node al-muddakir-faculties/tests.mjs` dan `node hurairah-world/tests.mjs` sebelum PR integrasi; periksa diff, status editorial, hak publikasi dan keamanan. Uji browser nyata terpisah. Pengujian teknis tidak menetapkan status approved materi.
4. PR dari feature ke raudhah-integrated untuk perubahan lintas modul, atau ke main untuk perubahan independen yang sudah diperiksa. Setelah staging lolos pemeriksaan, PR ke main. Sinkronkan cabang sebelum kerja baru; jangan force-push riwayat.
5. Catat checkpoint, commit, ruang lingkup tes dan keterbatasan. Jangan menerbitkan ke GitHub Pages tanpa pemeriksaan konfigurasi.

## Pemeriksaan baseline

45/45 regresi DOM simulasi game; 58/58 pemeriksaan gabungan struktur, status draf, sinkronisasi JSON, sintaks, konfigurasi cache/manifest dan interaksi simulasi fakultas. Pemeriksaan tambahan ini dilakukan melalui JavaScript di sesi integrasi; suite yang tersedia di repo tetap menjadi regresi yang dapat diulang. Belum ada pengujian perangkat fisik/visual, validasi ahli atau uji efektivitas pendidikan.
