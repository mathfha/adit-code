# Tech Stack Website Adit Code

Status: Rekomendasi untuk versi pertama  
Spesifikasi produk: [prd.md](./prd.md)  
Arah desain: [design.md](./design.md)

## Keputusan

Bangun website dengan **Laravel, Inertia.js, React, TypeScript, dan Tailwind CSS** memakai React Starter Kit resmi Laravel, lalu deploy ke layanan yang mendukung aplikasi PHP. Laravel menangani routing dan mengirim props halaman Inertia ke React. SQLite cukup untuk pengembangan awal; landing page publik tidak memerlukan database produk atau autentikasi sampai ada fitur yang benar-benar membutuhkannya.

Pilihan ini mengikuti keputusan implementasi terbaru: Laravel menangani routing, sementara Inertia menghubungkan route dan controller Laravel ke halaman React tanpa membangun API terpisah. Starter Kit resmi menyediakan susunan frontend yang terintegrasi. Meski begitu, untuk landing page sederhana pendekatan ini lebih kompleks daripada generator situs statis; hindari menambahkan backend tambahan, login, atau penyimpanan data produk yang belum diperlukan.

## Komponen teknis

| Area                    | Pilihan                                                                            | Catatan                                                                                                                                      |
| ----------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Backend dan routing     | Laravel versi stabil yang dipasang oleh Laravel Installer                          | Route web tetap menjadi sumber navigasi. Tidak perlu membuat REST API untuk halaman publik.                                                  |
| Frontend bridge         | Inertia.js dari Laravel React Starter Kit                                          | Gunakan page props dari controller dan hindari duplikasi data yang tidak perlu.                                                              |
| UI                      | React dan TypeScript                                                               | Pertahankan komponen kecil dan sesuai fungsi halaman.                                                                                        |
| Styling                 | Tailwind CSS dari starter kit                                                      | Terapkan token visual dan motif pada [design.md](./design.md), hindari kelas dekoratif tanpa tujuan.                                         |
| PHP dependencies        | Composer dan `composer.lock`                                                       | Kunci dependency agar setup dapat diulang.                                                                                                   |
| JavaScript dependencies | npm dan `package-lock.json`                                                        | Kunci dependency frontend agar setup dapat diulang.                                                                                          |
| Font                    | Sans-serif sistem dan Consolas untuk aksen teknis                                  | Tidak perlu memuat font dari pihak ketiga.                                                                                                   |
| Runtime                 | PHP dan ekstensi yang dibutuhkan versi Laravel terpasang, serta Node.js untuk Vite | Periksa versi aktual terhadap dokumentasi Laravel sebelum upgrade.                                                                           |
| Database                | SQLite untuk pengembangan awal                                                     | Belum diperlukan untuk landing page; gunakan hanya bila fitur berikutnya menyimpan data.                                                     |
| Hosting                 | Layanan yang menjalankan aplikasi PHP/Laravel                                      | Pilih setelah kebutuhan runtime, scheduler, penyimpanan, dan domain diketahui. Cloudflare Pages saja tidak menjalankan aplikasi Laravel/PHP. |
| Kontak                  | Tautan `wa.me`, Instagram, dan email                                               | Tidak ada form atau data kontak yang disimpan di server.                                                                                     |
| Analitik                | Diputuskan sebelum rilis                                                           | Pilih layanan yang kompatibel dengan hosting dan tinjau privasinya. Catat klik CTA secara agregat tanpa isi pesan atau data pribadi.         |
| Domain                  | Dipilih dan dikonfirmasi sebelum rilis                                             | Jangan menerbitkan URL kanonis atau Open Graph dengan domain sementara.                                                                      |

## Batas implementasi

- Gunakan Laravel web routes dan controller untuk merender halaman Inertia. Jangan menambah API, CMS, atau pembayaran untuk versi pertama.
- Tidak perlu memasang autentikasi atau dashboard. Jika kebutuhan tersebut muncul, definisikan sebagai perubahan scope terlebih dahulu.
- Gunakan komponen React hanya saat membantu membagi bagian halaman atau mengelola konten proyek. Jangan mengabstraksikan markup yang hanya dipakai sekali tanpa manfaat nyata.
- Gunakan `<a>` untuk navigasi dan tindakan eksternal, serta `<button>` untuk aksi antarmuka seperti membuka menu atau mengganti tema.
- Menu mobile harus dapat dibuka dan ditutup dengan keyboard serta punya nama aksesibel.
- Tema terang menjadi tampilan awal. Tema gelap mengikuti preferensi sistem dan dapat diubah lewat kontrol manual. Pastikan pilihan manual tidak berkedip saat halaman dimuat.
- Simpan gambar proyek secara lokal, kompres sebelum dipasang, beri dimensi eksplisit, dan gunakan teks alternatif sesuai isi gambar. Minta persetujuan sebelum memilih gambar yang merepresentasikan Adit atau klien.
- Muat gambar utama hero tanpa lazy loading. Gambar lain boleh lazy-load bila berada di luar area awal.
- Muat analitik secara non-blocking dan jangan membuat situs gagal saat analitik tidak tersedia.

## Metadata dan SEO

- Isi `<html lang="id">`, judul halaman, meta description, dan canonical URL.
- Tambahkan Open Graph setelah domain dan gambar preview final tersedia.
- Buat sitemap dan `robots.txt` sesuai domain produksi.
- Gunakan satu `h1`, heading berurutan, landmark halaman, dan alt text untuk setiap gambar.
- Jangan menambahkan schema atau data bisnis seperti alamat, jam buka, atau rating jika Adit belum menyediakan datanya.

## Lingkungan dan alur kerja

- Gunakan PHP yang memenuhi kebutuhan versi Laravel terpasang. Catat versi aktual pada setup proyek.
- Gunakan Node.js yang didukung oleh Vite dan starter kit terpasang.
- Pertahankan `composer.lock` dan `package-lock.json`.
- Gunakan perintah yang dihasilkan starter kit untuk menjalankan aplikasi dan membangun aset; periksa `composer.json` serta `package.json` sebelum mengubah scripts.
- Jalankan test Laravel dan build frontend sebelum deploy. Periksa halaman lokal pada ukuran mobile serta desktop.
- Simpan rahasia dan token deploy di pengaturan platform hosting, bukan di source code.

## Pengukuran dan privasi

- Target performa dan metrik pada PRD adalah kriteria yang harus diuji, bukan klaim yang boleh ditulis sebelum pengukuran.
- Catat hasil Lighthouse mobile dengan tanggal, konfigurasi, dan URL yang diuji.
- Tinjau dokumentasi privasi penyedia analitik dan kewajiban pemberitahuan yang berlaku sebelum mengaktifkannya.
- Jangan merekam isi pesan WhatsApp, nomor pengunjung, atau informasi pribadi di analytics.
- HTTPS harus aktif pada domain produksi sebelum tautan dipublikasikan.

## Hal yang masih perlu dikonfirmasi

- Domain final dan akses ke layanan hosting Laravel/PHP.
- Alamat email yang akan ditampilkan.
- Nomor WhatsApp yang digunakan untuk bisnis.
- Pilihan analitik dan mekanisme pencatatan klik CTA yang sesuai dengan kebutuhan privasi.
- Versi Laravel, PHP, Inertia, React, Node, dan toolchain aktual pada lockfile proyek.
