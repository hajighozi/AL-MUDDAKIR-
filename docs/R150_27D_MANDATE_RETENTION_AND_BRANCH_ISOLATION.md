# R150.27-D — Mandat anti-kehilangan dan isolasi branch
27 November 2026. Instruksi pengguna: jangan meninggalkan satu pun commit yang pernah diminta; pisahkan pekerjaan yang berpotensi mengganggu branch. Ini merupakan addendum [SP01–12](R149_1_SPECIAL_REQUESTS.md), [ledger](R150_27A_COMMIT_LEDGER.json), [roadmap](R150_27B_COMMIT_ROADMAP.md), [index](R150_27C_PROJECT_COMMIT_INDEX.md). Tidak menulis ulang dokumen historis.
## Dua belas mandat khusus
| ID | Mandat | Branch aktif | Rujukan / gate |
|---|---|---|---|
| SP-01 | Scanner tumbuhan Sumatera | feature/alam | R154C; identifikasi dengan ketidakpastian dan validasi ahli, bukan konsumsi/pengobatan |
| SP-02 | Pustaka Rehat offline | feature/pustaka-rehat | R154F; bookmark, font, mode malam, kamus, hak bacaan |
| SP-03 | IQRA’ GO | feature/iqra-go | [829edec](https://github.com/hajighozi/AL-MUDDAKIR-/commit/829edec8882fba28d24f654fb487ff75af185d22) — rencana saja |
| SP-04 | Roblox pendidikan | feature/roblox-learning | [7c0ee8c](https://github.com/hajighozi/AL-MUDDAKIR-/commit/7c0ee8c29478883feadfbf44e98c143582b35483) — rencana saja |
| SP-05 | Fahimuunal Qur’an ala Duolingo | feat/fahimuunal-vercel | R153A/B; koordinasi feature/quran; kode asli belum ditemukan |
| SP-06 | APK offline/debug | feature/offline-android | [c8dadd3](https://github.com/hajighozi/AL-MUDDAKIR-/commit/c8dadd3feaa99ecd378c0fb42203dc380e263b0a) — rencana saja |
| SP-07 | Integrasi Codex | raudhah-integrated | AGENTS.md, tugas, tes, checkpoint; belum dieksekusi |
| SP-08 | Media Raudhah’s Dome | feature/raudhah-media | [c2bb690](https://github.com/hajighozi/AL-MUDDAKIR-/commit/c2bb690f8866877d13d96a9c2d6d915b7f058930) — rencana saja |
| SP-09 | Master Plan terpadu | feature/raudhah-pedagogy | R151/R154/R157; versi dan konflik |
| SP-10 | Riset Tan Malaka, Madilog, tasawuf, Haji Jami’, Suliki | feature/riset-malaka | [4731147](https://github.com/hajighozi/AL-MUDDAKIR-/commit/473114721841ecf3ee8f8b4878e7cda49d26fceb) — rencana saja |
| SP-11 | Ilmu alat Forge–Ibu–Anak–Cucu–Fashl | feature/kitab-iqra | R150.28C/E, R152A; koordinasi enam fakultas |
| SP-12 | Vercel/GitHub | raudhah-integrated | R155/R157; preview, tests, rollback |
## Aturan anti-kehilangan
1. Pertahankan 76 commit main yang ditemukan, 67 path tambahan snapshot awal, tujuh commit R150.27A–C dan seluruh nomor R/SP. 40/67 objek commit cocok dengan path; 27 SHA historis belum ditelusuri, bukan hilang atau dihapus. Jangan mengarang SHA.
2. Lima branch baru dibuat dari main untuk SP03/04/06/08/10, masing-masing satu commit rencana. Status semua implementasi masih PLANNED/BLOCKED sesuai gate. Branch terpisah bukan penundaan tanpa jejak. SP lain tetap di branch yang sesuai; jangan mencampur aplikasi asli dengan prototipe.
3. Setiap permintaan diberi ID, sumber/tanggal, branch, status, ketergantungan, kriteria penerimaan dan tautan commit jika benar-benar ada. Jika konflik, catat dua versi serta keputusan yang diperlukan. Jangan drop/squash/rebase/force-push atau menghapus branch tanpa persetujuan eksplisit. Merge ke staging hanya setelah diff, konflik semantik, tes dan review; main setelah gate rilis. Jangan mengklaim checkout, debug atau tes jika tidak dijalankan.
4. Pertahankan R150.26 dan R150.28A–E, R151–157. Audit dua ZIP belum selesai; seluruh mandat historis belum bisa dijamin lengkap sampai sumber asli ditelusuri. SP07 perlu AGENTS.md dan workflow Codex, bukan sekadar dokumentasi; SP05 dan Maqra 500+100 perlu sumber asli. Pertahankan manual developer/researcher/murabbi/learner dan data dictionary/API/SOP/risk/ethics/validation sebagai kandidat yang perlu verifikasi terhadap Master Plan/M1–M7, bukan instruksi eksplisit baru yang diasumsikan.
5. Tidak mengunggah arsip privat, data anak, kredensial, atau konten berhak cipta. Perlindungan anak, kebebasan bertanya, pendampingan manusia, dan kegiatan Khidmah sipil yang aman menjadi gate. Tidak mengadopsi desain militer atau klaim historis tanpa bukti.
## Checkpoint
Setelah lima commit branch terpisah, rencana disimpan secara nyata; tidak ada aplikasi baru yang dibangun. Dokumen ini menambah satu commit staging. Audit ulang branch/main sesudahnya. Tidak merge main atau deploy.