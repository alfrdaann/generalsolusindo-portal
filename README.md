# GeneralSolusindo — Portal Internal Karyawan

Portal internal perusahaan GeneralSolusindo yang menyajikan akses terpusat ke seluruh aplikasi kerja, layanan kepegawaian, dan informasi pendukung operasional harian.

## 🚀 Teknologi yang Digunakan

- **HTML5**: Struktur halaman semantik dan aksesibel (WAI-ARIA).
- **CSS3**: Desain *Corporate Modern Dashboard* dengan CSS Variables, Flexbox, CSS Grid, serta dukungan penuh responsif (Desktop, Tablet, Mobile) dan `prefers-reduced-motion`.
- **Vanilla JavaScript (ES6)**: Logic dinamis sapaan waktu otomatis, tanggal Indonesia, statistik ringkasan, pencarian aplikasi real-time, dan navigasi mobile drawer tanpa dependensi/framework eksternal.

## 📁 Struktur Folder Project

```
generalsolusindo-portal/
├── assets/
│   └── images/
│       ├── hero-gedung-generalsolusindo.jpg
│       ├── logo-generalsolusindo-transparent-v2.png
│       └── logo-generalsolusindo.jpg
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
├── netlify.toml
└── README.md
```

## 💻 Cara Menjalankan Secara Lokal

Karena project ini adalah *static website*, tidak diperlukan proses build atau instalasi package (Node.js/npm).

### Opsi 1: Buka Langsung di Browser
1. Clone atau download repositori project ini.
2. Buka folder `generalsolusindo-portal/`.
3. Klik 2x pada file `index.html` atau buka file tersebut melalui web browser pilihan Anda (Chrome, Edge, Firefox, Safari).

### Opsi 2: Menggunakan Local Development Server
Untuk pengalaman development terbaik (misalnya mendukung live-reload):
- **VS Code**: Gunakan ekstensi *Live Server*, lalu klik `Go Live` pada `index.html`.
- **Node.js (npx)**: Jalankan perintah berikut di dalam direktori project:
  ```bash
  npx serve .
  ```
- **Python**: Jalankan server bawaan Python:
  ```bash
  python -m http.server 8000
  ```
  Lalu buka `http://localhost:8000` di browser.

## 🌐 Cara Deployment ke Hosting Static (Netlify / Vercel / GitHub Pages)

Project ini siap di-deploy secara langsung tanpa proses kompilasi atau instalasi server.

### Opsi A: Deployment ke Netlify (Direkomendasikan)
1. Login ke akun [Netlify](https://www.netlify.com/).
2. Drag & drop seluruh folder `generalsolusindo-portal/` ke area **Sites / Deploy manually** di dashboard Netlify.
3. Netlify secara otomatis mempublikasikan website dan memberikan **URL HTTPS publik** (misal: `https://generalsolusindo-portal.netlify.app`).

### Opsi B: Integration via GitHub / GitLab
1. Push repositori project ke GitHub/GitLab.
2. Hubungkan repositori ke Netlify / Vercel / Cloudflare Pages.
3. Setting deployment:
   - **Build Command**: *(kosongkan / tidak perlu)*
   - **Publish Directory**: `.` (root directory)
4. Klik **Deploy Site**.

---
© 2026 GeneralSolusindo — Portal Internal Karyawan
