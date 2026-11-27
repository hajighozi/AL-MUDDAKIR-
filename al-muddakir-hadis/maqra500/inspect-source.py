"""Record a candidate Maqra' 500 PDF and render pages for visual review."""

import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import subprocess


def fingerprint(path):
    digest = hashlib.sha256()
    size = 0
    with path.open("rb") as source:
        for block in iter(lambda: source.read(1024 * 1024), b""):
            digest.update(block)
            size += len(block)
    return size, digest.hexdigest()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("pdf", type=Path)
    parser.add_argument("--output-dir", type=Path, required=True,
                        help="Direktori baru untuk gambar dan catatan pemeriksaan.")
    parser.add_argument("--pages", type=int, nargs=2, metavar=("AWAL", "AKHIR"),
                        help="Rentang halaman PDF. Bawaan adalah tiga halaman pertama.")
    args = parser.parse_args()
    environment = dict(os.environ, LC_ALL="C")

    try:
        pdf = args.pdf.resolve(strict=True)
        if not pdf.is_file():
            raise ValueError("Masukan harus berupa berkas PDF.")
        size, sha256 = fingerprint(pdf)
        info = subprocess.run(["pdfinfo", str(pdf)], env=environment,
                              capture_output=True, text=True, errors="replace", check=True)
        pages_match = re.search(r"(?m)^Pages:[ \t]+([1-9][0-9]*)[ \t]*$", info.stdout)
        if not pages_match:
            raise ValueError("Jumlah halaman PDF tidak dapat dibaca.")
        page_count = int(pages_match.group(1))
        first, last = args.pages if args.pages else (1, min(3, page_count))
        if not 1 <= first <= last <= page_count:
            raise ValueError(f"Pilih rentang dalam halaman 1–{page_count}.")

        output = args.output_dir
        output.mkdir(parents=True, exist_ok=False)
        try:
            subprocess.run([
                "pdftoppm", "-png", "-r", "120", "-f", str(first), "-l", str(last),
                str(pdf), str(output.resolve() / "page"),
            ], env=environment, capture_output=True, text=True, errors="replace", check=True)
            images = {int(path.stem.split("-")[-1]): path for path in output.glob("page-*.png")}
            expected = range(first, last + 1)
            if set(images) != set(expected) or any(path.stat().st_size == 0 for path in images.values()):
                raise ValueError("Gambar halaman yang dihasilkan belum lengkap.")
            if fingerprint(pdf) != (size, sha256):
                raise ValueError("Isi PDF berubah saat diperiksa. Jalankan ulang pada salinan yang stabil.")
            manifest = {
                "intendedCollection": "MQ500",
                "status": "awaiting_visual_review",
                "source": {"fileName": args.pdf.name, "bytes": size, "sha256": sha256,
                           "pageCount": page_count},
                "reviewImages": [{"pdfPage": page, "file": images[page].name} for page in expected],
            }
            report = output / "source-inspection.json"
            report.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        except (Exception, KeyboardInterrupt):
            shutil.rmtree(output)
            raise
    except FileExistsError:
        parser.exit(1, "Direktori keluaran sudah ada. Gunakan nama baru.\n")
    except subprocess.CalledProcessError as error:
        detail = (error.stderr or "").strip()
        parser.exit(1, f"{error.cmd[0]} gagal membaca PDF. {detail}\n")
    except (OSError, ValueError) as error:
        parser.exit(1, f"{error}\n")

    print(report.resolve())


if __name__ == "__main__":
    main()
