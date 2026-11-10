# Adit Code: Arah Desain

Status: Arah aktif untuk rilis website pertama  
Pemilik: Aditya Rahman  
Spesifikasi produk: [prd.md](./prd.md)

## Pembacaan desain

Ini adalah landing page studio web personal untuk pemilik UMKM dan profesional independen, dengan bahasa visual editorial yang berfokus pada hasil kerja. Dial desain: ENERGY 2 / RHYTHM 3 / MOTION 1.

Website perlu terasa seperti studio kecil yang teliti dan terbuka menunjukkan proses serta hasil kerjanya. Hindari tampilan terminal, landing page SaaS generik, dan template agensi. Putih menjadi kanvas utama. Karakter datang dari hierarki tipografi dan proyek nyata, bukan dari dekorasi.

## Identitas

- **Kepribadian:** lugas, teliti, ramah, dan paham teknis.
- **Gagasan visual:** catatan kerja developer independen yang disajikan dengan jelas seperti portofolio ringkas.
- **Motif utama:** kursor kecil berwarna teal yang sesekali muncul di dekat label teknis atau penanda bagian. Motif ini menghubungkan brand dengan kegiatan coding tanpa membuat halaman menyerupai terminal palsu.
- **Nama brand:** gunakan teks “Adit Code” sampai logo final disediakan atau disetujui. Jangan mengarang logo atau foto profil final.
- **Gaya bahasa:** bahasa Indonesia yang santai dan spesifik. Jelaskan manfaat website untuk calon klien, hindari klaim besar dan kalimat pemasaran yang samar.

## Warna

Kombinasi aktif: **Charcoal + Sand + Electric Blue**

| Peran         | Tema terang (Sand Canvas) | Tema gelap (Charcoal Canvas) | Penggunaan                          |
| ------------- | ------------------------- | ---------------------------- | ----------------------------------- |
| Kanvas utama  | `#F8F6F2` (Warm Sand)     | `#0F1115` (Deep Charcoal)    | Latar halaman                       |
| Kartu/Surface | `#FFFFFF`                 | `#171A20`                    | Kontainer komponen dan kartu        |
| Teks utama    | `#181B1F` (Charcoal)      | `#F5F2EB` (Sand White)       | Judul, isi, dan label penting       |
| Teks sekunder | `#5C6066`                 | `#A8A399`                    | Penjelasan pendukung dan metadata   |
| Garis batas   | `#E5E0D6`                 | `#262A32`                    | Garis pembatas halus                |
| Aksen brand   | `#2563EB` (Electric Blue) | `#3B82F6` (Electric Blue)    | CTA utama, tombol aktif, dan fokus  |
| Bidang aksen  | `#EFF6FF`                 | `#132038`                    | Sorotan kecil pada penanda status   |

Sand menjadi kanvas terang yang hangat, nyaman di mata, dan bernuansa editorial. Charcoal menjadi penegas struktur dan teks yang kontras tinggi serta menjadi kanvas utama pada tema gelap. Electric Blue memberi aksen modern yang presisi dan bertenaga pada titik-titik interaksi utama. Seluruh teks telah diuji memenuhi standar kontras WCAG AA.

## Tipografi

- **Teks utama:** sans-serif sistem, misalnya `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- **Aksen teknis:** Consolas, dengan `"Courier New", monospace` sebagai fallback. Pakai hanya untuk potongan kode pendek, metadata proyek, atau motif kursor.
- Jangan gunakan Consolas untuk seluruh judul dan isi. Fungsinya memberi penanda teknis, sementara sans-serif menjaga kenyamanan membaca teks panjang.
- Gunakan kapitalisasi kalimat. Hindari judul besar dengan font monospace dan label huruf kapital dengan jarak huruf berlebihan.
- Utamakan font sistem yang tersedia di perangkat agar halaman tidak perlu menunggu font eksternal.

## Komposisi dan tata letak

- Ikuti urutan baca yang jelas: layanan Adit, contoh hasil kerja, proses proyek, informasi harga, lalu kontak.
- Jadikan hasil kerja sebagai bukti utama. Tampilkan proyek unggulan dengan gambar dan penjelasan masalah serta solusi yang berdekatan. Jangan memaksa semua proyek atau layanan masuk ke kartu yang seragam.
- Variasikan komposisi sesuai isi: daftar layanan yang ringkas, sorotan proyek editorial, urutan proses, lalu penutup kontak yang sederhana.
- Gunakan ruang kosong untuk memisahkan gagasan dan membentuk ritme, bukan sebagai dekorasi kosong. Jaga lebar teks agar nyaman dibaca di layar besar.
- Di layar kecil, susun konten mengikuti urutan baca yang sama. Hindari scroll horizontal dan sediakan area sentuh minimal 44 × 44 piksel.
- Garis pembatas hanya dipakai untuk mengelompokkan informasi yang berkaitan. Jangan memberi semua elemen bayangan atau membuat semua bentuk menjadi kapsul.
- Menu hanya boleh menuju bagian yang benar-benar ada. Jaga label tetap singkat dan pastikan CTA WhatsApp mudah ditemukan tanpa menutupi konten.

## Gambar dan konten

- Gunakan screenshot proyek nyata atau foto yang sudah disetujui. Minta persetujuan sebelum membuat atau memilih gambar yang merepresentasikan Adit atau klien.
- Beri label “Proyek contoh” pada pekerjaan non-klien. Jangan memberi kesan seolah-olah proyek contoh adalah pesanan klien.
- Jika gambar belum siap, gunakan placeholder yang jelas selama pengembangan. Jangan menjadikan skeleton atau screenshot rekaan sebagai hasil proyek final.
- Jangan menambahkan testimoni, logo klien, statistik, atau klaim yang tidak dapat diverifikasi Adit.
- Jelaskan tiap proyek secara konkret: target pengguna, kebutuhan yang dijawab, kontribusi Adit, dan tautan demo yang benar-benar berfungsi jika tersedia.

## Interaksi dan gerak

- **MOTION 1:** gunakan gerak hanya untuk umpan balik, seperti keadaan hover, aktif, dan fokus keyboard. Hindari parallax, animasi berulang, dan animasi saat menggulir.
- Hormati preferensi `prefers-reduced-motion`.
- Tautan dan tombol harus terlihat interaktif, bisa digunakan dengan keyboard, dan memiliki indikator fokus yang jelas. Setiap kontrol harus memiliki tujuan atau tindakan nyata.
- Jika tema terang dan gelap disediakan, tema terang tetap menjadi tampilan utama brand. Tema gelap harus menjaga kontras dan menyediakan kontrol manual untuk berpindah tema.
- Gunakan CTA yang menjelaskan tindakannya, misalnya “Diskusikan proyek lewat WhatsApp”.

## Dial desain

- **ENERGY 2:** tampil percaya diri dan ramah tanpa pembuka bergaya agensi yang terlalu ramai.
- **RHYTHM 3:** variasikan komposisi layanan, proyek, proses, dan kontak agar alur mengikuti isi, bukan mengulang pola kartu.
- **MOTION 1:** gerak dibatasi pada umpan balik interaksi agar perhatian tetap pada hasil kerja dan jalur kontak.

## Alasan keputusan

- **Kanvas putih:** membuat portofolio menjadi bukti visual utama dan terasa mudah didekati oleh pemilik usaha kecil.
- **Consolas untuk aksen:** memberi suara teknis yang khas tanpa mengorbankan keterbacaan teks panjang.
- **Aksen teal:** meneruskan gagasan brand yang sudah ada dan menandai tindakan utama; penggunaan terbatas menjaga aksen tetap bermakna.
- **Sorotan proyek editorial:** hasil proyek perlu konteks lebih banyak daripada yang bisa disampaikan oleh grid thumbnail seragam.
- **Gerak minimal:** halaman berfokus pada informasi dan kontak, sehingga animasi tidak boleh mengganggu proses membaca.
- **Tidak mengarang aset visual:** hasil kerja dan identitas yang disetujui pemilik brand menjadi dasar kepercayaan.

## Hubungan dengan PRD

File ini menjadi acuan visual utama dan menggantikan pilihan warna serta tipografi lama pada bagian 11 PRD. Cakupan produk, isi halaman, dan tujuan konversi tetap mengikuti [prd.md](./prd.md).
