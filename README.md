# Portfolio Website: Maria Esfera Dyah Untari, S.Tr.I.Kom.
### Ultra-Premium & Cinematic Fullstack Portfolio (React + Node.js + Three.js 3D Motion)

Portfolio resmi bertema sinematik kelas atas (*ultra-premium auteur style*) untuk **Maria Esfera Dyah Untari** — Video Editor, Videografer, Produser, dan Visual Storyteller lulusan **Sekolah Tinggi Multi Media (STMM) "MMTC" Yogyakarta**.

---

## 🌟 Fitur Utama Website

1. **3D Motion Interaktif (Three.js & React Three Fiber)**:
   - Model 3D *Anamorphic Cinema Lens Rig* dan partikel debu sinematik (*cinematic bokeh dust*) di Hero Section yang bergerak secara halus mengikuti kursor mouse / sentuhan.
2. **Koleksi Lengkap Prestasi & Lomba Terverifikasi**:
   - 🏆 **Juara 1 (1st Place)** – Lomba Videografis Nasional Kementan RI x Warta Ekonomi 2020 (Kategori Umum Nasional).
   - 🏆 **Juara 3 (3rd Place)** – Frans Seda Award 2020 (Lomba Video Profil: "Tokoh Muda Indonesia").
   - 🌟 **Top 5 Best Entries** – Frans Seda Award 2020 (Lomba Swafoto bersama Tokoh Inspiratif).
   - 🎓 **Publikasi Karya Ilmiah** – Jurnal Ilmiah Multimedia & Komunikasi STMM MMTC Yogyakarta 2021 (*Dokumenter TV Buku Harian*).
   - Dilengkapi efek selebrasi partikel emas (*canvas-confetti*) interaktif dan modal verifikasi dewan juri.
3. **Interactive Color Grading Suite (S-Log3 to Rec.709 35mm LUT Slider)**:
   - Slider perbandingan interaktif untuk memperlihatkan keahlian colorist: Rekaman mentah (*Flat S-Log3*) vs Hasil Akhir (*Cinematic 35mm Film Grade*).
4. **Director's Monitor Showreel Player**:
   - Pemutar showreel berbingkai monitor kamera sinema lengkap dengan crosshair framing, timecode clock, aspect ratio switcher (16:9, 2.39:1 CinemaScope, 9:16 Social Reel), dan speed rate toggle.
5. **Katalog Proyek Terkurasi (Filterable Works)**:
   - Filter kategori: Dokumenter, Program Televisi Magazine Show (*TrendSpot*), Videografis Kampanye, dan Brand Commercial.
6. **Formulir Booking & Integrasi WhatsApp Otomatis**:
   - Terhubung langsung ke backend Node.js (`/api/inquiry`) dan secara otomatis menyusun tautan pesan WhatsApp dengan format brief rapi.
7. **Desain Sinematik Ultra-Premium**:
   - Palet warna Obsidian Dark, Emas Amber, Cyan Anamorphic, live timecode ticker (`00:01:24:18`), dan efek suara mekanis kamera opsional.

---

## 🚀 Panduan Menjalankan Aplikasi

Pastikan **Node.js** (v18+) telah terpasang.

### 1. Menjalankan Backend (Node.js / Express)
```bash
cd server
npm install
npm run dev
```
*Backend API akan berjalan di:* `http://localhost:5000`

### 2. Menjalankan Frontend (React + Vite)
```bash
cd client
npm install
npm run dev
```
*Frontend akan terbuka di:* `http://localhost:5173`

---

## 📁 Struktur Direktori
```text
portfolio-pela/
├── server/
│   ├── index.js                  # Express API Server (Inquiries, Projects, Awards)
│   ├── data/
│   │   └── portfolioData.js      # Data terpusat rekam jejak, lomba, & proyek
│   └── package.json
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Glassmorphism header + live timecode REC
│   │   │   ├── Hero3D.jsx        # Three.js 3D Cinema Optics & Particles
│   │   │   ├── ShowreelModal.jsx # Director's Monitor Video Player
│   │   │   ├── AwardsSection.jsx # Showcase Juara 1 Kementan & Frans Seda 2020
│   │   │   ├── ProjectsGallery.jsx # Galeri proyek & case study drawer
│   │   │   ├── ColorGradingSlider.jsx # Slider interaktif Before/After S-Log3
│   │   │   ├── DirectorPhilosophy.jsx # 4 Pilar filosofi ritme visual
│   │   │   ├── GearAndSkills.jsx # DaVinci, Premiere, FX3/FX6 rigs
│   │   │   ├── AboutSection.jsx  # Biodata Maria Esfera & STMM MMTC
│   │   │   ├── ContactSection.jsx# Booking form + direct WhatsApp
│   │   │   └── Footer.jsx        # Film credits aesthetic
│   │   ├── data/
│   │   │   └── portfolioData.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
└── README.md
```

