# Hurairah World — Web Edition 0.8.0

Prototipe pendidikan Raudhah’s Dome, cabang hurairah-web-stable. Tidak mengubah aplikasi utama.

## Menjalankan
Buka index.html dalam browser. Tidak memerlukan instalasi, npm, akun, API, atau server untuk mode permainan lokal. Pada hosting HTTPS, service worker mencoba menyimpan aset lokal agar sesi berikutnya dapat dibuka offline. Pemasangan sebagai PWA bergantung pada dukungan browser.

## Alur
- Dunia 20 × 20 petak, peta 2D dan visualisasi WebGL first-person dari keadaan dunia yang sama.
- Gerak petak, kamera putar, konstruksi satu petak, pengambilan objek, navigasi BFS Hurairah, empat lokasi.
- Kitab Penemuan dan filter lima ranah IQRA’. Materi adalah draf pengantar, belum audit kitab/kurikulum.
- Lima cerita opsional: Misteri Buku, Bayangan, Anugerah Ilmu, Ruang Bersama, Kebun.
- Refleksi dan gagasan khidmah tidak menilai iman. Kegiatan luar game bersifat pilihan.
- Simpan lokal, ekspor/impor JSON, data versi lama kompatibel.
- Diagnostik internal menjalankan uji fungsi permainan tanpa mengubah dunia pemain.

## Publikasi
Gunakan host statis HTTPS. GitHub Pages memerlukan konfigurasi oleh pemilik repositori. Jika repo sudah memakai Pages untuk aplikasi utama, jangan ubah sumber deploy tanpa memeriksa dampaknya. Alamat yang direncanakan untuk deployment dari root cabang: https://hajighozi.github.io/AL-MUDDAKIR-/hurairah-world/

## Batas versi
Belum merupakan Minecraft lengkap: gerakan diskret, dunia terbatas, satu jenis objek per petak, bukan penumpukan voxel bebas; tidak ada multiplayer, akun, AI generatif, atau audio. Bangunan 3D masih berupa model blok tanpa atap autentik. Ilmu draf perlu verifikasi guru dan sumber. WebGL, kinerja Android, cache offline serta ekspor/impor harus diperiksa di browser. Jangan menganggap jumlah tes logika sebagai bukti uji pengguna atau rilis produksi.

## Uji penerimaan
1. Buka website; klik Dunia 3D, kemudian Peta 2D. Posisi harus sama.
2. Kunjungi empat lokasi; periksa Hurairah mengikuti.
3. Bangun dan ambil objek; pastikan tidak dapat menimpa pemain/kucing.
4. Teliti objek; filter Kitab Penemuan.
5. Selesaikan cerita opsional dan coba ulang.
6. Simpan, muat ulang; ekspor cadangan, impor setelah konfirmasi.
7. Jalankan diagnostik; periksa hasil.
8. Di HTTPS setelah cache siap, uji reload offline.
9. Uji WebGL gagal atau context loss; peta tetap berfungsi.
10. Uji layar kecil, touch, keyboard, navigasi aksesibilitas.
