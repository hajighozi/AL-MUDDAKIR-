# R-150.3 — Audit kamus, jihāt dan ontologi
Status: C/draft; pemeriksaan label publik, bukan tahqiq turats atau keputusan klasifikasi final. Baseline main 6d37763c8cb63f70db5bef951a0050b2a3692e93. Sumber internal yang dibaca: docs/THROWBADLY_PROJECT_CONCLUSION.md §§4–5,7 (blob b5dff97c573d985a2595cff2187d8d091f3ab1ec); knowledge-core/registry.json (blob 048a02b739201b48b6e1caa909b539bd719ca947); R150_2_PROVENANCE_REGISTER.json (blob 601a520218054a4eca8dcfbe7cec9b3e9cd1a36b). Master Plan revisi 2 halaman 2 dan M7-B dirujuk melalui kesimpulan induk, bukan pembacaan ulang PDF asli.
## Kamus operasional
| ID | Istilah | Definisi kerja | Batas |
|---|---|---|---|
| TERM-01 | Mawḍū‘ / الموضوع | Objek kajian | Bukan metode atau predikat |
| TERM-02 | Jihāt al-i‘tibār / جهات الاعتبار | Sudut kajian | Bukan sumber bukti |
| TERM-03 | Maḥmūl / المحمول | Predikat proposisi tentang objek | Bukan objek itu sendiri |
| TERM-04 | Madārik / المدارك | Jalan memperoleh pengetahuan | Bedakan metode, instrumen dan sumber konkret |
| TERM-05 | Masā’il / المسائل | Persoalan atau proposisi bidang ilmu | Bukan daftar mata pelajaran |
| TERM-06 | Mabādi’ / المبادئ | Prinsip dasar | Nyatakan asumsi dan batas |
| TERM-07 | Taṣawwur / التصور | Pemahaman konsep | Bukan otomatis pembenaran proposisi |
| TERM-08 | Taṣdīq / التصديق | Penerimaan proposisi sebagai benar | Alasan pembenaran masih harus diperiksa |
| TERM-09 | Ta‘rīf / التعريف | Perumusan definisi | Periksa batas makna |
| TERM-10 | Jāmi‘ māni‘ / جامع مانع | Kriteria cakupan dan eksklusi definisi | Bukan bukti empiris universal |
| TERM-11 | Ilmu alat / علوم الآلة | Ilmu yang membantu kajian lain | Peran kontekstual, bukan kasta ilmu |
Seluruh definisi berstatus C, PENDING, UNVALIDATED. TERM-01–04 berangkat dari sintesis internal §4, lainnya adalah glosa kerja baru; edisi, lokator dan telaah ahli belum tersedia. Istilah tambahan Jabar Wataksin (ejaan belum pasti), Asbab Taqaddum, Pohon Porphyrius dan X–Y–Z perlu ditelusuri dalam arsip asli; jangan mengarang padanan atau menyatakan berasal dari satu kitab.
## Audit label aktual
59 jalur, semua memiliki teks Ibu/Anak/Cucu/Fashl. Normalisasi NFKC, trim, huruf kecil menghasilkan 22 label Ibu, 42 Anak, 53 Cucu, 57 Fashl berbeda. Ini hitungan label, bukan jumlah disiplin. Dua jalur identik pada empat tingkat (fa-003/lu-001, fa-004/lu-004), tetapi fakultas berbeda. Bahasa Arab, Nahwu, Isim, Fi‘il juga melintasi kedua fakultas. Pertahankan ID; calon relasi same-concept-as perlu review, bukan deduplikasi otomatis. 14 relasi related-to antarfakultas, dua tidak mempunyai arah balik (quran→peradaban, alam→quran); semantik arah belum ditentukan sehingga tidak disebut bug pasti.
## Konflik terbuka
ONT-01: M7-B Nafsiyah = dimensi diri manusia; Master Plan = fokus keteladanan Nabi melalui hadis/sirah. Usulan: pisahkan domain objek dari fakultas dan sumber; hadis dapat menelaah teks (Qauliyah), keteladanan manusia (Nafsiyah), sejarah (Ijtima’iyah). Bukan penggantian definisi. Verifikasi teks kedua sumber.
ONT-02: Aqliyah/Nizhamiyah/Riyadhiyah; registry memakai Aqliyah–Riyadhiyah. Usulan: pisahkan kajian penalaran formal, matematika, dan sistem empiris dengan jihat yang eksplisit. Belum menetapkan nama Forge resmi.
ONT-03: Qauliyah / lintas Forge pada Lughah adalah label gabungan, bukan satu objek. Usulan: faculty, domain, concept dan role menjadi kolom terpisah; ilmu bahasa dapat dipakai lintas fakultas. Jangan mengubah registry sebelum review.
ONT-04: slot Ibu–Anak–Cucu–Fashl tidak menjamin relasi genus–spesies. Contoh ha-003 Takhrij sebagai metode, ma-008 Qiyas sebagai bentuk inferensi, al-003 Hukum Newton sebagai topik/prinsip, pr-001 Jejak sejarah sebagai tema pelajaran. Tipe ini hipotesis anotasi, bukan putusan klasik.
## Codebook anotasi usulan
A: objek; B: jihat; C: predikat; D: masalah; E: prinsip; F: literatur/lokator; G: batas; H: independensi/cakupan. Label kandidat bertipe discipline, subdiscipline, topic, method, tool, principle, prerequisite, interdisciplinary, overlap, gap atau undetermined; periksa makna asli A–H sebelum mengadopsi daftar ini. Simpan alasan dan evidence, annotator, review date, dan perbedaan penilaian. Gunakan broader-than hanya untuk hubungan taksonomi yang terbukti, uses-method untuk metode, requires untuk prasyarat, related-to untuk asosiasi yang belum spesifik, dan same-concept-as hanya setelah adjudikasi. Source → passage → claim → KU → LU harus tetap terpisah; sumber terkait bukan bukti otomatis.
## Contoh pengujian (simulasi, bukan anotasi ahli)
- Air: objek air, jihat perubahan wujud, predikat berubah dari padat menjadi cair dalam kondisi tertentu, metode observasi dan pengukuran; jangan menyimpulkan hukum fikih dari pengamatan itu.
- Air: jihat bersuci, predikat hukum yang relevan hanya setelah sumber dan ahli ditelaah; tidak disahkan di sini.
- Isim mu‘rab: dua jalur fa-003 dan lu-001 mungkin menunjuk konsep yang sama, tetapi tujuan belajar dapat berbeda.
- Qiyas: ma-008 menunjukkan konteks mantiq; jangan disamakan dengan qiyas ushul fikih tanpa definisi dan sumber.
## Batas dan langkah berikutnya
Arsip ZIP masih tidak dapat diakses (pembacaan sebelumnya melebihi batas; percobaan container sesi ini gagal). 398 kandidat Anak belum diperiksa; belum ada anotator independen, statistik kesepakatan, tahqiq sumber atau tes browser/Node baru. Pertahankan baseline, 59 ID, semua branch dan status ilmiah. R-150.4: uji codebook pada 59 jalur publik dengan register hipotesis dan antrean review; korpus asli tetap BLOCKED sampai dapat diakses. Tidak merge atau menambah fitur sebelum gerbang audit.
