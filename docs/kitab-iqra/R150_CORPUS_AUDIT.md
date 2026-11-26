# R-150 — Master corpus audit, tahap 1
Status: pemeriksaan struktur publik selesai terbatas; audit korpus asli BLOCKED. Jangan maju ke pelengkapan materi/merge sebelum audit sumber diselesaikan dan gap dicatat. Baseline main 6d37763c8cb63f70db5bef951a0050b2a3692e93; rujuk register R-149 di raudhah-integrated.
## Inventaris aktual (blob SHA)
| File | Blob |
|---|---|
| knowledge-core/registry.json | 048a02b739201b48b6e1caa909b539bd719ca947 |
| learning-core/pedagogy.json | 9045d459b27a5af866804910dc820ea851bc6bd2 |
| open-knowledge/sources.json | 1fa8a1e5dd139954055e3a309cf789ca9b307f70 |
| open-knowledge/acquisition.json | 5444aa37023a93fe63ab36aac89cd72c4f96877e |
| open-knowledge/turats.json | 1d8908d997f8f0f102bde47c5bc29d95110401f0 |
| al-muddakir-faculties/curriculum.json | b7714cae463de78adb2dd51fbd0e9e5d4977957c |
## Hasil
59 ID Fashl unik: Qur'an 10, hadis 8, lughah 9, alam 14, peradaban 8, matematika 10. 19 B/corpus-label dengan lokator umum, 40 C/proposal, seluruh 59 draft. 30 sasaran kompetensi; 9 unit pilot, semuanya belum memiliki sourceIds. 12 sumber umum; 59 mapping, 4 gap awal R-134 (fa-001, fa-002, ma-007, ma-008). R-135 menambah 7 lokator kandidat termasuk empat gap awal, 52 masih discovery; tidak menaikkan status validasi. 7 provider, 20 kitab kandidat; 20 tanpa lokator edisi dan belum divalidasi. Tidak ditemukan referensi ID putus pada pengecekan mapping sumber, pedagogy source, acquisition queue/record, path kitab, prasyarat unit, pilot dan relasi fakultas. Ini uji struktur JS pada data GitHub, bukan suite Node/browser.
## Register temuan
- AUD-01 BLOCKED: dua ZIP project terdaftar namun lingkungan container/Python gagal; pencarian isi tidak menghasilkan cuplikan. Tidak mengklaim memeriksa isi, hash, atau daftar file. Jangan unggah arsip privat ke repo publik.
- AUD-02 PENDING: 398 kandidat Anak belum diekstrak/audit; tidak setara dengan 59 Fashl. Jangan hitung selisih sebagai jumlah pasti kandidat hilang.
- AUD-03 PENDING: 19 label korpus memerlukan file/edisi/halaman spesifik.
- AUD-04 REVIEW: label sama fa-003/lu-001 (Isim mu‘rab), fa-004/lu-004 (Fi‘il mudhari‘). Pertahankan ID; tentukan apakah satu KU dengan lintasan lintas fakultas atau dua cakupan berbeda, jangan hapus otomatis.
- AUD-05 PENDING: Nafsiyah (diri vs keteladanan Nabi) dan Aqliyah/Nizhamiyah belum terselesaikan. Forge gabungan bukan putusan taksonomi final.
- AUD-06 PENDING: 9 unit tanpa sourceIds; 20 kitab belum memiliki lokator; 7 kandidat hasil penelusuran bukan bukti klaim. 
- AUD-07 PENDING: kamus RSI/Jihat, definisi mawdu/mahmul/madarik dan klasifikasi A–H perlu lokator sumber asli serta review ahli; tidak disahkan lewat sintesis AI.
## Gerbang penyelesaian audit
Akses arsip privat secara lokal, inventaris nama/format/ukuran/hash, pisahkan duplikat byte vs kemiripan makna, lacak asal dan hak. Ekstrak kandidat dengan ID stabil dan lokator, bedakan ilmu/cabang/topik/metode/prasyarat/overlap, catat klaim dan evidence terpisah. Bandingkan dengan registry publik tanpa mengubah ID sebelum review. Simpan hanya ringkasan yang aman dipublikasi. Status audit belum selesai.
## Cabang dipertahankan
main (baseline), raudhah-integrated (staging), feature/kitab-iqra (audit), feature/quran, feature/hadis, feature/lughah, feature/alam, feature/peradaban, feature/matematika, feature/raudhah-pedagogy, feature/surau-shift, feature/tan-project, feature/pustaka-rehat, feature/khidmah-lingkungan-padang-longang (lingkungan sipil), hurairah-web-stable. R-151 identitas/budaya; R-152 engine pedagogik; R-153 Quran/hadis; R-154 kurikulum; R-155 debug/deployment; R-156 pilot; R-157 PR/staging/main. Nomor dan mandat dipertahankan; tidak membuka cabang baru atau merge saat audit masih blocked.
