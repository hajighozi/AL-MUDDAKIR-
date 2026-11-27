# SE — Nagari Kehidupan v0.1

SE (nama kerja Sekolah Eksistensi) adalah prototipe sekolah daring berbentuk permainan pendidikan, dalam konteks Throwbadly / Raudhah's Dome Sumatera. Tujuannya mendukung eksplorasi minat, keterampilan belajar, refleksi, relasi sehat dan karya nyata. Bukan layanan kesehatan mental, diagnosis, atau klaim penyembuhan. Tidak memuat pengalaman pribadi peserta atau penggagas.

## Cara mencoba
Buka index.html dalam browser modern (unduh raw file terlebih dahulu bila menggunakan tampilan kode GitHub). Tidak perlu npm, akun atau server. Belum dipasang pada deployment produksi. Gunakan tombol arah, fokus peta dan panah keyboard, atau tombol lokasi. Pilih perjalanan apa pun, coba satu pilihan dan baca saran aktivitas nyata yang bersifat sukarela. Jeda atau reset kapan saja. Sesi tidak disimpan setelah reload.

## Kurikulum awal
SE01 Aku di dunia — Nagari; SE02 Makna dan arah — Surau; SE03 Aku ingin tahu — Akademi; SE04 Menata keseharian — Pustaka Rehat; SE05 Membangun hubungan — Balai; SE06 Aku bisa berkarya — Kebun; SE07 Jalan ke depan — Nagari. Empat DNA saling mendukung, bukan tahapan wajib atau ukuran keimanan.

## Evidence and limits
Commit prototype 827e02b3b3d1c169b71086c69a5ac38939a106fb. Fourteen pure JavaScript model checks were executed in the authoring environment: unique IDs, existing destinations, choices and activities, boundary and invalid movement, invalid visit, no prerequisite for SE07, select moves to location, answer requires selection, repeat answer counted once, invalid answer, pause, resume, reset. All passed. Source read back via GitHub. No actual browser/Android, accessibility, security review, expert review, participant pilot, or deployment test performed. No new dependencies, network fetch, accounts, chat or persistent save. Existing Hurairah World engine not imported yet; SE is an independent 2D prototype.

## Release gates
First test real mobile browser, keyboard/focus, responsiveness, readability, pause/reset, network requests and absence of persistent participant data. Review educational content with educators and child safeguarding specialists, including religious content with appropriate scholars. Any pilot with minors needs relevant consent, independent protection and appropriate adult supervision. No public chat, private disclosures, compulsory participation, spiritual grading, streak punishment or clinical claims. Do not publish personal information.

## Next steps
SE02 technical browser verification and UX corrections; SE03 reviewable structured curriculum and source register; SE04 one safe optional learning loop with a teacher; SE05 evaluate integration with Hurairah 2D/3D, Al Muddakir, Surau Shift and Tan Project only after testing. IDs are proposed work package names, distinct from the seven journey IDs; no implementation claimed beyond the committed prototype. Retain existing R150.27–38, SP and RBX mandates.

## R150.42 — v0.2 curriculum engine
- R150.42A: curriculum.json is the structured draft source: 13 optional journeys, 5 learning tracks, 6 locations; original seven journeys preserved. Fields: ID, place, DNA, track, objective, evidence example, story, choices, feedback, optional real-life activity, internal link and review status. Internal links are traceability labels, not primary-source validation.
- R150.42B: index.html embeds an exact JSON copy for standalone offline-file usage; track selection and goal/evidence display added. No network fetch, persistent storage, account or chat added. Synchronize embedded data after future curriculum changes.
- R150.42C: tests.mjs checks source/embedded equality and game-model behavior; run `node se-school/tests.mjs` from repository root. Six data-integrity checks and the embedded JSON comparison ran successfully during authoring. The Node suite was authored but not executed in this session. No browser, visual, accessibility or user test performed.
- The original 0.1 model test result remains historical; it does not establish a tested 0.2 release. Next: actual browser/Android verification, review source references and educational content, improve keyboard focus/navigation, then optional career/skill exploration and 3D integration. No claim of clinical benefit or deployment. All tasks remain voluntary and do not assess personal worth, belief or mental state.
