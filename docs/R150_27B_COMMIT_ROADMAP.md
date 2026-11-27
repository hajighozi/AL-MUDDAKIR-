# R150.27-B — Roadmap commit dan gerbang rilis
Tanggal 2026-11-27. Usulan urutan kerja, tidak mengubah keputusan pengguna atau menyatakan tugas yang direncanakan selesai. Snapshot awal: main 6d37763c8cb63f70db5bef951a0050b2a3692e93; 76 commit main ditemukan; 16 branch termasuk main; 67 commit tambahan (67 path berbeda, 0 overlap, 0 behind). Register: [R150.27-A](R150_27A_COMMIT_LEDGER.json). Angka snapshot tidak memasukkan commit penataan R150.27 sendiri.
## Status wajib
COMMITTED = SHA/path atau diff tersedia. DRAFT = substansi belum disahkan. VERIFIED = bukti dan kriteria penerimaan diperiksa. TESTED = ada hasil tes yang dapat diulang. STAGED = PR sudah digabung staging dan diuji. RELEASED = main dan verifikasi deployment. BLOCKED = prasyarat belum tersedia. PLANNED = belum dikerjakan. COMMITTED bukan VERIFIED atau TESTED. Jangan menandai rilis dari dokumen atau rencana semata.
## Urutan pekerjaan, satu commit logis per hasil
| ID | Branch | Commit yang direncanakan | Gate penerimaan |
|---|---|---|---|
| R150.26 | raudhah-integrated | audit(corpus): register MG04 pedagogical genealogy | lokator, tipe sumber, klaim dan keterbatasan; belum dilakukan |
| R150.28A | feature/kitab-iqra | audit(corpus): verify two ZIP inventories locally | hash, jumlah, duplikasi, provenance, tanpa isi privat di repo; R150.7 asli masih blocked |
| R150.28B | raudhah-integrated | audit(corpus): segment MG03 and MG04 | unit dokumen dan rentang halaman; MG01 baru batas awal; MG02 belum dedup penuh |
| R150.28C | feature/kitab-iqra | audit(ontology): reconcile 398 candidate disciplines | sumber asli dan A-H tiap kandidat; R150.8 asli belum selesai; tidak menyamakan 59 Fashl |
| R150.28D | feature/surau-shift | audit(turats): reconcile definitions and transmission | edisi, halaman, bukti, perbedaan ulama; R150.8C dan R150.17 belum tuntas; KitabPedia custom GPT tidak dapat dipanggil langsung |
| R150.28E | feature/kitab-iqra | docs(ontology): resolve glossary and five domains | konflik istilah, 5 objek vs 6 aplikasi; keputusan pengguna/ahli diperlukan |
| R151A | feature/raudhah-pedagogy | docs(identity): reconcile institute names and pedagogy | konfirmasi nama, ejaan, hak media, cakupan Sumatera |
| R151B | feature/raudhah-pedagogy | docs(murabbi): consolidate competency and safeguarding | MB01–08; tanggung jawab orang dewasa, kebebasan memilih, jalur pengaduan, tidak ada skor iman |
| R152A | feature/kitab-iqra | feat(knowledge): version approved source mappings | 59 Fashl dengan status eksplisit, jangan menaikkan status tanpa evidensi |
| R152B | feature/raudhah-pedagogy | feat(pedagogy): implement M3 schema and links | 16 komponen, 30 kompetensi, 9 unit; review schema, referensi, tes |
| R153A | feat/fahimuunal-vercel | chore(quran): recover original app and tests | branch saat ini identik main; perlu kode asli/akses; jangan mengaku sudah ada app utuh |
| R153B | feat/fahimuunal-vercel | feat(quran): verified FAHIM content and spaced review | data tervalidasi, tes pengulangan, offline, preview; tanpa data pribadi |
| R153C | feature/hadis | feat(hadis): reconcile Maqra 500+100 | cek naskah resmi, nomor, matan, takhrij; data belum lengkap |
| R153D | feature/lughah | feat(lughah): add validated learning exercises | sumber, ahli bahasa, tes |
| R154A | feature/tan-project | feat(khidmah): build first safe service-learning unit | kebutuhan mitra, persetujuan, pengawasan dewasa, manfaat terukur |
| R154B | feature/surau-shift | feat(surau): implement community learning pilot | partisipasi sukarela, perlindungan, evaluasi |
| R154C | feature/alam | feat(alam): implement safe nature observation unit | ketepatan data dan supervisi |
| R154D | feature/peradaban | feat(peradaban): implement local history unit | sumber, izin narasumber, tidak expose data |
| R154E | feature/matematika | feat(matematika): implement reasoning unit | tes soal dan pembahasan |
| R154F | feature/pustaka-rehat | feat(library): offline reading and bookmarks | hak sumber, penyimpanan aman, tes |
| R154G | hurairah-web-stable | feat(game): connect optional learning experiences | tidak menjadikan game pengganti murabbi; uji cache, aksesibilitas |
| R154H | raudhah-integrated | docs(pilot): assemble 12 learning cycles | satu siklus lengkap terlebih dahulu; uji dan review |
| R155 | raudhah-integrated | test(integration): node, browser, offline, privacy | hasil nyata, catatan lingkungan uji; Vercel preview |
| R156 | raudhah-integrated | docs(validation): record educator and partner pilot review | persetujuan, keamanan, umpan balik; tidak mengevaluasi batin |
| R157 | raudhah-integrated | release: review PRs and integrate approved modules | PR feature ke staging, uji, review, PR ke main, cek deploy; tidak force-push |
## Tata kerja
Pakai branch yang sudah ada. Nomor R lama dipertahankan; suffix baru adalah usulan penataan, bukan nomor riwayat baru. R150.26 masih belum dilakukan; R150.27 adalah interupsi penataan yang tidak menggantikan R150.26. R150.28A–E adalah pekerjaan untuk menutup gap, bukan mengganti nomor audit asli. Satu commit satu perubahan logis; tulis konteks, sumber, scope, batas, tes dan langkah berikut. Tidak menulis ulang commit lama. Jangan commit ZIP/PDF mentah, data murid, credential atau teks berhak cipta. Tidak ada merge hanya karena path tidak overlap; konflik semantik dan runtime tetap diperiksa. Tidak menjadikan rencana sebagai bukti. Untuk kajian lingkungan fokus sipil dan ekologis, tidak membuat rancangan operasional militer.
