# Adit Code

Website Adit Code memakai Laravel, Inertia.js, React, TypeScript, dan Tailwind CSS dari Laravel React Starter Kit. Aplikasi menggunakan SQLite untuk pengembangan lokal dan belum menambahkan autentikasi.

## Persyaratan

- PHP sesuai kebutuhan versi Laravel di `composer.json`
- Composer
- Node.js dan npm

## Menjalankan secara lokal

Dependency dan file lingkungan sudah disiapkan pada workspace ini. Jalankan:

```sh
composer run dev
```

Server Laravel tersedia di `http://localhost:8000`. Perintah dev juga menjalankan Vite untuk frontend.

Untuk menyiapkan workspace baru dari hasil clone:

```sh
composer run setup
```

## Pemeriksaan

```sh
php artisan test
npm run build
npm run types:check
```

Untuk production dengan Inertia SSR, jalankan server SSR bersama server Laravel:

```sh
php artisan inertia:start-ssr
```

## Catatan

- Route awal `/` masih menampilkan halaman bawaan React Starter Kit. Konten landing page Adit Code belum diimplementasikan.
- Gunakan `docs/content.md` sebagai sumber copy dan `docs/design.md` sebagai arah visual.
- Pilih hosting yang mendukung aplikasi Laravel/PHP sebelum deploy. Cloudflare Pages saja tidak menjalankan aplikasi PHP.
- Isi `SITE_URL` dan `UMAMI_WEBSITE_ID` sebelum rilis. Biarkan `SEO_INDEXABLE=false` sampai konten final dan domain produksi siap.
- Jangan commit `.env` atau rahasia. Gunakan `.env.example` sebagai template konfigurasi.
