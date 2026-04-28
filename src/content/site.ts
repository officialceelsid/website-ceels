export const mainNavigation = [
  { href: "/services", label: "Layanan" },
  { href: "/works", label: "Karya" },
  { href: "/#about", label: "Tentang" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Kontak" },
] as const;

export const servicesPage = {
  intro: {
    eyebrow: "Layanan",
    title: "Layanan digital yang disusun dengan tenang, modular, dan relevan untuk brand yang ingin tampil lebih jelas.",
    description:
      "Setiap layanan kami dirancang untuk membantu bisnis menyusun kehadiran digital yang lebih rapi, lebih meyakinkan, dan lebih siap mendukung pertumbuhan jangka panjang.",
    primaryCta: {
      label: "Mulai Diskusi",
      href: "/#contact",
    },
    secondaryCta: {
      label: "Lihat Karya",
      href: "/works",
    },
    supportingPoints: [
      "Struktur layanan yang mudah dikembangkan",
      "Cocok untuk bisnis jasa, studio, dan konsultan",
      "Siap diperluas menjadi halaman detail di tahap berikutnya",
    ],
  },
  offerings: [
    {
      title: "Desain Website Brand",
      summary:
        "Untuk bisnis yang membutuhkan website utama dengan posisi brand yang lebih jelas, susunan informasi yang lebih kuat, dan tampilan yang terasa lebih matang.",
      deliverables: ["Sitemap dan struktur konten", "Arah UI responsif", "Sistem section yang konsisten"],
      idealFor: "Bisnis jasa, agensi, konsultan, dan studio",
    },
    {
      title: "Desain Landing Page",
      summary:
        "Untuk kampanye, peluncuran, atau validasi penawaran dengan struktur yang lebih fokus pada satu audiens dan satu tujuan konversi.",
      deliverables: ["Layout yang fokus pada penawaran", "Hirarki CTA", "Blok landing page yang mudah digunakan ulang"],
      idealFor: "Kampanye digital, peluncuran produk, validasi penawaran, lead generation",
    },
    {
      title: "Pengembangan Website",
      summary:
        "Untuk tim yang sudah memiliki arah visual dan membutuhkan implementasi frontend yang cepat, rapi, dan nyaman dipelihara untuk jangka panjang.",
      deliverables: ["Build frontend berbasis Astro", "Implementasi yang sadar performa", "Struktur komponen yang dapat digunakan ulang"],
      idealFor: "Tim dengan desain siap implementasi, agensi, dan tim marketing internal",
    },
    {
      title: "Arsitektur Konten",
      summary:
        "Untuk founder atau tim yang membutuhkan bantuan menyusun isi halaman, bukti kepercayaan, pesan utama, dan alur baca yang lebih terarah.",
      deliverables: ["Perencanaan section", "Hirarki halaman", "Struktur copy yang terarah"],
      idealFor: "Proses rebrand, refresh website, dan marketing site yang belum jelas arahnya",
    },
  ],
  approach: {
    title: "Seperti Apa Proses Kerja Bersama Kami",
    description:
      "Kami tidak hanya menawarkan output, tetapi juga cara kerja yang membuat proses terasa lebih jelas, terbuka, dan nyaman dijalankan bersama.",
    items: [
      {
        title: "Strategi Sebelum Visual",
        text: "Kami mulai dari pemahaman terhadap audiens, penawaran, dan tujuan halaman sebelum masuk ke penyempurnaan tampilan.",
      },
      {
        title: "Output yang Jelas",
        text: "Setiap tahap dirancang dengan hasil yang mudah dipahami agar proses terasa terukur dan transparan bagi semua pihak.",
      },
      {
        title: "Siap untuk Pengembangan",
        text: "Struktur akhir disusun agar lebih mudah diperluas ke halaman baru, kampanye berikutnya, atau penambahan bukti kerja di kemudian hari.",
      },
    ],
  },
} as const;

export const worksPage = {
  intro: {
    eyebrow: "Karya",
    title: "Pilihan karya dan arah eksplorasi digital yang menunjukkan bagaimana sebuah brand bisa tampil lebih terstruktur.",
    description:
      "Halaman ini merangkum jenis pekerjaan yang kami kerjakan: memperjelas pesan, merapikan struktur, dan menghadirkan ruang digital yang terasa lebih selaras dengan kualitas bisnis di baliknya.",
    primaryCta: {
      label: "Diskusikan Proyek Anda",
      href: "/#contact",
    },
    secondaryCta: {
      label: "Lihat Layanan",
      href: "/services",
    },
    supportingPoints: [
      "Kurasi karya dengan susunan yang lebih editorial",
      "Ringkasan studi kasus yang mudah dipahami",
      "Menonjolkan proses, arah, dan hasil secara lebih rapi",
    ],
  },
  archive: {
    title: "Arsip Proyek",
    description:
      "Setiap proyek di bawah ini memperlihatkan fokus yang berbeda, tetapi berangkat dari kebutuhan yang sama: membuat brand lebih mudah dipahami dan lebih percaya diri di ruang digital.",
    items: [
      {
        name: "Website Profil Bisnis Jasa",
        category: "Website Brand",
        summary:
          "Penyusunan website untuk bisnis jasa yang membutuhkan kesan pertama lebih kredibel, struktur konten yang lebih bersih, dan alur konsultasi yang lebih tegas.",
        outcome: "Hasil: pesan lebih jelas, otoritas brand lebih terasa, dan jalur CTA lebih langsung.",
        tags: ["Positioning", "Desain Website", "Frontend"],
      },
      {
        name: "Landing Page Kampanye Produk",
        category: "Landing Page",
        summary:
          "Landing page fokus untuk peluncuran produk digital, dirancang agar nilai produk lebih cepat dipahami sejak layar pertama hingga CTA utama.",
        outcome: "Hasil: hirarki pesan lebih kuat dan proses pengambilan keputusan terasa lebih ringan.",
        tags: ["Peluncuran", "UX Writing", "Konversi"],
      },
      {
        name: "Refresh Website Studio Kreatif",
        category: "Refresh Brand",
        summary:
          "Penyegaran visual yang lebih tenang untuk bisnis kreatif yang membutuhkan tone lebih matang, framing layanan yang lebih jelas, dan konsistensi visual antarhalaman.",
        outcome: "Hasil: persepsi brand terasa lebih premium dan narasi bisnis lebih rapi.",
        tags: ["Rebrand", "Sistem UI", "Struktur Konten"],
      },
    ],
  },
} as const;
