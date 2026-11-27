# SP-06 — APK offline dan debugging
Status PLANNED; rencana tersimpan, bukan implementasi. Branch khusus dari main. Mandat tercatat R149.1 dan instruksi penataan pengguna 27 November 2026.

Tugas: inventaris kode aplikasi asli dan dependensi; tentukan metode packaging setelah audit; periksa hak aset, penyimpanan lokal dan izin minimum; build dan tes perangkat Android; uji cold start, mode pesawat, pembaruan dan pemulihan; catat log tanpa data pribadi. APK belum dibuat atau diuji. Tidak mengubah portal dan Vercel sebelum gate integrasi.

## Gate
Sumber asli dan kebutuhan → rancangan → implementasi → tes nyata → review → PR ke staging bila layak. Catat perubahan satu commit logis per tahap. Jangan merge otomatis, force-push atau mengubah sejarah. 
