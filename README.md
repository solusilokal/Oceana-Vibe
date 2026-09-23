# Oceana Vibe - Destinasi Ekowisata Pantai Tropis

Website landing page interaktif & mobile-first untuk **Oceana Vibe** (Surga Tersembunyi di Pesisir Tropis). Dilengkapi dengan hero banner memukau, profil ecotourism & jejak sejarah, katalog & paket wisata (Beach Pass, Relax & Chill, Ocean Explorer, Sunset BBQ Camp), panduan lokasi dan jarak tempuh, FAQ akordeon interaktif, ulasan testimoni pengunjung, formulir reservasi tiket langsung ke WhatsApp Admin, serta fitur share modal sosial media.

🌐 **Live Demo Website:** [https://solusilokal.github.io/Oceana-Vibe/](https://solusilokal.github.io/Oceana-Vibe/)  
📦 **GitHub Repository:** [https://github.com/solusilokal/Oceana-Vibe](https://github.com/solusilokal/Oceana-Vibe)  

---

## 🚀 Cara Menjalankan & Preview

Terdapat **2 cara praktis** untuk melihat preview website ini:

### 1. Buka Langsung Tanpa Terminal (Paling Cepat & Praktis)
- Buka folder `wisata pantai` di File Explorer Windows.
- Cukup **klik dua kali (double-click)** pada file `standalone.html` (atau klik ganda `preview.bat` lalu tekan Enter).
- Website akan langsung terbuka di browser (Chrome / Edge / Firefox) lengkap dengan styling Tailwind CSS, ikon Lucide, gambar, dan seluruh interaktivitasnya tanpa memerlukan web server.

---

### 2. Menggunakan Vite Dev Server (Hot Reload)
- **Cara A:** Klik dua kali file **`preview.bat`** lalu ketik `2` dan tekan Enter.
- **Cara B:** Buka terminal / command prompt di folder ini dan jalankan:
  ```bash
  npm run dev
  ```
- Buka peramban di [http://localhost:3000](http://localhost:3000).

---

## 📁 Struktur File Proyek

```
wisata pantai/
├── public/
│   ├── logo-oceana-vibe.png                         # Logo profil resmi Oceana Vibe
│   ├── hero-beach-sunset.jpg                        # Foto banner sunset pantai
│   ├── galeri-beach-pass.webp                       # Foto pasir putih & air laut kristal
│   ├── galeri-relax-chill.webp                      # Foto gazebo, kursi jemur & kelapa muda
│   ├── galeri-ocean-explorer.webp                   # Foto snorkeling terumbu karang & penyu
│   └── galeri-sunset-camp.webp                      # Foto tenda camping, api unggun & seafood BBQ
├── src/
│   ├── App.jsx                                      # Komponen utama React Oceana Vibe
│   ├── index.css                                    # Konfigurasi Tailwind & Google Fonts Outfit
│   └── main.jsx                                     # Entry point aplikasi React 18
├── dist/                                            # Hasil kompilasi produksi Vite
├── standalone.html                                  # File mandiri lengkap (bisa dibuka langsung tanpa server)
├── preview.bat                                      # Script launcher 1-klik untuk Windows
├── index.html                                       # File HTML utama untuk Vite dev & build
├── build_standalone.cjs                             # Skrip bundler esbuild untuk standalone.html
├── package.json                                     # Konfigurasi dependensi npm & skrip
├── vite.config.js                                   # Konfigurasi Vite server & build
├── tailwind.config.js                               # Konfigurasi Tailwind CSS (Font Outfit)
├── postcss.config.js                                # Konfigurasi PostCSS
├── logo-oceana-vibe.png                             # Asset logo profil
├── hero-beach-sunset.jpg                            # Asset foto hero sunset
├── galeri-*.webp                                    # 4 Foto fasilitas & aktivitas pantai
└── oceana_vibe_beach_tour.tsx                      # Source code komponen asli
```

---

## ✨ Fitur-Fitur Utama

- **Hero Visual & Identitas Oceana Vibe**: Desain bernuansa sunset tropis (`#1e1b4b`, `#ea580c`, `#fb923c`, `#fde047`) dengan foto hero resolusi tinggi dan logo resmi.
- **Tentang Kami & Jejak Sejarah**: Cerita dedikasi ekowisata pantai berkelanjutan sejak 2015.
- **Katalog & Harga Paket (Foto Interaktif)**:
  - *Beach Pass (Reguler)*: Rp 50.000 / pax (Pasir putih & air laut jernih)
  - *Relax & Chill*: Rp 150.000 / pax (Gazebo privat, sunbed & kelapa muda)
  - *Ocean Explorer*: Rp 350.000 / pax (Snorkeling terumbu karang & penyu laut)
  - *Sunset BBQ Camp*: Rp 500.000 / pax (Camping pantai sunset, api unggun & BBQ)
  - Setiap foto paket dapat diklik untuk melihat dalam tampilan penuh (Lightbox).
- **Informasi Lokasi & Google Maps**: Akses jalan beraspal, waktu tempuh 45 menit dari pusat kota, serta navigasi cepat ke Google Maps.
- **FAQ Interaktif**: Pertanyaan seputar jam operasional, aturan makanan, keamanan lifeguard untuk anak-anak, dan rental snorkeling.
- **Formulir Pemesanan WhatsApp Otomatis**: Integrasi langsung ke WhatsApp Admin (`+6289529605601`) dengan data nama, tanggal kunjungan, pilihan paket, jumlah pax, dan catatan khusus.
- **Share Modal**: Fitur salin tautan, bagikan ke WhatsApp, X (Twitter), dan Facebook.
- **Sticky CTA Button**: Tombol melayang pemesanan tiket yang muncul secara halus saat pengguna menggulir ke bawah.
