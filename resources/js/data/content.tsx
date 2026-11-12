import React from 'react';

const WA_PHONE = '6281256700457';

export const WA_HERO_URL = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
    'Halo Mas Adit, saya lihat website adit.code.id dan mau konsultasi rencana website untuk usaha saya.',
)}`;

export const WA_FLOATING_URL = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
    'Halo Mas Adit, saya mau tanya-tanya seputar jasa pembuatan website.',
)}`;

export const WA_FOOTER_URL = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
    'Halo Mas Adit, saya ada rencana bikin/perbaiki website dan mau bahas ruang lingkup serta biayanya.',
)}`;

export const WA_URL = WA_FLOATING_URL;
export const IG_URL = 'https://www.instagram.com/adit.code.id/';
export const EMAIL_URL = 'mailto:adit.rwet@gmail.com';
export const LINKEDIN_URL = 'https://linkedin.com/in/aditya-rahman-680938267';
export const GITHUB_URL = 'https://github.com/mathfha';
export const SITE_URL = 'https://matfha.my.id';

export interface NavItem {
    href: string;
    label: string;
}

export const NAV_ITEMS: NavItem[] = [
    { href: '/', label: 'Beranda' },
    { href: '#layanan', label: 'Layanan' },
    { href: '#portofolio', label: 'Portofolio' },
    { href: '#tentang', label: 'Tentang' },
    { href: '#ketentuan', label: 'Ketentuan' },
    { href: '#faq', label: 'Tanya Jawab' },
    { href: '#kontak', label: 'Kontak' },
];

export interface ServiceItem {
    category: string;
    title: string;
    badge: string;
    description: string;
    features: string[];
    suitedFor: string;
    ctaUrl: string;
    delay: string;
    highlighted?: boolean;
}

export const SERVICES: ServiceItem[] = [
    {
        category: 'Untuk Penjualan & Promosi',
        title: 'Landing Page',
        badge: 'Sudah Termasuk Domain & Hosting',
        description:
            'Website satu halaman praktis yang dirancang khusus untuk mempromosikan produk atau jasa Anda, agar calon pembeli langsung tertarik dan mudah memesan via WhatsApp.',
        features: [
            'Sudah termasuk nama domain dan hosting siap pakai',
            'Halaman promosi lengkap: foto produk, keunggulan, ulasan pembeli, dan kontak',
            'Tombol WhatsApp langsung yang otomatis membuka chat dengan nomor Anda',
            'Tampilan rapi, nyaman dibaca, dan pas dibuka di HP maupun komputer',
            'Loading cepat dan ringan saat dibuka calon pelanggan tanpa hambatan',
            'Bantuan penataan kata-kata promosi agar lebih meyakinkan pembeli',
        ],
        suitedFor: 'Produk baru, jualan online, promosi jasa, dan penawaran khusus.',
        ctaUrl: `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
            'Halo Mas Adit, saya mau tanya estimasi biaya dan waktu pengerjaan untuk Landing Page.',
        )}`,
        delay: '0',
        highlighted: false,
    },
    {
        category: 'Untuk Bisnis & Organisasi',
        title: 'Company Profile',
        badge: 'Sudah Termasuk Domain & Hosting',
        description:
            'Website resmi untuk meningkatkan kepercayaan pelanggan, memperkenalkan cerita usaha Anda, menampilkan daftar produk/layanan, dan memudahkan orang menemukan lokasi Anda.',
        features: [
            'Sudah termasuk nama domain dan hosting siap pakai',
            'Halaman profil usaha, cerita perjalanan bisnis, serta visi dan misi',
            'Daftar katalog produk lengkap atau galeri foto layanan Anda',
            'Informasi kontak resmi, nomor telepon, dan petunjuk peta Google Maps',
            'Tampilan elegan dan rapi saat dibuka di layar HP maupun laptop',
            'Dibantu agar nama usaha Anda mudah dicari di pencarian Google',
        ],
        suitedFor: 'UMKM, toko, kantor, sekolah, yayasan, dan penyedia jasa.',
        ctaUrl: `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
            'Halo Mas Adit, saya tertarik buat website Company Profile untuk profil usaha saya. Boleh info rincian biayanya?',
        )}`,
        delay: '100',
        highlighted: true,
    },
    {
        category: 'Solusi Digitalisasi Bisnis',
        title: 'Sistem Informasi',
        badge: 'Sudah Termasuk Hosting & Server',
        description:
            'Aplikasi berbasis website untuk memudahkan pengelolaan data usaha sehari-hari secara rapi, cepat, dan otomatis tanpa repot rekap manual di kertas atau Excel terpisah.',
        features: [
            'Sudah termasuk sewa server online yang aman dan cadangan data berkala',
            'Halaman utama untuk memantau ringkasan penjualan dan stok barang harian',
            'Pencatatan transaksi belanja, riwayat pesanan, dan daftar pelanggan',
            'Cetak nota / faktur otomatis dan unduh laporan ke format Excel atau PDF',
            'Akun login terpisah untuk pemilik dan karyawan sesuai tugas masing-masing',
            'Fitur bisa disesuaikan dengan alur kerja dan kebiasaan usaha Anda',
        ],
        suitedFor: 'Toko, UMKM, instansi, atau bisnis yang butuh pencatatan otomatis.',
        ctaUrl: `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
            'Halo Mas Adit, saya mau diskusi kebutuhan pembuatan Sistem Informasi / Web App untuk operasional usaha saya.',
        )}`,
        delay: '200',
        highlighted: false,
    },
];

export interface ProjectItem {
    title: string;
    category: string;
    badge: string;
    description: string;
    image: string;
    delay: string;
}

export const PROJECTS: ProjectItem[] = [
    {
        title: 'Trip Green Island (Paket Wisata Banyuwangi)',
        category: 'Website Company Profile',
        badge: 'Konsep Proyek',
        description:
            'Website pemesanan paket wisata dan open trip Banyuwangi. Menampilkan pilihan destinasi, rincian fasilitas tur, galeri dokumentasi foto, dan formulir reservasi jadwal keberangkatan.',
        image:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
        delay: '0',
    },
    {
        title: 'Kopi Seduh Nusantara (Profil Usaha Roastery)',
        category: 'Website Profil & Katalog',
        badge: 'Konsep Proyek',
        description:
            'Website profil sangrai kopi (micro-roastery) lokal. Dilengkapi katalog varietas biji nusantara beserta profil rasa (cupping notes), panduan seduh manual, serta integrasi peta lokasi kedai.',
        image:
            'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
        delay: '100',
    },
    {
        title: 'Klinik Fisioterapi Sehat Mandiri',
        category: 'Website Layanan Kesehatan',
        badge: 'Konsep Proyek',
        description:
            'Website layanan kesehatan dan klinik fisioterapi mandiri. Memuat profil sertifikasi terapis, panduan penanganan cedera medis, tarif transparan, serta sistem booking jadwal sesi pasien.',
        image:
            'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
        delay: '0',
    },
    {
        title: 'Graha Cipta Studio (Arsitektur & Renovasi)',
        category: 'Website Portofolio Bisnis',
        badge: 'Konsep Proyek',
        description:
            'Website portofolio studio arsitektur dan kontraktor interior. Menyajikan showcase foto proyek residensial, tahapan kerja perancangan, estimasi alur RAB, dan formulir konsultasi desain awal.',
        image:
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        delay: '100',
    },
];

export interface TermItem {
    num: string;
    title: string;
    description: string;
}

export const TERMS: TermItem[] = [
    {
        num: '1',
        title: 'Revisi Desain',
        description:
            'Landing Page 3 kali, Company Profile 5 kali, Sistem Informasi 7 kali. Fitur baru di luar kesepakatan dibahas terpisah.',
    },
    {
        num: '2',
        title: 'Domain Resmi',
        description:
            'Biaya domain tahun pertama sudah termasuk. Saya bantu daftar dan sambungkan sampai website aktif.',
    },
    {
        num: '3',
        title: 'Hosting & Server',
        description:
            'Hosting dan SSL (HTTPS) tahun pertama sudah termasuk, dioptimasi supaya cepat dibuka.',
    },
    {
        num: '4',
        title: 'Materi & Konten',
        description:
            'Foto, logo, dan informasi dasar dari kamu. Saya bantu merapikan tulisannya supaya enak dibaca.',
    },
    {
        num: '5',
        title: 'Waktu Pengerjaan',
        description:
            'Landing Page 3-5 hari kerja, Company Profile 1-2 minggu, Sistem Informasi 2-4 minggu, dihitung sejak materi lengkap.',
    },
    {
        num: '6',
        title: 'Garansi & Panduan',
        description:
            'Garansi perbaikan jika ada kendala teknis setelah website selesai, plus panduan praktis cara mengelola website Anda.',
    },
];

export interface FaqItem {
    q: string;
    a: React.ReactNode;
}

export const FAQ_ITEMS: FaqItem[] = [
    {
        q: 'Bagaimana alur pengerjaan website dari awal sampai selesai?',
        a: (
            <div className="space-y-3.5 pt-1">
                <p className="text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399]">
                    Alur pengerjaan di Adit Code dirancang jelas, transparan, dan bertahap:
                </p>
                <div className="space-y-3">
                    <div className="border-l-2 border-[#2563EB] pl-3.5 dark:border-[#60A5FA]">
                        <span className="font-mono text-xs font-bold text-[#2563EB] dark:text-[#60A5FA]">
                            01 Konsultasi
                        </span>
                        <p className="mt-0.5 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399]">
                            Ceritakan masalah dan kebutuhan usahamu. Saya bantu cari solusi yang pas.
                        </p>
                    </div>
                    <div className="border-l-2 border-[#2563EB] pl-3.5 dark:border-[#60A5FA]">
                        <span className="font-mono text-xs font-bold text-[#2563EB] dark:text-[#60A5FA]">
                            02 Deal
                        </span>
                        <p className="mt-0.5 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399]">
                            Kita sepakati ruang lingkup, harga, dan jadwal. Pengerjaan dimulai setelah DP.
                        </p>
                    </div>
                    <div className="border-l-2 border-[#2563EB] pl-3.5 dark:border-[#60A5FA]">
                        <span className="font-mono text-xs font-bold text-[#2563EB] dark:text-[#60A5FA]">
                            03 Planning
                        </span>
                        <p className="mt-0.5 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399]">
                            Kita rancang isi halaman, struktur, dan tampilan sebelum mulai dibangun.
                        </p>
                    </div>
                    <div className="border-l-2 border-[#2563EB] pl-3.5 dark:border-[#60A5FA]">
                        <span className="font-mono text-xs font-bold text-[#2563EB] dark:text-[#60A5FA]">
                            04 Pembuatan
                        </span>
                        <p className="mt-0.5 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399]">
                            Website dibangun sesuai kesepakatan. Progres dikabari lewat WhatsApp, dan revisi sudah termasuk.
                        </p>
                    </div>
                    <div className="border-l-2 border-[#2563EB] pl-3.5 dark:border-[#60A5FA]">
                        <span className="font-mono text-xs font-bold text-[#2563EB] dark:text-[#60A5FA]">
                            05 Serah terima
                        </span>
                        <p className="mt-0.5 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399]">
                            Pengujian akhir, domain disambungkan, lalu kamu menerima akses dan panduan singkat.
                        </p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        q: 'Apa saja yang perlu saya siapkan sebelum pembuatan website dimulai?',
        a: 'Cukup siapkan cerita singkat profil usaha, daftar layanan atau produk, dan kontak yang ingin ditampilkan. Jika materi belum tersusun rapi, saya akan membantu merapikan struktur tulisan dan alur informasinya saat diskusi awal.',
    },
    {
        q: 'Apakah saya harus sudah membeli domain dan hosting sendiri?',
        a: 'Tidak perlu repot. Seluruh paket layanan sudah termasuk nama domain resmi dan ruang hosting siap pakai untuk tahun pertama. Anda cukup menyiapkan materi atau cerita usaha.',
    },
    {
        q: 'Berapa lama proses pengerjaan website sampai siap digunakan?',
        a: 'Untuk website profil usaha satu halaman umumnya memakan waktu sekitar 1 sampai 2 minggu setelah materi disepakati. Jika ada kebutuhan fitur khusus atau alur tertentu, estimasi waktu pasti akan kita sepakati bersama sebelum pengerjaan dimulai.',
    },
    {
        q: 'Bagaimana jika di kemudian hari ada informasi atau menu yang perlu diperbarui?',
        a: 'Setiap serah terima proyek dilengkapi panduan dasar pengelolaan. Untuk pembaruan berkala atau penambahan fitur di kemudian hari, Anda dapat menghubungi saya kembali untuk penyesuaian ruang lingkup pengerjaan.',
    },
    {
        q: 'Apakah tampilan website dipastikan rapi saat dibuka pelanggan lewat HP?',
        a: 'Ya. Sebagian besar pengunjung membuka website dari ponsel, sehingga setiap halaman diuji langsung pada berbagai ukuran layar agar teks mudah dibaca, tombol nyaman ditekan, dan waktu muat tetap ringan.',
    },
];
