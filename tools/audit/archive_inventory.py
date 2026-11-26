"""Private, read-only ZIP inventory. Run locally; never commit its output."""
import argparse
import hashlib
import json
from pathlib import Path, PurePosixPath
import zipfile

def digest(path):
    h = hashlib.sha256()
    with path.open("rb") as handle:
        for block in iter(lambda: handle.read(1024 * 1024), b""):
            h.update(block)
    return h.hexdigest()

def inspect(path):
    rows = []
    with zipfile.ZipFile(path) as archive:
        for entry in archive.infolist():
            name = entry.filename
            p = PurePosixPath(name.replace("\\", "/"))
            rows.append({
                "member": name,
                "bytes": entry.file_size,
                "compressed_bytes": entry.compress_size,
                "crc32": f"{entry.CRC:08x}",
                "directory": entry.is_dir(),
                "encrypted": bool(entry.flag_bits & 1),
                "unsafe_path": p.is_absolute() or ".." in p.parts
                    or (len(name) > 1 and name[1] == ":"),
            })
    return {"archive": path.name, "bytes": path.stat().st_size,
            "archive_sha256": digest(path), "members": rows}

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("archives", nargs="+", type=Path)
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()
    # Refuse to overwrite or write to a Git worktree.
    output = args.output.resolve()
    if any((parent / ".git").exists() for parent in output.parents):
        parser.error("Output must be outside any Git worktree.")
    if output.exists():
        parser.error("Output exists; choose a fresh path.")
    results, errors = [], []
    for path in args.archives:
        try:
            results.append(inspect(path))
        except (OSError, zipfile.BadZipFile, RuntimeError, ValueError) as exc:
            errors.append({"archive": path.name, "error": type(exc).__name__})
    with output.open("x", encoding="utf-8") as handle:
        json.dump({"status": "inventory_only", "archives": results,
                   "errors": errors,
                   "limits": "No extraction, member hash, content audit or semantic duplicate check."},
                  handle, ensure_ascii=False, indent=2)
        handle.write("\n")
    return int(bool(errors))

if __name__ == "__main__":
    raise SystemExit(main())
