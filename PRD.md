# Ceels.id Redesign PRD

## Objective

Refactor desain website `Ceels.id` agar mengikuti referensi visual pada aset `public/hero.webp`, `public/about.png`, `public/services.webp`, `public/project.webp`, `public/testimonials.webp`, `public/faq.webp`, dan `public/footer.webp` secara cukup dekat pada layout, ritme, dan bahasa visual, sambil tetap memakai brand dan konten Ceels.id.

## Core Direction

- Gunakan gaya visual agency/editorial showcase.
- Hindari gaya glassmorphism, wash gradient, dan soft translucent card dari desain lama.
- Gunakan panel besar dengan rounded corner besar sebagai struktur utama halaman.
- Gunakan kontras tinggi: hijau tua, off-white, dan aksen kuning.
- Utamakan tipografi display besar dan whitespace lapang.

## Visual System

### Colors

- Primary dark: deep green
- Surface light: warm off-white
- Page background: soft cool gray
- Accent: vivid yellow
- Text on dark: near-white
- Text on light: deep green

### Typography

- Heading utama: condensed, uppercase, sangat tebal, rapat.
- Heading section: tetap condensed uppercase dengan proporsi lebih kecil dari hero.
- Body: sans modern yang bersih dan mudah dibaca.
- Eyebrow: uppercase kecil, tracking rapat, kadang kuning pada dark panel.

### Shapes

- Panel utama: rounded 36px-44px.
- Card internal: rounded 24px-32px.
- CTA chip / icon box: rounded 12px-18px.
- Outline panel terang: border hijau tebal.

## Layout Principles

- Halaman dibentuk oleh section panel, bukan section datar biasa.
- Tiap section punya identitas blok yang jelas.
- Ritme bergantian antara panel terang dan panel gelap.
- Container lebar, dengan padding horizontal besar pada desktop.
- Mobile harus menyederhanakan layout tanpa kehilangan hierarki visual.

## Section Requirements

### Header

- Bukan navbar sticky tradisional.
- Munculkan lockup brand minimal di atas hero.
- Navigasi utama tampil seperti floating pill navigation di bagian bawah hero panel.
- CTA header besar tidak diperlukan jika sudah ada CTA utama di hero.

### Hero

- Panel terang besar dengan shadow halus.
- Layout dua kolom desktop.
- Kiri: headline utama sangat besar, body singkat, CTA primer kuning.
- Kanan: area showcase visual bertumpuk memakai aset lokal yang tersedia.
- Floating navigation berada di bawah area hero dan menyatu dengan panel.

### About

- Panel gelap dengan dua kolom.
- Kiri: eyebrow kecil, display heading besar, body copy.
- Kanan: satu visual besar rounded.
- Statistik lama boleh disederhanakan agar layout tetap dekat dengan referensi.

### Services

- Panel terang dengan outline hijau tebal.
- Heading besar kiri atas, link section kanan atas.
- Tiga service showcase card besar horizontal.
- Copy dibuat ringkas, fokus pada headline dan deskripsi pendek.

### Portfolio

- Panel gelap dengan featured project di atas.
- Featured layout: visual besar kiri, metadata + title besar kanan.
- Archive list di bawah berupa rows dengan nama project, kategori, dan thumbnail.
- Homepage portfolio harus terasa seperti editorial archive.

### Testimonials

- Panel terang dengan outline hijau tebal.
- Heading center aligned.
- Area bawah dibagi dua: quote utama kiri, visual testimonial kanan.
- Tampilkan indikator slider statis untuk menjaga kemiripan visual referensi.

### FAQ

- Panel gelap.
- Kiri: heading besar stacked.
- Kanan: accordion bars besar dengan plus/minus box di sisi kanan.
- CTA kecil bawah kanan untuk menjelajahi FAQ.

### Closing CTA + Footer

- Panel terang besar dengan headline closing besar di kiri.
- Kanan: visual bertumpuk.
- Informasi kontak, alamat, dan sosial ditempatkan di bawah area utama.
- Footer legal dibuat ringan dan sejajar referensi.

## Content Rules

- Pertahankan brand `Ceels.id`.
- Pertahankan pesan inti konten saat ini.
- Ringkas copy bila terlalu panjang untuk layout baru.
- Gunakan aset lokal di `public/` untuk membentuk showcase visual baru.

## Responsive Rules

- Mobile tidak harus meniru komposisi desktop 1:1.
- Floating nav boleh berubah menjadi stack/wrap.
- Headline display diperkecil tetapi tetap dominan.
- Semua panel harus tetap terasa lapang dan tidak padat.

## Reusable Components To Create Or Refactor

- Global panel classes untuk light/dark sections.
- Display title utility.
- Eyebrow utility.
- Arrow chip utility.
- Floating pill navigation styling.
- Showcase media card styling.
- Archive row styling.

## Acceptance Criteria

- Bahasa visual lama tidak lagi mendominasi halaman.
- Homepage mengikuti referensi dengan cukup dekat secara layout dan visual.
- Hero, about, services, portfolio, testimonials, FAQ, dan closing footer tampil sebagai panel-panel besar.
- Tipografi display besar menjadi identitas utama.
- Accent kuning dipakai terbatas namun konsisten.
- Desain tetap responsif pada mobile dan desktop.
- Build Astro harus berhasil tanpa error.
