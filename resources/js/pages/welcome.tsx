import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const WA_URL =
    'https://wa.me/6281256700457?text=Halo%20Adit,%20saya%20ingin%20berkonsultasi%20mengenai%20pembuatan%20website.';
const IG_URL = 'https://www.instagram.com/adit.code.id/';
const EMAIL_URL = 'mailto:adit.rwet@gmail.com';
const LINKEDIN_URL = 'https://linkedin.com/in/aditya-rahman-680938267';
const GITHUB_URL = 'https://github.com/mathfha';
const SITE_URL = 'https://matfha.my.id';

export default function Welcome() {
    const [isDark, setIsDark] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        const darkPreferred =
            stored === 'dark' ||
            (!stored &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
        setIsDark(darkPreferred);
    }, []);

    const toggleTheme = () => {
        const nextDark = !isDark;
        setIsDark(nextDark);
        if (nextDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [mobileMenuOpen]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
        elements.forEach((el) => {
            const delay = el.getAttribute('data-reveal-delay');
            if (delay) {
                el.style.transitionDelay = `${delay}ms`;
            }
            el.classList.add('reveal-init');
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { href: '#beranda', label: 'Beranda' },
        { href: '#layanan', label: 'Layanan' },
        { href: '#portofolio', label: 'Portofolio' },
        { href: '#tentang', label: 'Tentang' },
        { href: '#ketentuan', label: 'Ketentuan' },
        { href: '#faq', label: 'FAQ' },
        { href: '#kontak', label: 'Kontak' },
    ];

    const faqItems: { q: string; a: React.ReactNode }[] = [
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
            a: 'Tidak perlu repot. Seluruh paket layanan sudah termasuk nama domain resmi (.com, .id, dll) dan ruang hosting siap pakai untuk tahun pertama. Anda cukup menyiapkan materi atau cerita usaha.',
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

    return (
        <div className="min-h-screen bg-[#F8F6F2] text-[#181B1F] selection:bg-[#DBEAFE] selection:text-[#1D4ED8] transition-colors duration-150 dark:bg-[#0F1115] dark:text-[#F5F2EB] dark:selection:bg-[#1E3A8A] dark:selection:text-[#93C5FD]">
            <Head>
                <title>Adit Code | Jasa Pembuatan Website Usaha dan Profesional</title>
                <meta
                    name="description"
                    content="Saya membantu usaha kecil dan profesional membuat website profil, website khusus, dan sistem informasi sederhana."
                />
            </Head>

            {/* Skip to Content for Accessibility */}
            <a
                href="#beranda"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#2563EB] focus:text-white focus:rounded focus:outline-none"
            >
                Langsung ke konten utama
            </a>

            {/* HEADER */}
            <header className="sticky top-0 z-40 w-full border-b border-[#E5E0D6] bg-[#F8F6F2]/95 backdrop-blur-sm dark:border-[#262A32] dark:bg-[#0F1115]/95">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Brand Name & Logo */}
                    <a
                        href="#beranda"
                        aria-label="Adit Code - Beranda"
                        className="group flex items-center gap-2.5 text-base font-semibold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]"
                    >
                        <img
                            src="/images/logo-dark.png"
                            alt="Logo Adit Code"
                            className="h-8 w-auto object-contain dark:hidden"
                        />
                        <img
                            src="/images/logo-light.png"
                            alt="Logo Adit Code"
                            className="hidden h-8 w-auto object-contain dark:block"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav
                        className="hidden md:flex items-center gap-6 text-sm text-[#5C6066] dark:text-[#A8A399]"
                        aria-label="Navigasi Utama"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="transition-colors hover:text-[#181B1F] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 rounded px-1.5 py-1 dark:hover:text-[#F5F2EB] dark:focus:ring-[#60A5FA] dark:focus:ring-offset-[#0F1115]"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Actions: Theme Toggle + WhatsApp CTA + Mobile Menu Button */}
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={
                                isDark
                                    ? 'Beralih ke mode terang'
                                    : 'Beralih ke mode gelap'
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E0D6] bg-white text-[#5C6066] transition-colors hover:bg-[#EFECE5] hover:text-[#181B1F] focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:border-[#262A32] dark:bg-[#171A20] dark:text-[#A8A399] dark:hover:bg-[#20242D] dark:hover:text-[#F5F2EB] dark:focus:ring-[#60A5FA]"
                        >
                            {isDark ? (
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            )}
                        </button>

                        <a
                            href={WA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 dark:bg-[#3B82F6] dark:text-white dark:hover:bg-[#2563EB] dark:focus:ring-[#60A5FA] dark:focus:ring-offset-[#0F1115]"
                        >
                            <span>Diskusikan via WhatsApp</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-expanded={mobileMenuOpen}
                            aria-label="Buka menu navigasi"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E0D6] bg-white text-[#5C6066] md:hidden hover:bg-[#EFECE5] hover:text-[#181B1F] focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:border-[#262A32] dark:bg-[#171A20] dark:text-[#A8A399] dark:hover:bg-[#20242D] dark:hover:text-[#F5F2EB] dark:focus:ring-[#60A5FA]"
                        >
                            {mobileMenuOpen ? (
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Drawer */}
                {mobileMenuOpen && (
                    <div className="border-t border-[#E5E0D6] bg-[#F8F6F2] px-4 py-4 md:hidden dark:border-[#262A32] dark:bg-[#0F1115]">
                        <nav
                            className="flex flex-col gap-3 text-sm text-[#5C6066] dark:text-[#A8A399]"
                            aria-label="Navigasi Mobile"
                        >
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="rounded px-2 py-2 hover:bg-white hover:text-[#181B1F] dark:hover:bg-[#171A20] dark:hover:text-[#F5F2EB]"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href={WA_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] dark:bg-[#3B82F6] dark:text-white dark:hover:bg-[#2563EB]"
                            >
                                Diskusikan via WhatsApp
                            </a>
                        </nav>
                    </div>
                )}
            </header>

            <main>
                {/* 1. BERANDA (Hero Section) */}
                <section
                    id="beranda"
                    data-reveal
                    className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 scroll-mt-16"
                >
                    <div className="max-w-3xl">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-[#181B1F] dark:text-[#F5F2EB] leading-[1.18]">
                            Website yang membantu usaha Anda tampil jelas di internet.
                        </h1>

                        <p className="mt-5 text-base sm:text-lg text-[#5C6066] dark:text-[#A8A399] leading-relaxed max-w-2xl">
                            Saya membantu UMKM dan profesional menyiapkan website sesuai
                            kebutuhan, dari profil usaha hingga fitur khusus. Fokus pada
                            kemudahan akses pengunjung, tampilan rapi di ponsel, dan jalur
                            kontak yang mudah dihubungi.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href={WA_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 dark:bg-[#3B82F6] dark:text-white dark:hover:bg-[#2563EB] dark:focus:ring-[#60A5FA] dark:focus:ring-offset-[#0F1115]"
                            >
                                <span>Diskusikan kebutuhan website</span>
                                <span aria-hidden="true">&rarr;</span>
                            </a>
                            <a
                                href="#layanan"
                                className="inline-flex items-center gap-2 rounded-lg border border-[#D6D0C4] bg-white px-5 py-3 text-sm font-medium text-[#181B1F] transition-colors hover:bg-[#F2EFE8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:border-[#2C313B] dark:bg-[#171A20] dark:text-[#F5F2EB] dark:hover:bg-[#20242D]"
                            >
                                <span>Lihat pilihan layanan</span>
                                <span aria-hidden="true">&darr;</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* 2. LAYANAN (Pilihan Paket & Estimasi Mulai) */}
                <section
                    id="layanan"
                    className="border-t border-[#E5E0D6] py-16 sm:py-24 dark:border-[#262A32] scroll-mt-16"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div data-reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#EFECE5] dark:border-[#1E2229]">
                            <div className="max-w-xl">
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                                    Layanan Kami
                                </h2>
                                <p className="mt-2 text-base sm:text-lg font-medium text-[#2563EB] dark:text-[#60A5FA]">
                                    Pilihan website sesuai kebutuhan usaha
                                </p>
                            </div>
                            <p className="text-sm sm:text-base text-[#5C6066] dark:text-[#A8A399] max-w-md">
                                Struktur penawaran transparan yang dirancang mendorong konversi penjualan, memperjelas ruang lingkup, dan membangun kepercayaan pelanggan.
                            </p>
                        </div>

                        {/* Services Cards (MUI BasicCard Architecture: Card, CardContent, CardActions) */}
                        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                            {/* Card 1: Landing Page */}
                            <div
                                data-reveal
                                data-reveal-delay="0"
                                className="flex flex-col justify-between rounded-xl border border-[#E5E0D6] bg-white shadow-xs transition-all hover:border-[#2563EB]/40 hover:shadow-md dark:border-[#262A32] dark:bg-[#171A20] min-w-[275px]"
                            >
                                <div className="flex flex-1 flex-col p-6 sm:p-7">
                                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                                        Untuk Penjualan &amp; Promosi
                                    </span>
                                    <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                                        Landing Page
                                    </h3>
                                    <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-md bg-[#EFF6FF] px-2.5 py-1 text-xs font-semibold text-[#1D4ED8] dark:bg-[#132038] dark:text-[#93C5FD]">
                                        <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Sudah Termasuk Domain &amp; Hosting</span>
                                    </div>
                                    <p className="mt-3 text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                        Website satu halaman praktis yang dirancang khusus untuk mempromosikan produk atau jasa Anda, agar calon pembeli langsung tertarik dan mudah memesan via WhatsApp.
                                    </p>

                                    {/* Yang Anda Dapatkan */}
                                    <div className="mt-5 border-t border-[#EFECE5] pt-4 dark:border-[#262A32] flex-1">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-[#181B1F] dark:text-[#F5F2EB]">
                                            Yang Anda dapatkan:
                                        </p>
                                        <ul className="mt-3 space-y-2 text-xs text-[#5C6066] dark:text-[#A8A399]">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Sudah termasuk nama domain (.com / .id) dan hosting siap pakai</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Halaman promosi lengkap: foto produk, keunggulan, ulasan pembeli, dan kontak</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Tombol WhatsApp langsung yang otomatis membuka chat dengan nomor Anda</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Tampilan rapi, nyaman dibaca, dan pas dibuka di HP maupun komputer</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Loading cepat dan ringan saat dibuka calon pelanggan tanpa hambatan</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Bantuan penataan kata-kata promosi agar lebih meyakinkan pembeli</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Bagian Bawah Sejajar: Cocok Untuk & Tombol CTA */}
                                <div className="space-y-4 px-6 pb-6 pt-0">
                                    <div className="flex min-h-[64px] items-center rounded-lg bg-[#F8F6F2] p-3 text-xs text-[#5C6066] dark:bg-[#0F1115] dark:text-[#A8A399]">
                                        <p>
                                            <span className="font-semibold text-[#181B1F] dark:text-[#F5F2EB]">
                                                Cocok untuk:
                                            </span>{' '}
                                            Produk baru, jualan online, promosi jasa, dan penawaran khusus.
                                        </p>
                                    </div>
                                    <a
                                        href="https://wa.me/6281256700457?text=Halo%20Adit,%20saya%20tertarik%20tanya%20biaya%20dan%20konsultasi%20paket%20Landing%20Page."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:bg-[#3B82F6] dark:text-white dark:hover:bg-[#2563EB]"
                                    >
                                        <span>Tanya Biaya via WhatsApp</span>
                                        <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>

                            {/* Card 2: Company Profile */}
                            <div
                                data-reveal
                                data-reveal-delay="100"
                                className="flex flex-col justify-between rounded-xl border border-[#2563EB]/40 bg-white shadow-xs transition-all hover:border-[#2563EB] hover:shadow-md dark:border-[#3B82F6]/50 dark:bg-[#171A20] min-w-[275px] relative"
                            >
                                <div className="flex flex-1 flex-col p-6 sm:p-7">
                                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                                        Untuk Bisnis &amp; Organisasi
                                    </span>
                                    <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                                        Company Profile
                                    </h3>
                                    <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-md bg-[#EFF6FF] px-2.5 py-1 text-xs font-semibold text-[#1D4ED8] dark:bg-[#132038] dark:text-[#93C5FD]">
                                        <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Sudah Termasuk Domain &amp; Hosting</span>
                                    </div>
                                    <p className="mt-3 text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                        Website resmi untuk meningkatkan kepercayaan pelanggan, memperkenalkan cerita usaha Anda, menampilkan daftar produk/layanan, dan memudahkan orang menemukan lokasi Anda.
                                    </p>

                                    {/* Yang Anda Dapatkan */}
                                    <div className="mt-5 border-t border-[#EFECE5] pt-4 dark:border-[#262A32] flex-1">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-[#181B1F] dark:text-[#F5F2EB]">
                                            Yang Anda dapatkan:
                                        </p>
                                        <ul className="mt-3 space-y-2 text-xs text-[#5C6066] dark:text-[#A8A399]">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Sudah termasuk nama domain (.com / .id) dan hosting siap pakai</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Halaman profil usaha, cerita perjalanan bisnis, serta visi dan misi</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Daftar katalog produk lengkap atau galeri foto layanan Anda</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Informasi kontak resmi, nomor telepon, dan petunjuk peta Google Maps</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Tampilan elegan dan rapi saat dibuka di layar HP maupun laptop</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Dibantu agar nama usaha Anda mudah dicari di pencarian Google</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Bagian Bawah Sejajar: Cocok Untuk & Tombol CTA */}
                                <div className="space-y-4 px-6 pb-6 pt-0">
                                    <div className="flex min-h-[64px] items-center rounded-lg bg-[#F8F6F2] p-3 text-xs text-[#5C6066] dark:bg-[#0F1115] dark:text-[#A8A399]">
                                        <p>
                                            <span className="font-semibold text-[#181B1F] dark:text-[#F5F2EB]">
                                                Cocok untuk:
                                            </span>{' '}
                                            UMKM, toko, kantor, sekolah, yayasan, dan penyedia jasa.
                                        </p>
                                    </div>
                                    <a
                                        href="https://wa.me/6281256700457?text=Halo%20Adit,%20saya%20tertarik%20tanya%20biaya%20dan%20konsultasi%20paket%20Company%20Profile."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:bg-[#3B82F6] dark:text-white dark:hover:bg-[#2563EB]"
                                    >
                                        <span>Tanya Biaya via WhatsApp</span>
                                        <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>

                            {/* Card 3: Sistem Informasi */}
                            <div
                                data-reveal
                                data-reveal-delay="200"
                                className="flex flex-col justify-between rounded-xl border border-[#E5E0D6] bg-white shadow-xs transition-all hover:border-[#2563EB]/40 hover:shadow-md dark:border-[#262A32] dark:bg-[#171A20] min-w-[275px]"
                            >
                                <div className="flex flex-1 flex-col p-6 sm:p-7">
                                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                                        Solusi Digitalisasi Bisnis
                                    </span>
                                    <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                                        Sistem Informasi
                                    </h3>
                                    <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-md bg-[#EFF6FF] px-2.5 py-1 text-xs font-semibold text-[#1D4ED8] dark:bg-[#132038] dark:text-[#93C5FD]">
                                        <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>Sudah Termasuk Hosting &amp; Server</span>
                                    </div>
                                    <p className="mt-3 text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                        Aplikasi berbasis website untuk memudahkan pengelolaan data usaha sehari-hari secara rapi, cepat, dan otomatis tanpa repot rekap manual di kertas atau Excel terpisah.
                                    </p>

                                    {/* Yang Dapat Dibuat */}
                                    <div className="mt-5 border-t border-[#EFECE5] pt-4 dark:border-[#262A32] flex-1">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-[#181B1F] dark:text-[#F5F2EB]">
                                            Yang dapat dibuat:
                                        </p>
                                        <ul className="mt-3 space-y-2 text-xs text-[#5C6066] dark:text-[#A8A399]">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Sudah termasuk sewa server online yang aman dan cadangan data berkala</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Halaman utama untuk memantau ringkasan penjualan dan stok barang harian</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Pencatatan transaksi belanja, riwayat pesanan, dan daftar pelanggan</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Cetak nota / faktur otomatis dan unduh laporan ke format Excel atau PDF</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Akun login terpisah untuk pemilik dan karyawan sesuai tugas masing-masing</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#2563EB] dark:text-[#60A5FA]">•</span>
                                                <span>Fitur bisa disesuaikan dengan alur kerja dan kebiasaan usaha Anda</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Bagian Bawah Sejajar: Cocok Untuk & Tombol CTA */}
                                <div className="space-y-4 px-6 pb-6 pt-0">
                                    <div className="flex min-h-[64px] items-center rounded-lg bg-[#F8F6F2] p-3 text-xs text-[#5C6066] dark:bg-[#0F1115] dark:text-[#A8A399]">
                                        <p>
                                            <span className="font-semibold text-[#181B1F] dark:text-[#F5F2EB]">
                                                Cocok untuk:
                                            </span>{' '}
                                            Toko, UMKM, instansi, atau bisnis yang butuh pencatatan otomatis.
                                        </p>
                                    </div>
                                    <a
                                        href="https://wa.me/6281256700457?text=Halo%20Adit,%20saya%20tertarik%20tanya%20biaya%20dan%20konsultasi%20pembuatan%20Sistem%20Informasi."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:bg-[#3B82F6] dark:text-white dark:hover:bg-[#2563EB]"
                                    >
                                        <span>Tanya Biaya via WhatsApp</span>
                                        <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. PORTOFOLIO & EKSPLORASI */}
                <section
                    id="portofolio"
                    className="border-t border-[#E5E0D6] py-16 sm:py-24 dark:border-[#262A32] scroll-mt-16"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div data-reveal className="max-w-2xl">
                            <span className="font-mono text-xs font-semibold text-[#2563EB] uppercase dark:text-[#60A5FA]">
                                Portofolio &amp; Eksplorasi
                            </span>
                            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                                Contoh proyek dan rancang bangun
                            </h2>
                            <p className="mt-3 text-sm sm:text-base text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                Gambaran rancangan website nyata untuk memberikan gambaran solusi yang tepat sesuai kebutuhan usaha Anda.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {/* Proyek 1: Trip Green Island */}
                            <div data-reveal data-reveal-delay="0" className="group flex flex-col rounded-xl border border-[#E5E0D6] bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F8F6F2] dark:bg-[#0F1115]">
                                    <img
                                        src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
                                        alt="Trip Green Island"
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                                    <div>
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                                                Website Company Profile
                                            </span>
                                            <span className="inline-flex items-center rounded border border-[#BFDBFE] bg-[#EFF6FF] px-2 py-0.5 text-xs font-medium text-[#1D4ED8] dark:border-[#1D4ED8]/50 dark:bg-[#132038] dark:text-[#93C5FD]">
                                                Dummy
                                            </span>
                                        </div>
                                        <h3 className="mt-3 text-lg sm:text-xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                                            Trip Green Island (Paket Wisata Banyuwangi)
                                        </h3>
                                        <p className="mt-2 text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                            Website profil dan pemesanan paket wisata alam Banyuwangi yang menyajikan pilihan destinasi, rincian fasilitas open trip, galeri foto, dan alur pemesanan langsung via WhatsApp.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Proyek 2: Kopi Seduh Nusantara */}
                            <div data-reveal data-reveal-delay="100" className="group flex flex-col rounded-xl border border-[#E5E0D6] bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F8F6F2] dark:bg-[#0F1115]">
                                    <img
                                        src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
                                        alt="Kopi Seduh Nusantara"
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                                    <div>
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                                                Website Profil &amp; Katalog
                                            </span>
                                            <span className="inline-flex items-center rounded border border-[#BFDBFE] bg-[#EFF6FF] px-2 py-0.5 text-xs font-medium text-[#1D4ED8] dark:border-[#1D4ED8]/50 dark:bg-[#132038] dark:text-[#93C5FD]">
                                                Dummy
                                            </span>
                                        </div>
                                        <h3 className="mt-3 text-lg sm:text-xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                                            Kopi Seduh Nusantara (Profil Usaha Roastery)
                                        </h3>
                                        <p className="mt-2 text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                            Website satu halaman untuk studio sangrai kopi lokal yang menyajikan katalog biji kopi nusantara dengan profil rasa lengkap, lokasi sangrai dan jam operasional, serta alur pemesanan langsung ke nomor pengelola via WhatsApp.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Proyek 3: Klinik Fisioterapi Sehat Mandiri */}
                            <div data-reveal data-reveal-delay="0" className="group flex flex-col rounded-xl border border-[#E5E0D6] bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F8F6F2] dark:bg-[#0F1115]">
                                    <img
                                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                                        alt="Klinik Fisioterapi Sehat Mandiri"
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                                    <div>
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                                                Website Layanan Kesehatan
                                            </span>
                                            <span className="inline-flex items-center rounded border border-[#BFDBFE] bg-[#EFF6FF] px-2 py-0.5 text-xs font-medium text-[#1D4ED8] dark:border-[#1D4ED8]/50 dark:bg-[#132038] dark:text-[#93C5FD]">
                                                Dummy
                                            </span>
                                        </div>
                                        <h3 className="mt-3 text-lg sm:text-xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                                            Klinik Fisioterapi Sehat Mandiri
                                        </h3>
                                        <p className="mt-2 text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                            Website profil informatif untuk penyedia jasa fisioterapi yang menyajikan kompetensi terapis, jenis cedera yang ditangani, jadwal konsultasi mingguan, dan alur reservasi pasien yang nyaman diakses dari ponsel.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Proyek 4: Graha Cipta Studio */}
                            <div data-reveal data-reveal-delay="100" className="group flex flex-col rounded-xl border border-[#E5E0D6] bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F8F6F2] dark:bg-[#0F1115]">
                                    <img
                                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                                        alt="Graha Cipta Studio"
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                                    <div>
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                                                Website Portofolio Bisnis
                                            </span>
                                            <span className="inline-flex items-center rounded border border-[#BFDBFE] bg-[#EFF6FF] px-2 py-0.5 text-xs font-medium text-[#1D4ED8] dark:border-[#1D4ED8]/50 dark:bg-[#132038] dark:text-[#93C5FD]">
                                                Dummy
                                            </span>
                                        </div>
                                        <h3 className="mt-3 text-lg sm:text-xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                                            Graha Cipta Studio (Arsitektur &amp; Renovasi)
                                        </h3>
                                        <p className="mt-2 text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                            Website portofolio untuk studio perencanaan arsitektur dan renovasi rumah yang menyajikan galeri foto proyek terbangun, estimasi alur kerja perancangan, dan tombol diskusi sketsa denah awal via WhatsApp.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. TENTANG (Profil Profesional) */}
                <section
                    id="tentang"
                    data-reveal
                    className="border-t border-[#E5E0D6] py-16 sm:py-24 dark:border-[#262A32] scroll-mt-16"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                                Profil Profesional
                            </h2>
                            <p className="mt-3 text-sm sm:text-base text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                Membantu pemilik usaha, UMKM, dan profesional memiliki website yang rapi, ringan diakses pelanggan, dan aman dari gangguan teknis.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            {/* Profil & Foto Langsung Tempel (Tanpa Card Box) */}
                            <div className="lg:col-span-5 flex flex-col items-center text-center sm:items-start sm:text-left">
                                <div className="w-full max-w-xs sm:max-w-sm">
                                    <img
                                        src="/images/profile-adit.png"
                                        alt="Aditya Rahman - Fullstack Developer at adit.code.id"
                                        className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)]"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="mt-4 w-full">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                        Aditya Rahman
                                    </h3>
                                    <p className="mt-1 text-xs sm:text-sm text-[#2563EB] font-medium dark:text-[#60A5FA]">
                                        Fullstack Developer at adit.code.id
                                    </p>
                                    <div className="mt-2 flex items-center justify-center sm:justify-start gap-1.5 text-xs text-[#5C6066] dark:text-[#A8A399]">
                                        <svg
                                            className="h-4 w-4 shrink-0 text-[#2563EB] dark:text-[#60A5FA]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <span>Kalimantan Selatan (Melayani Klien Seluruh Indonesia)</span>
                                    </div>

                                    {/* Tautan Profil (Icon LinkedIn, GitHub, Website) */}
                                    <div className="mt-4 flex items-center justify-center sm:justify-start gap-2.5">
                                        <a
                                            href={LINKEDIN_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn Aditya Rahman"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E0D6] bg-white text-[#5C6066] transition-all hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:border-[#262A32] dark:bg-[#171A20] dark:text-[#A8A399] dark:hover:border-[#60A5FA] dark:hover:bg-[#132038] dark:hover:text-[#60A5FA]"
                                        >
                                            <svg
                                                className="h-4 w-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a
                                            href={GITHUB_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub Aditya Rahman"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E0D6] bg-white text-[#5C6066] transition-all hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:border-[#262A32] dark:bg-[#171A20] dark:text-[#A8A399] dark:hover:border-[#60A5FA] dark:hover:bg-[#132038] dark:hover:text-[#60A5FA]"
                                        >
                                            <svg
                                                className="h-4 w-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            href={SITE_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Website matfha.my.id"
                                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E0D6] bg-white text-[#5C6066] transition-all hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] dark:border-[#262A32] dark:bg-[#171A20] dark:text-[#A8A399] dark:hover:border-[#60A5FA] dark:hover:bg-[#132038] dark:hover:text-[#60A5FA]"
                                        >
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Cerita Latar Belakang */}
                            <div className="lg:col-span-7 space-y-6">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                        Latar Belakang
                                    </h3>
                                    <div className="mt-4 space-y-3.5 text-sm sm:text-base text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                        <p>
                                            Halo, saya Aditya Rahman. Saya membangun Adit Code untuk membantu pelaku usaha dan profesional memiliki sarana promosi digital yang tertata rapi, nyaman dibuka calon pelanggan, dan mudah dihubungi via WhatsApp.
                                        </p>
                                        <p>
                                            Dengan latar belakang pendidikan Multimedia (SMKN 1 Gambut) serta Sistem Informasi (Politeknik Negeri Banjarmasin), saya memadukan estetika visual yang bersih dengan rancangan website yang terstruktur tanpa kode yang memberatkan perangkat.
                                        </p>
                                        <p>
                                            Pengalaman saya dalam pemeliharaan server dan pengujian keamanan website di PT Inovasi Informatik Sinergi dan Pentester.ID memberi jaminan bahwa setiap website yang saya bangun memiliki perlindungan yang baik, data pelanggan aman, dan sistem cadangan data (backup) siap pakai.
                                        </p>
                                        <p>
                                            Saya percaya kerja sama yang memuaskan diawali dari komunikasi yang santai dan terbuka. Setiap kebutuhan, estimasi waktu, serta biaya dibicarakan tanpa istilah teknis yang membingungkan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. KETENTUAN LAYANAN */}
                <section
                    id="ketentuan"
                    data-reveal
                    className="border-t border-[#E5E0D6] py-16 sm:py-24 dark:border-[#262A32] scroll-mt-16"
                >
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="font-mono text-xs font-semibold text-[#2563EB] uppercase dark:text-[#60A5FA]">
                                Standar Kerja Sama
                            </span>
                            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                                Ketentuan Layanan
                            </h2>
                            <p className="mt-3 text-sm sm:text-base text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                Transparansi batasan ruang lingkup, jadwal, dan tanggung jawab teknis untuk menjaga kepastian hasil kerja serta kenyamanan bersama.
                            </p>
                        </div>

                        {/* Grid 6 Ketentuan Utama */}
                        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-xl border border-[#E5E0D6] bg-white p-6 shadow-xs dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#EFF6FF] text-xs font-bold text-[#2563EB] dark:bg-[#132038] dark:text-[#60A5FA]">
                                        1
                                    </span>
                                    <h3 className="text-base font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                        Revisi Desain
                                    </h3>
                                </div>
                                <p className="mt-3 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                    Termasuk 2 kali revisi desain per proyek pada tahap rancangan dan pembuatan. Penambahan fitur baru di luar ruang lingkup awal akan dibahas terpisah agar timeline proyek tetap terjaga.
                                </p>
                            </div>

                            <div className="rounded-xl border border-[#E5E0D6] bg-white p-6 shadow-xs dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#EFF6FF] text-xs font-bold text-[#2563EB] dark:bg-[#132038] dark:text-[#60A5FA]">
                                        2
                                    </span>
                                    <h3 className="text-base font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                        Domain Resmi
                                    </h3>
                                </div>
                                <p className="mt-3 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                    Sudah termasuk bantuan pendaftaran dan pengaturan nama domain resmi (.com, .id, dll) untuk tahun pertama, langsung disambungkan hingga website aktif dan siap diakses.
                                </p>
                            </div>

                            <div className="rounded-xl border border-[#E5E0D6] bg-white p-6 shadow-xs dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#EFF6FF] text-xs font-bold text-[#2563EB] dark:bg-[#132038] dark:text-[#60A5FA]">
                                        3
                                    </span>
                                    <h3 className="text-base font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                        Hosting &amp; Server
                                    </h3>
                                </div>
                                <p className="mt-3 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                    Sudah termasuk ruang penyimpanan website (hosting) yang cepat, stabil, dan sertifikat keamanan SSL gratis (HTTPS) untuk tahun pertama pengerjaan.
                                </p>
                            </div>

                            <div className="rounded-xl border border-[#E5E0D6] bg-white p-6 shadow-xs dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#EFF6FF] text-xs font-bold text-[#2563EB] dark:bg-[#132038] dark:text-[#60A5FA]">
                                        4
                                    </span>
                                    <h3 className="text-base font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                        Materi &amp; Konten
                                    </h3>
                                </div>
                                <p className="mt-3 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                    Foto, logo, dan rincian informasi dasar disediakan oleh klien. Saya akan membantu merapikan susunan tulisan (copywriting) agar nyaman dibaca dan meyakinkan pelanggan.
                                </p>
                            </div>

                            <div className="rounded-xl border border-[#E5E0D6] bg-white p-6 shadow-xs dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#EFF6FF] text-xs font-bold text-[#2563EB] dark:bg-[#132038] dark:text-[#60A5FA]">
                                        5
                                    </span>
                                    <h3 className="text-base font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                        Garansi Bug 30 Hari
                                    </h3>
                                </div>
                                <p className="mt-3 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                    Setiap website mendapatkan garansi perbaikan kendala teknis (bug) selama 30 hari gratis setelah serah terima proyek. Dukungan pemeliharaan berkala dapat dilanjutkan bila diperlukan.
                                </p>
                            </div>

                            <div className="rounded-xl border border-[#E5E0D6] bg-white p-6 shadow-xs dark:border-[#262A32] dark:bg-[#171A20]">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#EFF6FF] text-xs font-bold text-[#2563EB] dark:bg-[#132038] dark:text-[#60A5FA]">
                                        6
                                    </span>
                                    <h3 className="text-base font-bold text-[#181B1F] dark:text-[#F5F2EB]">
                                        Waktu Pengerjaan
                                    </h3>
                                </div>
                                <p className="mt-3 text-xs sm:text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                    Estimasi pengerjaan: Landing Page 3-5 hari kerja, Company Profile 1-2 minggu, dan Sistem Informasi 2-4 minggu, terhitung sejak materi lengkap diterima.
                                </p>
                            </div>
                        </div>

                        {/* Catatan Khusus Sistem Informasi */}
                        <div className="mt-8 rounded-xl border border-[#2563EB]/30 bg-[#EFF6FF]/60 p-6 dark:border-[#2563EB]/40 dark:bg-[#132038]/50">
                            <h4 className="text-sm font-bold text-[#1D4ED8] dark:text-[#93C5FD] flex items-center gap-2">
                                <svg
                                    className="h-4 w-4 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                Catatan Khusus Pengembangan Sistem Informasi &amp; Web App
                            </h4>
                            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#1E3A8A] dark:text-[#BFDBFE]">
                                <div className="flex items-start gap-2">
                                    <span className="font-bold">•</span>
                                    <span>Penyusunan dokumen ruang lingkup (Scope of Work / SOW) tertulis sebelum pengembangan.</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="font-bold">•</span>
                                    <span>Pembatasan jumlah role pengguna awal yang disepakati bersama.</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="font-bold">•</span>
                                    <span>Penyediaan mekanisme cadangan data (backup database) berkala untuk keamanan operasional.</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="font-bold">•</span>
                                    <span>Serah terima source code penuh beserta dokumentasi alur sistem kepada pemilik usaha.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. FAQ (Tanya Jawab) */}
                <section
                    id="faq"
                    data-reveal
                    className="border-t border-[#E5E0D6] py-16 sm:py-24 dark:border-[#262A32] scroll-mt-16"
                >
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <span className="font-mono text-xs font-semibold text-[#2563EB] uppercase dark:text-[#60A5FA]">
                                Tanya Jawab
                            </span>
                            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#181B1F] dark:text-[#F5F2EB]">
                                Pertanyaan seputar layanan website
                            </h2>
                            <p className="mt-3 text-sm sm:text-base text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                Jawaban praktis untuk hal-hal yang sering ditanyakan sebelum memulai
                                pembuatan website.
                            </p>
                        </div>

                        <div className="mt-10 divide-y divide-[#E5E0D6] border-y border-[#E5E0D6] dark:divide-[#262A32] dark:border-[#262A32]">
                            {faqItems.map((item, idx) => (
                                <details
                                    key={idx}
                                    className="group py-5 transition-colors focus-within:outline-none"
                                >
                                    <summary className="flex cursor-pointer items-center justify-between text-left text-base font-semibold text-[#181B1F] transition-colors hover:text-[#2563EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded dark:text-[#F5F2EB] dark:hover:text-[#60A5FA] dark:focus-visible:ring-[#60A5FA]">
                                        <span className="pr-4">{item.q}</span>
                                        <span className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-[#D6D0C4] text-xs text-[#5C6066] transition-transform group-open:rotate-180 dark:border-[#2C313B] dark:text-[#A8A399]">
                                            <svg
                                                className="h-3.5 w-3.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="mt-3 pr-8 text-sm text-[#5C6066] dark:text-[#A8A399] leading-relaxed">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* FLOATING WHATSAPP CTA */}
            <aside
                aria-label="Kontak Cepat"
                className="fixed bottom-5 right-5 z-30"
            >
                <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Hubungi Adit lewat WhatsApp"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 dark:bg-[#3B82F6] dark:hover:bg-[#2563EB] dark:focus:ring-[#60A5FA] dark:focus:ring-offset-[#0F1115]"
                >
                    <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.181-.077.355.101.174.45 1.743 1.968 2.091.196.045.352.033.483-.029.13-.062.584-.68.742-.912.159-.232.318-.193.534-.113.217.08 1.378.65 1.616.769.238.119.398.177.456.277.058.1.058.579-.086.984z" />
                    </svg>
                </a>
            </aside>

            {/* FOOTER & KONTAK (Unified centered layout with circular icon buttons) */}
            <footer
                id="kontak"
                className="border-t border-[#262A32] bg-[#0F1115] pt-16 pb-12 text-center text-[#A8A399] scroll-mt-16"
            >
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    {/* Contact invitation headline */}
                    <div data-reveal className="mb-8 max-w-lg">
                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F2EB]">
                            Punya rencana membuat atau memperbaiki website?
                        </h2>
                        <p className="mt-2 text-sm text-[#A8A399] leading-relaxed">
                            Ceritakan kebutuhan Anda, lalu kita bahas ruang lingkupnya bersama.
                        </p>
                    </div>

                    {/* Circular Action Icons (WhatsApp, Instagram, Email) with Official Brand Colors */}
                    <div data-reveal data-reveal-delay="100" className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href={WA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Hubungi via WhatsApp (+62 812-5670-0457)"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-all hover:scale-110 hover:bg-[#20BA5A] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0F1115]"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25.7-1.44 1.34-2.02 1.43-.52.08-1.19.11-3.41-.8-2.22-.92-3.66-3.17-3.77-3.32-.11-.15-.9-1.2-.9-2.29s.57-1.63.78-1.85c.2-.23.44-.28.59-.28.15 0 .3 0 .43.01.14.01.32-.05.5.38.19.45.65 1.58.71 1.7.06.11.1.25.02.4-.08.15-.12.24-.23.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.24 1.55.86.76 1.58 1 1.8 1.11.23.11.36.09.49-.06.13-.15.56-.65.71-.88.15-.22.3-.19.51-.11.21.08 1.33.63 1.56.74.23.11.38.17.44.27.06.1.06.58-.19 1.28z" />
                            </svg>
                        </a>

                        <a
                            href={IG_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram @adit.code.id"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-md transition-all hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#DD2A7B] focus:ring-offset-2 focus:ring-offset-[#0F1115]"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                        <a
                            href={EMAIL_URL}
                            aria-label="Kirim Email ke adit.rwet@gmail.com"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EA4335] text-white shadow-md transition-all hover:scale-110 hover:bg-[#D93025] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#EA4335] focus:ring-offset-2 focus:ring-offset-[#0F1115]"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Centered Navigation Links with middle dot separators */}
                    <nav
                        className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#A8A399]"
                        aria-label="Navigasi Footer"
                    >
                        {navItems.map((item, idx) => (
                            <span key={item.href} className="inline-flex items-center gap-4">
                                <a
                                    href={item.href}
                                    className="transition-colors hover:text-[#F5F2EB]"
                                >
                                    {item.label}
                                </a>
                                {idx < navItems.length - 1 && (
                                    <span className="text-[#3E4552]" aria-hidden="true">
                                        &middot;
                                    </span>
                                )}
                            </span>
                        ))}
                    </nav>

                    {/* Secondary Information & Back to Top */}
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 text-xs text-[#5C6066]">
                        <span>kontak@adit.code.id</span>
                        <span aria-hidden="true">&middot;</span>
                        <span>Indonesia (WIB)</span>
                        <span aria-hidden="true">&middot;</span>
                        <a
                            href="#beranda"
                            className="transition-colors hover:text-[#A8A399]"
                        >
                            Kembali ke atas &uarr;
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="mt-6 text-xs text-[#5C6066]">
                        &copy; 2026 Adit Code. Hak cipta dilindungi.
                    </div>
                </div>
            </footer>
        </div>
    );
}
