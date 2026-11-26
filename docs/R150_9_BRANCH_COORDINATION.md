# R-150.9 — Register koordinasi branch
Status: snapshot audit struktur, bukan persetujuan isi atau merge. Baseline main 6d37763c8cb63f70db5bef951a0050b2a3692e93. Snapshot sesudah dua indeks dan sebelum commit dokumen ini: 15 branch, 45 commit tambahan, 45 path unik, 0 overlap, 0 behind. Semua diff menambah file, berdasarkan pemeriksaan awal sesi; tidak ada rewrite riwayat. Indeks lokal diperiksa: feature/kitab-iqra 10/10 target cocok pada diff, tidak ada path belum terindeks; feature/surau-shift 13/13 target cocok pada diff, tidak ada path belum terindeks.
## Pintu masuk
- [Kitab IQRA' — audit dan FAHM](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/kitab-iqra/docs/kitab-iqra/README.md)
- [Surau Shift — Tazkiyah dan ukhuwah](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/README.md)
- [Backlog R149](R149_PEDAGOGY_INTEGRATION_BACKLOG.md), [SP01–12](R149_1_SPECIAL_REQUESTS.md), [Gate R150.6](R150_6_AUTOPILOT_AUDIT_GATE.md)
- [Audit keputusan R150.7](R150_7_DECISION_CONSISTENCY_AUDIT.md), [Paket dalil R150.8A](R150_8A_SOURCE_PACKET.md), [Register turats R150.8B](R150_8B_TURATS_SOURCE_REGISTER.json)
## Branch snapshot
| Branch | Ahead | Behind | Area |
|---|---:|---:|---|
| main | 0 | 0 | baseline |
| feature/alam | 1 | 0 | al-muddakir-alam/docs |
| feature/hadis | 1 | 0 | al-muddakir-hadis/docs |
| feature/khidmah-lingkungan-padang-longang | 0 | 0 | identik dengan main |
| feature/kitab-iqra | 11 | 0 | docs/kitab-iqra |
| feature/lughah | 1 | 0 | al-muddakir-lughah/docs |
| feature/matematika | 1 | 0 | al-muddakir-matematika/docs |
| feature/peradaban | 1 | 0 | al-muddakir-peradaban/docs |
| feature/pustaka-rehat | 1 | 0 | pustaka-rehat/docs |
| feature/quran | 1 | 0 | al-muddakir-quran/docs |
| feature/raudhah-pedagogy | 1 | 0 | docs/pedagogy |
| feature/surau-shift | 14 | 0 | surau-shift/docs |
| feature/tan-project | 1 | 0 | tan-project/docs |
| hurairah-web-stable | 1 | 0 | hurairah-world |
| raudhah-integrated | 10 | 0 | docs |
## Manifest file (snapshot sebelum commit register ini)
### feature/alam
- [al-muddakir-alam/docs/R145_ALAM_PEDAGOGY.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/alam/al-muddakir-alam/docs/R145_ALAM_PEDAGOGY.md)

### feature/hadis
- [al-muddakir-hadis/docs/R142_MAQRA_PEDAGOGY.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/hadis/al-muddakir-hadis/docs/R142_MAQRA_PEDAGOGY.md)

### feature/khidmah-lingkungan-padang-longang
Tidak ada tambahan terhadap main.

### feature/kitab-iqra
- [docs/kitab-iqra/R144_EPISTEMIC_PEDAGOGY.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/kitab-iqra/docs/kitab-iqra/R144_EPISTEMIC_PEDAGOGY.md)
- [docs/kitab-iqra/R150_2_PROVENANCE_REGISTER.json](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/kitab-iqra/docs/kitab-iqra/R150_2_PROVENANCE_REGISTER.json)
- [docs/kitab-iqra/R150_3_GLOSSARY_ONTOLOGY_AUDIT.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/kitab-iqra/docs/kitab-iqra/R150_3_GLOSSARY_ONTOLOGY_AUDIT.md)
- [docs/kitab-iqra/R150_4_TAXONOMY_ANNOTATIONS.json](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/kitab-iqra/docs/kitab-iqra/R150_4_TAXONOMY_ANNOTATIONS.json)
- [docs/kitab-iqra/R150_CORPUS_AUDIT.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/kitab-iqra/docs/kitab-iqra/R150_CORPUS_AUDIT.md)
- [docs/kitab-iqra/R150_FAHM_CONSCIOUSNESS_DECISION.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/kitab-iqra/docs/kitab-iqra/R150_FAHM_CONSCIOUSNESS_DECISION.md)
- [docs/kitab-iqra/R150_FAHM_DEPTH_AUDIT.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/kitab-iqra/docs/kitab-iqra/R150_FAHM_DEPTH_AUDIT.md)
- [docs/kitab-iqra/R150_FAHM_KALAM_INTEGRAL.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/kitab-iqra/docs/kitab-iqra/R150_FAHM_KALAM_INTEGRAL.md)
- [docs/kitab-iqra/R150_FOUR_DNA_FARD_AYN.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/kitab-iqra/docs/kitab-iqra/R150_FOUR_DNA_FARD_AYN.md)
- [docs/kitab-iqra/README.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/kitab-iqra/docs/kitab-iqra/README.md)
- [tools/audit/archive_inventory.py](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/kitab-iqra/tools/audit/archive_inventory.py)

### feature/lughah
- [al-muddakir-lughah/docs/R143_LUGHAH_PEDAGOGY.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/lughah/al-muddakir-lughah/docs/R143_LUGHAH_PEDAGOGY.md)

### feature/matematika
- [al-muddakir-matematika/docs/R147_MATEMATIKA_PEDAGOGY.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/matematika/al-muddakir-matematika/docs/R147_MATEMATIKA_PEDAGOGY.md)

### feature/peradaban
- [al-muddakir-peradaban/docs/R146_PERADABAN_PEDAGOGY.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/peradaban/al-muddakir-peradaban/docs/R146_PERADABAN_PEDAGOGY.md)

### feature/pustaka-rehat
- [pustaka-rehat/docs/R140_READING_PEDAGOGY.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/pustaka-rehat/pustaka-rehat/docs/R140_READING_PEDAGOGY.md)

### feature/quran
- [al-muddakir-quran/docs/R141_FAHIM_PEDAGOGY.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/quran/al-muddakir-quran/docs/R141_FAHIM_PEDAGOGY.md)

### feature/raudhah-pedagogy
- [docs/pedagogy/R137_INSTITUTE_EXPERIENCE.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/raudhah-pedagogy/docs/pedagogy/R137_INSTITUTE_EXPERIENCE.md)

### feature/surau-shift
- [surau-shift/docs/R138_SARANG_LEBAH_RASO_PARESO.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R138_SARANG_LEBAH_RASO_PARESO.md)
- [surau-shift/docs/R150_ADAB_BERMAZHAB_TAZKIYAH.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_ADAB_BERMAZHAB_TAZKIYAH.md)
- [surau-shift/docs/R150_ADAB_IKHTILAF_LIFE_PURPOSE.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_ADAB_IKHTILAF_LIFE_PURPOSE.md)
- [surau-shift/docs/R150_CONTOH_JALUR_TAZKIYAH_SYAFII_ASYARI_QADIRI.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_CONTOH_JALUR_TAZKIYAH_SYAFII_ASYARI_QADIRI.md)
- [surau-shift/docs/R150_FAHM_TAZKIYAH_NONCOERCIVE_ADAB.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_FAHM_TAZKIYAH_NONCOERCIVE_ADAB.md)
- [surau-shift/docs/R150_FARD_AYN_KHIDMAH.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_FARD_AYN_KHIDMAH.md)
- [surau-shift/docs/R150_INTEGRITY_MURAQABAH.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_INTEGRITY_MURAQABAH.md)
- [surau-shift/docs/R150_IQRA_FAHM_FOUNDATION_TAZKIYAH.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_IQRA_FAHM_FOUNDATION_TAZKIYAH.md)
- [surau-shift/docs/R150_LIFELONG_TAZKIYAH.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_LIFELONG_TAZKIYAH.md)
- [surau-shift/docs/R150_MAJELIS_TAKJUB_KEBERSAMAAN.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_MAJELIS_TAKJUB_KEBERSAMAAN.md)
- [surau-shift/docs/R150_TAZKIYAH_DEPTH_AUDIT.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_TAZKIYAH_DEPTH_AUDIT.md)
- [surau-shift/docs/R150_TAZKIYAH_DIVERSITY_ATLAS.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_TAZKIYAH_DIVERSITY_ATLAS.md)
- [surau-shift/docs/R150_TAZKIYAH_INTEGRAL.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/R150_TAZKIYAH_INTEGRAL.md)
- [surau-shift/docs/README.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/surau-shift/surau-shift/docs/README.md)

### feature/tan-project
- [tan-project/docs/R139_KHIDMAH_PEDAGOGY.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/feature/tan-project/tan-project/docs/R139_KHIDMAH_PEDAGOGY.md)

### hurairah-web-stable
- [hurairah-world/R148_GAME_PEDAGOGY.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/hurairah-web-stable/hurairah-world/R148_GAME_PEDAGOGY.md)

### raudhah-integrated
- [docs/R149_1_SPECIAL_REQUESTS.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/raudhah-integrated/docs/R149_1_SPECIAL_REQUESTS.md)
- [docs/R149_PEDAGOGY_INTEGRATION_BACKLOG.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/raudhah-integrated/docs/R149_PEDAGOGY_INTEGRATION_BACKLOG.md)
- [docs/R150_6_AUTOPILOT_AUDIT_GATE.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/raudhah-integrated/docs/R150_6_AUTOPILOT_AUDIT_GATE.md)
- [docs/R150_7_DECISION_CONSISTENCY_AUDIT.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/raudhah-integrated/docs/R150_7_DECISION_CONSISTENCY_AUDIT.md)
- [docs/R150_8A_SOURCE_PACKET.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/raudhah-integrated/docs/R150_8A_SOURCE_PACKET.md)
- [docs/R150_8B_TURATS_SOURCE_REGISTER.json](https://github.com/hajighozi/AL-MUDDAKIR-/blob/raudhah-integrated/docs/R150_8B_TURATS_SOURCE_REGISTER.json)
- [docs/R150_FOUR_DNA_CONSTITUTION_ADDENDUM.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/raudhah-integrated/docs/R150_FOUR_DNA_CONSTITUTION_ADDENDUM.md)
- [docs/R150_IKRAR_KEHIDUPAN.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/raudhah-integrated/docs/R150_IKRAR_KEHIDUPAN.md)
- [docs/R150_UKHUWAH_KHIDMAH_BERSAMA.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/raudhah-integrated/docs/R150_UKHUWAH_KHIDMAH_BERSAMA.md)
- [docs/R150_UNITY_PURPOSE_DIVERSITY_METHOD.md](https://github.com/hajighozi/AL-MUDDAKIR-/blob/raudhah-integrated/docs/R150_UNITY_PURPOSE_DIVERSITY_METHOD.md)
## Penataan mandat
R129.1 BRANCH_WORKFLOW di main merupakan dokumen historis: dokumentasi fakultas alam/peradaban/matematika kini juga berada dalam folder fakultas masing-masing, sementara data dan mesin bersama tetap dikoordinasikan di al-muddakir-faculties. tools/audit/archive_inventory.py merupakan pengecualian alat audit milik Kitab IQRA'. feature/raudhah-pedagogy untuk dokumen lintas institut, feature/khidmah-lingkungan-padang-longang untuk kajian lingkungan sipil. Tidak perlu pindah atau hapus file yang sudah sesuai fungsi. Indeks ini tidak mengubah workflow main.
## Status dan urutan integrasi
1. R150.7 asli: inventaris dua arsip ZIP masih belum selesai; jangan menganggap audit dokumen publik R150.7 sebagai pengganti. Helper belum diuji. Arsip privat jangan diunggah ke repo publik.
2. R150.8 asli: 398 kandidat Anak belum divalidasi; register 59 Fashl berbeda. Konflik Nafsiyah dan Aqliyah/Nizhamiyah, glossary dan nama institut tetap terbuka. R150.8A/B adalah subaudit tambahan, bukan penyelesaian audit asli. R150.8B berisi 12 sumber dengan tingkat akses berbeda; 0 validasi ahli.
3. R150.8C: audit komparatif sumber tazkiyah belum selesai. Verifikasi langsung sumber dan edisi; jangan menyamakan catatan akses terdahulu dengan bukti baru.
4. R151–156: nama/identitas/hak, integrasi 16 komponen M3, audit Quran/hadis, pilot 12 siklus, tes runtime dan review manusia. Simpan naskah ujian yang belum digunakan secara privat; tidak diunggah pada penataan ini.
5. R157: review diff aktual, uji Node dan browser, PR feature ke staging lalu main hanya setelah gerbang audit; tidak force-push atau merge prematur. Perbandingan path tidak membuktikan merge berhasil atau bebas konflik semantik. Tidak menjalankan checkout, suite tes atau deployment dalam sesi ini.
