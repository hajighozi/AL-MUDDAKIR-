# R-149 — Register integrasi pedagogik dan backlog
Status: draf koordinasi; tidak mengesahkan materi atau mengklaim efektivitas. Baseline main 6d37763c8cb63f70db5bef951a0050b2a3692e93. R-131/R-133–136 sudah ada; roadmap lama tidak digunakan ulang. Semua branch fitur disinkronkan fast-forward sebelum perubahan, tanpa force-push.
## Commit draf
| Checkpoint | Branch | Commit |
|---|---|---|
| R-137 | feature/raudhah-pedagogy | bff4711620564593d42f41c90d5b733ad5a135eb |
| R-138 | feature/surau-shift | c1181346708a9935d8d969ba77bcca04c9494eb6 |
| R-139 | feature/tan-project | 9f555435fa910caa6fbe3c6ce0c0b7d7e0673f98 |
| R-140 | feature/pustaka-rehat | 43c1efda551dc7bef15cdabe3472e8340e1eb0e1 |
| R-141 | feature/quran | e3716fe1e026f398e0d72155cf93bdba6f5d52f2 |
| R-142 | feature/hadis | 6722c3042ccb5cc6f4ef4b6a150dfe6e7eccf5ad |
| R-143 | feature/lughah | 79b695c4d519a13c1fcd4fa9442aa534329e8f54 |
| R-144 | feature/kitab-iqra | 69f44b3c20c7dcd9761c6f18cadde09e5c3d0db7 |
| R-145 | feature/alam | 5aa28123816dae37654702d7dc93bd1a90fb2e87 |
| R-146 | feature/peradaban | fa5fb90f7adc96578776ab8d205469486b3fcf5b |
| R-147 | feature/matematika | 3b759c2a5b878cdedb36f9e58149c710bbe70405 |
| R-148 | hurairah-web-stable | e7f0b813db1bc26e1af56af2015cea39480eec4c |
## Pemeriksaan dan urutan integrasi
Perbandingan 12 branch: 12 ahead satu commit/satu file, tidak tertinggal. Audit sebelumnya menemukan 125 rujukan file lokal pada 13 HTML tanpa tautan hilang. Ini bukan uji browser atau suite Node. Checkout lokal tidak tersedia (error lingkungan). Dokumen saja; belum merge ke staging/main. Review isi, hak, diff, dan konflik aktual sebelum PR; jangan force-push. R-137 hingga R-144 menetapkan dasar; R-145–148 memerlukan penyelarasan unit, bukan duplikasi R-133.
## Backlog berurutan
- R-150: audit korpus asli termasuk dua ZIP bila dapat diakses; register sumber, lokator, hak, konflik dan 398 kandidat; bedakan 59 jalur publik. Kamus/Jihat serta konflik Nafsiyah dan Aqliyah/Nizhamiyah tetap terbuka.
- R-151: validasi nama institut, identitas audio, telaah raso pareso dan desain bersama murabbi; tidak mengunggah rekaman atau data anak.
- R-152: satukan schema 16 komponen M3, pemetaan 59 Fashl, 30 kompetensi dan 9 unit; buat generator/tes sinkronisasi JSON dan HTML. Usulan unit baru tetap draft sampai review.
- R-153: audit Qur'an FAHIM 1–3 dan Maqra 500+100, teks, lokator, hak dan reviewer; jangan menganggap entri unik/valid.
- R-154: kembangkan 12 siklus tahun pertama, satu siklus lengkap dahulu, rubrik observabel dan alternatif akses.
- R-155: uji Hurairah dan portal di browser/perangkat, Node regression, cache, aksesibilitas, privasi; audit Vercel dan status deployment.
- R-156: pilot kecil yang aman dengan guru, izin lembaga/wali, umpan balik sukarela; tidak menyimpan data pribadi dalam repo publik.
- R-157: PR ke staging, uji dan review; PR ke main hanya setelah gate; catat SHA dan keterbatasan. Tidak menyatakan efektivitas tanpa bukti.
## Branch workflow
feature/raudhah-pedagogy: dokumen lintas institut; feature/surau-shift: Sarang Lebah dan raso pareso; feature/tan-project: pedagogi khidmah; feature/khidmah-lingkungan-padang-longang: studi lingkungan sipil. Staging untuk integrasi lintas modul; main tetap baseline. Status draf tidak berubah hanya karena merge.
