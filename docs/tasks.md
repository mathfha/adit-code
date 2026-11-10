# Task Implementasi Website Adit Code

Checklist ini mengubah [prd.md](./prd.md), [design.md](./design.md), [content.md](./content.md), dan [tech-stack.md](./tech-stack.md) menjadi urutan kerja. Semua task belum dikerjakan sampai implementasi dan pemeriksaannya benar-benar selesai.

## 0. Keputusan dan bahan

- [ ] Konfirmasi domain final dan akses hosting.
- [ ] Pilih nomor WhatsApp yang akan ditampilkan.
- [ ] Sediakan email bisnis.
- [ ] Putuskan harga paket atau cara memberi estimasi.
- [ ] Tinjau dan setujui copy di [content.md](./content.md).
- [ ] Kumpulkan minimal dua proyek yang boleh dipublikasikan, termasuk label proyek contoh jika bukan proyek klien.
- [ ] Siapkan screenshot dan tautan demo yang benar-benar berfungsi.
- [ ] Putuskan apakah akan memakai foto pribadi; jangan membuat atau mengambil foto sebagai pengganti tanpa persetujuan.
- [ ] Putuskan analitik yang akan dipakai dan tinjau kebijakan privasinya.

**Selesai jika:** seluruh keputusan yang dibutuhkan untuk mengisi konten rilis sudah tersedia atau bagiannya secara sadar dihapus dari scope.

## 1. Menyiapkan proyek Laravel dan React

- [x] Pasang Laravel Installer dan buat proyek dengan React Starter Kit resmi berbasis Inertia.
- [x] Gunakan SQLite untuk local development dan jangan aktifkan autentikasi untuk scope landing page.
- [x] Pertahankan `composer.lock` dan `package-lock.json`.
- [x] Pastikan app lolos test dan frontend berhasil di-build.
- [ ] Tentukan hosting yang mendukung PHP/Laravel sebelum konfigurasi deployment.

**Prasyarat:** keputusan tech stack tidak berubah.

**Selesai jika:** Laravel dapat dijalankan lokal dan halaman React starter dirender melalui Inertia tanpa error.

## 2. Membangun kerangka halaman

- [x] Tambahkan landmark header, nav, main, dan footer serta `lang="id"` pada layout React.
- [x] Susun bagian hero, layanan, portofolio, cara kerja, harga, tentang, dan kontak mengikuti copy yang disetujui.
- [x] Pastikan setiap item navigasi menuju ID bagian yang benar-benar ada.
- [x] Gunakan heading semantik dengan satu `h1` dan urutan heading yang tidak melompat.
- [x] Tampilkan placeholder berlabel selama konten atau gambar belum siap. Jangan tampilkan proyek atau foto rekaan sebagai aset final.

**Prasyarat:** task 0 selesai untuk konten yang ingin diterbitkan.

**Selesai jika:** semua bagian yang ditampilkan memiliki konten sumber dan tidak ada tautan navigasi yang buntu.

## 3. Menerapkan desain responsif

- [x] Terapkan warna, tipografi, motif, dan alasan komposisi dari [design.md](./design.md).
- [x] Jadikan tema terang tampilan utama dan tambahkan tema gelap sesuai preferensi sistem.
- [x] Tambahkan kontrol manual tema yang dapat digunakan dengan keyboard.
- [x] Buat komposisi tiap bagian mengikuti isinya, bukan mengulang kartu seragam.
- [x] Periksa lebar 320 px, ukuran mobile umum, tablet, dan desktop.
- [x] Pastikan tidak ada scroll horizontal, teks terpotong, atau elemen saling menimpa.
- [x] Pastikan target sentuh minimal 44 × 44 piksel dan indikator fokus terlihat.
- [x] Hormati `prefers-reduced-motion`.

**Prasyarat:** task 2 memiliki kerangka halaman.

**Selesai jika:** tata letak dan interaksi dasar nyaman pada ukuran mobile dan desktop dalam kedua tema.

## 4. Menghubungkan tindakan

- [x] Hubungkan CTA WhatsApp ke nomor final dengan pesan awal yang sudah disetujui.
- [x] Pastikan semua CTA WhatsApp, termasuk tombol mobile, membuka tujuan yang benar.
- [x] Hubungkan Instagram dan email ke alamat final.
- [x] Pastikan tombol menu mobile membuka dan menutup menu dengan mouse dan keyboard.
- [x] Pastikan kontrol tema mengganti tema dan tidak menutupi preferensi sistem saat belum ada pilihan manual.
- [x] Pastikan keadaan hover, aktif, fokus, dan disabled terlihat jika keadaan tersebut digunakan.

**Prasyarat:** task 0 menyertakan kontak final dan task 3 menetapkan kontrol UI.

**Selesai jika:** setiap kontrol menjalankan aksi nyata, punya nama yang dapat diakses, dan dapat digunakan dengan keyboard.

## 5. Menambahkan media dan SEO

- [ ] Optimalkan screenshot proyek dan simpan dalam format yang sesuai.
- [ ] Tetapkan lebar dan tinggi setiap gambar; beri alt text yang sesuai atau alt kosong untuk gambar dekoratif.
- [ ] Jangan lazy-load gambar utama hero. Gunakan lazy loading untuk gambar di bawah lipatan bila sesuai.
- [ ] Tambahkan title, meta description, canonical URL, dan Open Graph dari data final.
- [ ] Buat dan uji sitemap serta `robots.txt` untuk domain produksi.
- [x] Periksa favicon atau identitas grafis hanya setelah aset final disediakan atau disetujui.

**Prasyarat:** domain, proyek, dan aset publik final sudah diputuskan.

**Selesai jika:** metadata menunjuk ke domain dan preview yang benar, gambar memiliki ukuran serta teks alternatif yang sesuai.

## 6. Analitik dan privasi

- [ ] Putuskan apakah analitik akan aktif saat soft launch.
- [ ] Konfigurasikan analytics secara non-blocking jika dipilih.
- [ ] Ukur klik CTA secara agregat tanpa merekam data pribadi atau isi pesan.
- [ ] Tambahkan pemberitahuan privasi yang sesuai dengan penyedia analytics yang benar-benar digunakan.
- [ ] Uji bahwa situs tetap berfungsi saat analytics diblokir atau gagal dimuat.

**Prasyarat:** task 0 menetapkan penyedia dan metode pengukuran.

**Selesai jika:** pengukuran yang dipasang sesuai dengan keputusan privasi dan tidak menghambat halaman.

## 7. Pemeriksaan sebelum rilis

- [ ] Jalankan test Laravel dan build produksi frontend, lalu perbaiki error atau warning yang relevan.
- [ ] Uji tautan navigasi, CTA, menu mobile, tema, Instagram, email, dan WhatsApp satu per satu.
- [ ] Uji keyboard: Tab, Shift+Tab, Enter, dan Space.
- [ ] Uji tema terang dan gelap serta breakpoint mobile dan desktop.
- [ ] Periksa console browser dan network untuk error.
- [ ] Uji kontras teks terhadap latar yang benar-benar digunakan.
- [ ] Jalankan Lighthouse mobile dan simpan hasil terukur; jangan menyebut angka sebelum tes dilakukan.
- [ ] Uji preview Open Graph di layanan sosial yang dituju.
- [ ] Pastikan tidak ada teks placeholder, tautan mati, klaim tanpa bukti, atau proyek tanpa label yang benar.

**Prasyarat:** task 1 sampai task 6 selesai sesuai fitur yang dipilih.

**Selesai jika:** acceptance criteria di bagian 17 [prd.md](./prd.md) terpenuhi dan bukti pengujian dicatat.

## 8. Deploy dan soft launch

- [ ] Deploy ke hosting yang dipilih.
- [ ] Sambungkan domain final dan pastikan HTTPS aktif.
- [ ] Uji halaman produksi, bukan hanya preview lokal.
- [ ] Periksa ulang WhatsApp, metadata sosial, analytics, dan tampilan mobile setelah deploy.
- [ ] Pasang tautan website di bio Instagram setelah portofolio dan konten siap.
- [ ] Tinjau metrik kunjungan dan klik CTA setelah soft launch tanpa menganggap klik sebagai order.

**Prasyarat:** task 7 selesai dan domain aktif.

**Selesai jika:** halaman produksi bisa diakses, kontak bekerja, dan tidak ada placeholder yang tertinggal.
