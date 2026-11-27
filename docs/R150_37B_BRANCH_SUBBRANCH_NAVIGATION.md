# R150.37B — Navigasi Branch dan Subbranch Throwbadly

Addendum [register JSON R150.37A](R150_37A_BRANCH_SUBBRANCH_REGISTER.json), [audit commit R150.36](R150_36C_SAME_SUBJECT_COMMIT_AUDIT.md), dan [mandat anti-kehilangan](R150_27D_MANDATE_RETENTION_AND_BRANCH_ISOLATION.md). Tidak menggantikan [workflow R129.1](https://github.com/hajighozi/AL-MUDDAKIR-/blob/main/docs/BRANCH_WORKFLOW.md). Cakupan Sumatera; tiga jalur pendidikan tetap Al Muddakir, Surau Shift, Tan Project. Subbranch logis bukan Git ref baru atau klaim silsilah Git.

## Snapshot sebelum R150.37A
Main 04b422b3862b369f2a84c0ddd3bf7f4a43998068; staging fcb8e0d9d4e78d682316865e708bfede778cdcdb. 21 refs, seluruh 20 non-main dibandingkan dengan main dan berbagi merge-base 6d37763c8cb63f70db5bef951a0050b2a3692e93. Semua non-main 3 behind; 121 summed ahead, bukan jumlah SHA unik. Tidak ada PR terbuka pada snapshot sebelumnya. Listing protected=false bukan audit penuh ruleset atau izin.

| ID | Ref aktual | Induk logis | Ahead | Behind | Subtopik |
|---|---|---|---:|---:|---:|
| B00 | [main](https://github.com/hajighozi/AL-MUDDAKIR-/tree/main) | Throwbadly / Raudhah's Dome Sumatera | 0 | 0 | 0 |
| B01 | [raudhah-integrated](https://github.com/hajighozi/AL-MUDDAKIR-/tree/raudhah-integrated) | B00 | 44 | 3 | 3 |
| B02 | [feature/kitab-iqra](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/kitab-iqra) | B00 | 13 | 3 | 3 |
| B03 | [feature/quran](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/quran) | Al Muddakir — IQRA' & FAHM | 1 | 3 | 3 |
| B04 | [feature/hadis](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/hadis) | Al Muddakir — IQRA' & FAHM | 8 | 3 | 3 |
| B05 | [feature/lughah](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/lughah) | Al Muddakir — IQRA' & FAHM | 1 | 3 | 3 |
| B06 | [feature/alam](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/alam) | Al Muddakir — IQRA' & FAHM | 1 | 3 | 2 |
| B07 | [feature/peradaban](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/peradaban) | Al Muddakir — IQRA' & FAHM | 1 | 3 | 1 |
| B08 | [feature/matematika](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/matematika) | Al Muddakir — IQRA' & FAHM | 1 | 3 | 1 |
| B09 | [feat/fahimuunal-vercel](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feat/fahimuunal-vercel) | B03 | 0 | 3 | 2 |
| B10 | [feature/surau-shift](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/surau-shift) | Surau Shift — TAZKIYAH | 31 | 3 | 4 |
| B11 | [feature/tan-project](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/tan-project) | Tan Project — KHIDMAH | 3 | 3 | 1 |
| B12 | [feature/khidmah-lingkungan-padang-longang](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/khidmah-lingkungan-padang-longang) | B11 | 0 | 3 | 1 |
| B13 | [feature/raudhah-pedagogy](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/raudhah-pedagogy) | Pedagogik lintas jalur | 8 | 3 | 3 |
| B14 | [feature/pustaka-rehat](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/pustaka-rehat) | Fasilitas dan teknologi lintas jalur | 1 | 3 | 1 |
| B15 | [feature/iqra-go](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/iqra-go) | Fasilitas dan teknologi lintas jalur | 1 | 3 | 1 |
| B16 | [feature/offline-android](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/offline-android) | Fasilitas dan teknologi lintas jalur | 1 | 3 | 1 |
| B17 | [feature/raudhah-media](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/raudhah-media) | Fasilitas dan teknologi lintas jalur | 1 | 3 | 1 |
| B18 | [hurairah-web-stable](https://github.com/hajighozi/AL-MUDDAKIR-/tree/hurairah-web-stable) | Fasilitas dan teknologi lintas jalur | 1 | 3 | 1 |
| B19 | [feature/roblox-learning](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/roblox-learning) | Fasilitas dan teknologi lintas jalur | 3 | 3 | 2 |
| B20 | [feature/riset-malaka](https://github.com/hajighozi/AL-MUDDAKIR-/tree/feature/riset-malaka) | Riset lintas jalur | 1 | 3 | 1 |

## Hubungan Git yang diperiksa pada R150.37A
- Qur'an → Fahimuunal: head behind 1, ahead 0; kode asli masih perlu pemulihan.
- Tan Project → Khidmah Longang: head behind 3, ahead 0; studi sipil sudah ada di baseline.
- Hurairah ↔ Roblox: diverged (+3/-1 untuk Roblox), implementasi terpisah.
- Kitab IQRA' ↔ Lughah: diverged (+1/-13 untuk Lughah), konsep lintas bidang.
- Surau Shift ↔ Raudhah Pedagogy: diverged (+8/-31 untuk Pedagogy), koordinasi tanpa menimpa mandat.
Kesimpulan terbatas pada lima pasangan ini, bukan seluruh pasangan.

## 38 subtopik kerja
### B01 — Staging lintas jalur
- B01.1 — Audit korpus, evidensi, provenance (partial; R150.23–28; R150.36)
- B01.2 — Integrasi keputusan dan koordinasi (draft; R150.6–9; R150.31)
- B01.3 — Codex / Vercel (planned; SP07, SP12; R155–157)

### B02 — Fondasi Kitab IQRA'
- B02.1 — Epistemologi dan FAHM (draft; R144; R150 FAHM)
- B02.2 — Kamus, ontologi, Forge–Ibu–Anak–Cucu–Fashl (partial; R150.3–4; R150.28C/E)
- B02.3 — Korpus dan provenance (partial; R150.2; R150.28C-1/2; SP11)

### B03 — Al Muddakir Qur'an
- B03.1 — FAHIM 1: bacaan, bahasa dasar (draft; R141)
- B03.2 — FAHIM 2: fikih dan ushul (draft; R141)
- B03.3 — FAHIM 3: bahasa, sejarah, penalaran dan sains (draft; R141)

### B04 — Al Muddakir Hadis / KitabPedia
- B04.1 — Maqra 500 (partial; maqra500/catalog.json; units 001–005)
- B04.2 — Maqra 100 (planned; R153C; source audit)
- B04.3 — Takhrij, syarah, sorogan dan pembelajaran (partial; R142; R153C)

### B05 — Al Muddakir Lughah
- B05.1 — Nahwu (draft; R143)
- B05.2 — Sharaf (draft; R143)
- B05.3 — Balaghah (draft; R143)

### B06 — Al Muddakir Alam
- B06.1 — Unit ALM dan observasi (draft; R145)
- B06.2 — Scanner tumbuhan Sumatera (planned; SP01; R154C)

### B07 — Al Muddakir Peradaban
- B07.1 — Sumber, kronologi, interpretasi (draft; R146)

### B08 — Al Muddakir Matematika
- B08.1 — Unit MAT, representasi dan bukti (draft; R147)

### B09 — Fahimuunal Qur'an: aplikasi
- B09.1 — Pemulihan kode asli, demo, jadwal pengulangan (blocked; SP05; R153A/B)
- B09.2 — Preview dan pengujian Vercel (planned; SP05; SP12)

### B10 — Surau Shift
- B10.1 — Tazkiyah, adab, Raso Pareso (draft; README A–B; R138)
- B10.2 — Sarang Lebah Baginda Nabi Minangkaba (draft; main README; R138)
- B10.3 — Tarbiyah individual dan tahqiq tarekat (partial; README D; R150.16–21)
- B10.4 — Ikhwan, Badunsanak, keluarga, dukungan sosial (draft; README E; R150.30A–I)

### B11 — Tan Project
- B11.1 — Service learning, khidmah sipil (draft; R139; R150.22/22A)

### B12 — Khidmah lingkungan Padang Longang
- B12.1 — Konservasi, kajian air dan agroforestri sipil (baseline-study; main README; khidmah-lingkungan/padang-longang/)

### B13 — Pedagogik lintas jalur
- B13.1 — Pengalaman institut dan Master Plan (draft; R137; SP09)
- B13.2 — Kesiapan, kurikulum, akuntabilitas Murabbi (draft; R150.10/11/14)
- B13.3 — Fiqh Dakwah capstone (partial; R150.30J/K; FD02/03)

### B14 — Pustaka Rehat
- B14.1 — Pedagogik membaca dan akses offline (draft; R140; SP02)

### B15 — IQRA' GO
- B15.1 — Rencana aplikasi (planned; SP03; WORK_PLAN)

### B16 — Android offline
- B16.1 — APK dan debug (planned; SP06; WORK_PLAN)

### B17 — Media Raudhah
- B17.1 — Rencana media dan hak publikasi (planned; SP08; WORK_PLAN)

### B18 — Hurairah World
- B18.1 — Pedagogik game web (draft; R148; baseline v0.9.2)

### B19 — Roblox pendidikan
- B19.1 — Dunia belajar dan Nagari Ilmu (prototype-unverified; R150.29; RBX01/02)
- B19.2 — Backlog pengembangan (planned; RBX03–10)

### B20 — Riset Malaka lintas jalur
- B20.1 — Madilog, tasawuf, sejarah dan sumber (planned; SP10; WORK_PLAN)

## Aturan
1. Satu pemilik logis per tugas, referensi silang lintas bidang; pertahankan ID R/SP/RBX dan sumber historis. Jangan menamai ulang atau memindah file tanpa pemeriksaan tautan.
2. Buat ref tugas hanya jika ada perubahan yang perlu isolasi. Git tidak mendukung ref feature/quran/task ketika feature/quran sudah ada. Gunakan nama datar seperti task/quran--review-scheduler apabila pekerjaan dimulai; contoh ini bukan ref baru.
3. Review diff, konflik semantik, sumber/hak/keamanan, tes aktual, dan PR sesuai R129.1. Tidak ada sinkronisasi, merge, force-push atau deployment pada tahap ini.
4. Pertahankan 27 SHA historis yang masih perlu pencocokan, R150.28C-3, FD02, SP01–12, RBX03–10, R151–157, audit ZIP, pemulihan Fahimuunal dan review Maqra. Jangan unggah materi privat, data anak atau kredensial.

## Checkpoint
JSON R150.37A dibaca kembali: 21 refs dan 38 subtopik. Dokumen ini navigasi yang diturunkan dari register, bukan audit sumber atau kurikulum baru.
