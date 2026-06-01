"use client";

import Image from "next/image";
import logoImage from "../Logo.png";
import {
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Sun,
  X
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

const whatsappNumber = "6285258355007";

const serviceGroups = [
  {
    id: "pertanahan",
    label: "PERTANAHAN & SERTIFIKAT",
    icon: Landmark,
    services: [
      {
        title: "Balik Nama Sertifikat",
        description:
          "Layanan pengurusan balik nama sertifikat tanah atau bangunan setelah proses jual beli, hibah, atau waris. Kami memastikan perubahan nama tercatat secara resmi agar hak kepemilikan klien sah dan terlindungi.",
        benefits: [
          "Memastikan kepemilikan terdaftar secara sah",
          "Mengurangi risiko sengketa hak atas tanah",
          "Mendukung proses transaksi dan pembiayaan selanjutnya"
        ]
      },
      {
        title: "Peningkatan Hak Sertifikat",
        description:
          "Layanan perubahan status hak sertifikat sesuai kebutuhan pengembangan dan tata ruang. Proses kami mencakup koordinasi dengan instansi pertanahan agar hak baru dapat diterbitkan dengan aman dan sah.",
        benefits: [
          "Memastikan status hak sesuai kebutuhan usaha",
          "Meminimalkan risiko administrasi pertanahan",
          "Mengamankan dasar hukum penggunaan properti"
        ]
      },
      {
        title: "Pemecahan Sertifikat",
        description:
          "Layanan pemecahan sertifikat induk menjadi surat ukur terpisah untuk kepentingan jual beli atau pengelolaan lahan. Kami membantu proses pengukuran dan pengajuan berkas hingga terbit sertifikat baru.",
        benefits: [
          "Membuat kepemilikan lebih jelas per bidang",
          "Mempermudah proses transaksi dan pembiayaan",
          "Memberi struktur aset yang lebih rapi"
        ]
      },
      {
        title: "Penggabungan Sertifikat",
        description:
          "Layanan penggabungan beberapa sertifikat menjadi satu sertifikat induk yang lebih mudah dikelola. Kami mendampingi proses administratif dan teknis agar data sertifikat baru konsisten dan sah.",
        benefits: [
          "Menyederhanakan administrasi dokumen",
          "Mengurangi biaya pengelolaan sertifikat",
          "Memudahkan perencanaan pembangunan dan pengajuan izin"
        ]
      },
      {
        title: "Splitsing Sertifikat",
        description:
          "Layanan pembagian sertifikat induk menjadi beberapa sertifikat baru untuk kebutuhan pengembangan, jual terpisah, atau pengaturan aset. Kami memastikan proses teknis dan perizinan berjalan sesuai aturan.",
        benefits: [
          "Membuka opsi pembagian aset dengan jelas",
          "Mempermudah pengelolaan lahan terpisah",
          "Mengurangi potensi perselisihan internal"
        ]
      },
      {
        title: "Pembetulan Luas Tanah/Bangunan",
        description:
          "Layanan koreksi dokumen sertifikat untuk menyesuaikan data luas tanah atau bangunan sesuai hasil pengukuran terbaru. Kami membantu perbaikan administrasi agar dokumen resmi akurat dan sah.",
        benefits: [
          "Menjaga validitas dokumen pertanahan",
          "Mengurangi potensi masalah hukum di kemudian hari",
          "Mendukung proses jual beli dan perizinan"
        ]
      }
    ]
  },
  {
    id: "pajak",
    label: "PAJAK & PBB",
    icon: FileText,
    services: [
      {
        title: "Pendaftaran PBB",
        description:
          "Layanan pendaftaran Pajak Bumi dan Bangunan bagi pemilik properti baru atau perubahan kepemilikan. Kami membantu memasukkan data objek dan subjek pajak ke sistem pemerintah dengan benar.",
        benefits: [
          "Memenuhi kewajiban perpajakan resmi",
          "Menghindari denda karena pendaftaran terlambat",
          "Menjamin data pajak sesuai kondisi nyata objek"
        ]
      },
      {
        title: "Pemutakhiran PBB",
        description:
          "Layanan pembaruan data PBB saat terjadi perubahan kepemilikan, bangunan, atau luas tanah. Kami memastikan informasi pajak Anda selalu sesuai kondisi terbaru.",
        benefits: [
          "Menjaga keakuratan data pajak",
          "Mencegah tagihan yang tidak sesuai",
          "Mempermudah pengurusan administrasi berikutnya"
        ]
      },
      {
        title: "Mutasi Objek Pajak PBB",
        description:
          "Layanan mutasi objek PBB untuk penyesuaian alamat atau kondisi fisik properti. Kami membantu menjalankan proses mutasi dengan data yang lengkap dan koordinasi instansi pajak.",
        benefits: [
          "Memastikan objek pajak tercatat benar",
          "Meminimalkan selisih tagihan pajak",
          "Menjaga kelangsungan hak pembayaran pajak"
        ]
      },
      {
        title: "Mutasi Subjek Pajak PBB",
        description:
          "Layanan mutasi subjek PBB saat terjadi perubahan nama pemilik atau status badan usaha. Kami mendampingi proses administrasi agar kewajiban pajak berpindah ke nama yang tepat.",
        benefits: [
          "Mengamankan hak pajak atas nama yang benar",
          "Mengurangi risiko administrasi pajak bermasalah",
          "Membantu transisi kepemilikan secara resmi"
        ]
      },
      {
        title: "Pengurangan Tagihan Pajak",
        description:
          "Layanan pendampingan permohonan pengurangan tagihan PBB untuk kondisi yang memenuhi syarat. Kami membantu mengevaluasi data dan menyiapkan dokumen pendukung yang dibutuhkan.",
        benefits: [
          "Potensi pengurangan beban pajak",
          "Meningkatkan efisiensi biaya operasional",
          "Mendukung perencanaan keuangan properti"
        ]
      }
    ]
  },
  {
    id: "perizinan",
    label: "PERIZINAN LINGKUNGAN & BANGUNAN",
    icon: Building2,
    services: [
      {
        title: "SPPL",
        subtitle: "Surat Pernyataan Pengelolaan Lingkungan",
        description:
          "Layanan pengurusan SPPL sebagai dokumen dasar bagi usaha kecil dan menengah yang membutuhkan keringanan lingkungan. Kami membantu menyusun laporan lingkungan yang memenuhi persyaratan instansi terkait.",
        benefits: [
          "Memenuhi kewajiban lingkungan usaha kecil",
          "Memudahkan proses perizinan lanjutan",
          "Mengurangi risiko sanksi administratif"
        ]
      },
      {
        title: "UKL-UPL",
        subtitle: "Upaya Pengelolaan Lingkungan dan Upaya Pemantauan Lingkungan",
        description:
          "Layanan pengurusan UKL-UPL untuk usaha menengah yang butuh dokumen lingkungan formal. Kami memberikan pendampingan mulai dari penyusunan hingga pengajuan ke instansi lingkungan.",
        benefits: [
          "Menjamin pemenuhan standar lingkungan",
          "Mendukung izin usaha dan operasional",
          "Memperkuat reputasi perusahaan ramah lingkungan"
        ]
      },
      {
        title: "PERTEK",
        subtitle: "Persetujuan Teknis",
        description:
          "Layanan pengurusan PERTEK untuk kegiatan yang memerlukan evaluasi teknis dari instansi terkait. Kami membantu menyiapkan dokumen teknis, koordinasi, dan pelacakan proses hingga terbit.",
        benefits: [
          "Memastikan kelayakan teknis kegiatan",
          "Mengurangi hambatan evaluasi instansi",
          "Mendukung kelanjutan proses perizinan"
        ]
      },
      {
        title: "PKKPR",
        subtitle: "Persetujuan Kesesuaian Kegiatan Pemanfaatan Ruang",
        description:
          "Layanan pengurusan PKKPR untuk memastikan rencana pembangunan atau kegiatan usaha sesuai tata ruang. Kami membantu proses administrasi dan koordinasi hingga dokumen terbit resmi.",
        benefits: [
          "Memastikan legalitas lokasi usaha",
          "Menghindari kendala perizinan",
          "Mempermudah proses perizinan lanjutan"
        ]
      },
      {
        title: "Izin Lokasi",
        description:
          "Layanan pengurusan Izin Lokasi untuk proyek properti dan usaha yang memerlukan kepastian lokasi. Kami mendampingi pengajuan izin hingga lokasi diumumkan resmi oleh instansi terkait.",
        benefits: [
          "Memberi kepastian lokasi usaha",
          "Mendukung perencanaan pengembangan lahan",
          "Memperkuat dasar pengurusan izin berikutnya"
        ]
      },
      {
        title: "Site Plan",
        description:
          "Layanan penyiapan dan pengajuan site plan untuk perencanaan bangunan dan tata letak area. Kami membantu menyelaraskan rencana teknis dengan ketentuan tata ruang dan perizinan.",
        benefits: [
          "Membantu visualisasi rencana pembangunan",
          "Mempermudah koordinasi teknis dan lingkungan",
          "Meningkatkan peluang persetujuan izin"
        ]
      },
      {
        title: "PBG",
        subtitle: "Persetujuan Bangunan Gedung",
        description:
          "Layanan pengurusan PBG untuk memastikan bangunan memenuhi persyaratan teknis dan keselamatan. Kami mendampingi seluruh proses verifikasi hingga sertifikat laik fungsi dapat diajukan.",
        benefits: [
          "Menjamin standar bangunan terpenuhi",
          "Mengurangi risiko penolakan perizinan",
          "Mendukung kelayakan operasional gedung"
        ]
      },
      {
        title: "SLF",
        subtitle: "Sertifikat Laik Fungsi",
        description:
          "Layanan pengurusan SLF untuk membuktikan bangunan aman dan layak fungsi. Kami membantu verifikasi dokumen, pengujian teknis, dan koordinasi instansi sampai sertifikat terbit.",
        benefits: [
          "Membuktikan kelayakan fungsi bangunan",
          "Mendukung penggunaan komersial atau operasional",
          "Mengurangi risiko penutupan paksa akibat izin"
        ]
      }
    ]
  },
  {
    id: "legalitas",
    label: "LEGALITAS USAHA & DOKUMEN HUKUM",
    icon: ShieldCheck,
    services: [
      {
        title: "Pendirian PT",
        description:
          "Layanan pendirian Perseroan Terbatas untuk perusahaan yang ingin beroperasi secara resmi. Kami mengurus akta pendirian, pengajuan modifikasi, dan pendaftaran ke instansi terkait hingga PT berdiri secara sah.",
        benefits: [
          "Membentuk badan hukum resmi",
          "Mempermudah akses perbankan dan investasi",
          "Melindungi kepemilikan dan struktur usaha"
        ]
      },
      {
        title: "Pendirian CV",
        description:
          "Layanan pendirian Commanditaire Vennootschap untuk usaha keluarga atau UMKM. Kami membantu penyusunan akta, pengajuan izin, dan pengaturan struktur modal agar CV dapat beroperasi secara sah.",
        benefits: [
          "Memperjelas struktur usaha",
          "Mempermudah pengelolaan modal dan tanggung jawab",
          "Mendukung proses perizinan dan kontrak usaha"
        ]
      },
      {
        title: "NIB",
        subtitle: "Nomor Induk Berusaha",
        description:
          "Layanan pengurusan NIB untuk pemilik usaha yang ingin memulai operasional secara legal. Kami membantu pendaftaran OSS, penentuan klasifikasi usaha, dan pengajuan NIB dengan tepat.",
        benefits: [
          "Memperkuat dasar legal usaha",
          "Memudahkan pengajuan izin usaha lain",
          "Memberi kepercayaan bagi mitra dan investor"
        ]
      },
      {
        title: "Pendaftaran KBLI",
        description:
          "Layanan pendaftaran Klasifikasi Baku Lapangan Usaha Indonesia sebagai landasan usaha Anda. Kami membantu pemilihan kode yang tepat dan dokumentasi agar usaha terdaftar sesuai bidang operasi.",
        benefits: [
          "Menyesuaikan usaha dengan klasifikasi resmi",
          "Mendukung proses perizinan dan pelaporan",
          "Memudahkan akses fasilitas usaha terkait"
        ]
      },
      {
        title: "Izin Usaha",
        description:
          "Layanan pengurusan izin usaha bagi perusahaan dan pelaku UMKM agar operasional dapat berjalan sesuai aturan. Kami mendampingi mulai pengajuan dokumen sampai izin usaha resmi diterbitkan.",
        benefits: [
          "Menjamin kelangsungan operasional usaha",
          "Meningkatkan kredibilitas bisnis",
          "Memudahkan akses kerja sama dan supplier"
        ]
      },
      {
        title: "MOU",
        subtitle: "Memorandum of Understanding",
        description:
          "Layanan penyusunan MOU untuk kesepakatan awal antara pihak usaha atau investor. Kami merancang dokumen yang jelas, ringkas, dan mampu melindungi kepentingan semua pihak.",
        benefits: [
          "Menyepakati kerangka kerja sama secara jelas",
          "Mengurangi risiko miskomunikasi",
          "Membangun pondasi bisnis yang profesional"
        ]
      },
      {
        title: "Perjanjian Kerja Sama",
        description:
          "Layanan penyusunan perjanjian kerja sama untuk usaha, developer, atau investor. Dokumen kami dibuat agar kewajiban, hak, dan jadwal kerja sama terekam dalam kesepakatan resmi.",
        benefits: [
          "Melindungi hak dan kewajiban pihak-pihak terlibat",
          "Mengurangi potensi sengketa bisnis",
          "Menegaskan komitmen kerja sama"
        ]
      },
      {
        title: "Surat Pernyataan",
        description:
          "Layanan pembuatan surat pernyataan untuk kebutuhan internal usaha, administrasi, atau permohonan resmi. Kami memastikan format sesuai standar instansi dan kebutuhan hukum klien.",
        benefits: [
          "Menunjukkan keseriusan administrasi usaha",
          "Memperkuat bukti pernyataan resmi",
          "Mendukung proses perizinan dan audit"
        ]
      },
      {
        title: "Dokumen Legal Perusahaan",
        description:
          "Layanan penyusunan dokumen legal perusahaan, termasuk perjanjian, kontrak, dan dokumen pendukung lain agar usaha dapat berjalan lancar dan aman secara hukum.",
        benefits: [
          "Mengamankan operasi usaha secara hukum",
          "Mendukung transaksi bisnis yang lebih aman",
          "Memperkuat struktur legal perusahaan"
        ]
      }
    ]
  }
];

const steps = [
  "Konsultasi kebutuhan dan jenis proses",
  "Pemeriksaan dokumen awal klien",
  "Pemetaan syarat teknis dan instansi terkait",
  "Pendampingan proses sampai dokumen selesai"
];

const faqs = [
  {
    question: "Apakah harga ditampilkan di website?",
    answer:
      "Tidak. Biaya menyesuaikan jenis proses, kondisi dokumen, lokasi objek, dan kebutuhan pendampingan. Semua estimasi diarahkan melalui WhatsApp."
  },
  {
    question: "Dokumen awal apa yang perlu disiapkan?",
    answer:
      "Untuk perseorangan biasanya KTP, KK, NPWP, dan surat nikah bila relevan. Untuk perusahaan biasanya KTP, KK, NPWP, dan akta pendirian jika sudah ada."
  },
  {
    question: "Apakah hanya melayani Sidoarjo?",
    answer:
      "Area layanan mencakup seluruh Jawa Timur dan dapat membantu kebutuhan di luar Jawa Timur sesuai jenis proses."
  }
];

function buildWhatsAppLink(topic = "Konsultasi legalitas") {
  const message = `Halo Justice Legal Consultant, saya ingin konsultasi terkait ${topic}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [activeGroup, setActiveGroup] = useState(serviceGroups[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const heroMediaRef = useRef<HTMLDivElement | null>(null);
  const countersRef = useRef<HTMLDivElement | null>(null);
  const [countersActive, setCountersActive] = useState(false);

  const activeServices = useMemo(
    () => serviceGroups.find((group) => group.id === activeGroup) ?? serviceGroups[0],
    [activeGroup]
  );

  useEffect(() => {
    function handleScroll() {
      setShowBackToTop(window.scrollY > 520);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // theme persistence
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("jlc-theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.dataset.theme = "dark";
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    window.localStorage.setItem("jlc-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // hero micro-parallax
  useEffect(() => {
    function onScroll() {
      if (!heroMediaRef.current) return;
      const y = window.scrollY;
      heroMediaRef.current.style.transform = `translateY(${Math.min(y * 0.12, 80)}px)`;
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // counters trigger
  useEffect(() => {
    if (!countersRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCountersActive(true);
        });
      },
      { threshold: 0.4 }
    );

    obs.observe(countersRef.current);
    return () => obs.disconnect();
  }, []);

  function handleConsultationSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "Klien");
    const topic = String(form.get("topic") || "konsultasi legalitas");
    const location = String(form.get("location") || "belum diisi");
    const message = String(form.get("message") || "Saya ingin konsultasi lebih lanjut.");
    const text = `Halo Justice Legal Consultant, saya ${name}.%0A%0ATopik: ${topic}%0ALokasi/objek: ${location}%0ACatatan: ${message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Justice Legal Consultant">
          <span className="brand-mark">
            <Image src={logoImage} alt="Justitia Legal Consultant logo" width={42} height={42} />
          </span>
          <span>
            <strong>Justice</strong>
            <small>Legal Consultant</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Navigasi utama">
          <a href="#tentang" onClick={() => setMenuOpen(false)}>
            Tentang Kami
          </a>
          <a href="#mengapa" onClick={() => setMenuOpen(false)}>
            Mengapa
          </a>
          <a href="#layanan" onClick={() => setMenuOpen(false)}>
            Layanan
          </a>
          <a href="#proses" onClick={() => setMenuOpen(false)}>
            Alur
          </a>
          <a href="#testimoni" onClick={() => setMenuOpen(false)}>
            Testimoni
          </a>
          <a href="#kontak" onClick={() => setMenuOpen(false)}>
            Kontak
          </a>
        </nav>

        <div className="header-actions">
          <a className="ghost-link" href="mailto:armada.app4@gmail.com">
            <Mail size={18} />
            Email
          </a>
          <button
            className="ghost-link dark-toggle"
            type="button"
            onClick={() => setDarkMode((value) => !value)}
            aria-label={darkMode ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            {darkMode ? "Light" : "Dark"}
          </button>
          <a className="primary-btn compact" href={buildWhatsAppLink()} target="_blank">
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <button
            className="menu-btn"
            type="button"
            aria-label="Buka menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-media" ref={heroMediaRef}>
          <Image
            src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1800&q=85"
            alt="Meja kerja legal consultant dengan dokumen hukum"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" />
        </div>
        <div className="floating-card floating-card-a">
          <ShieldCheck size={21} />
          <span>Legal check</span>
        </div>
        <div className="floating-card floating-card-b">
          <FileCheck2 size={21} />
          <span>Dokumen siap proses</span>
        </div>
        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={16} />
            Konsultan legalitas dan hukum 10+ tahun
          </div>
          <h1>Justice Legal Consultant</h1>
          <p>
            Pendampingan legalitas properti, PBB, perizinan bangunan, pendirian badan
            usaha, NIB, KBLI, sampai dokumen perjanjian. Melayani Jawa Timur dan luar
            Jawa Timur.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href={buildWhatsAppLink()} target="_blank">
              Konsultasi via WhatsApp
              <ArrowRight size={19} />
            </a>
            <a className="secondary-btn" href="#layanan">
              Lihat layanan
            </a>
          </div>
          <div className="hero-stats" aria-label="Ringkasan JLC">
            <span>
              <strong>10+</strong>
              Tahun pengalaman
            </span>
            <span>
              <strong>Jatim+</strong>
              Area layanan
            </span>
            <span>
              <strong>09:00-18:00</strong>
              Jam operasional
            </span>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Keunggulan layanan">
        {["Properti", "Perizinan", "Badan usaha", "PBB", "Dokumen hukum"].map((item) => (
          <span key={item}>
            <BadgeCheck size={18} />
            {item}
          </span>
        ))}
      </section>

      <section className="section about-section" id="tentang">
        <div>
          <p className="section-kicker">Tentang Kami</p>
          <h2>Justice Legal Consultant hadir sebagai mitra legalitas profesional.</h2>
        </div>
        <p>
          JLC adalah konsultan legal dan perizinan dengan pengalaman lebih dari 10 tahun.
          Kami mendukung pemilik tanah, developer, UMKM, PT/CV, investor, dan pelaku usaha
          yang membutuhkan proses legalitas yang cepat, jelas, dan bebas dari kebingungan birokrasi.
        </p>
      </section>

      <section className="section why-section" id="mengapa">
        <div className="section-heading">
          <p className="section-kicker">Mengapa memilih JLC</p>
          <h2>Kepercayaan dan pengalaman menjadi dasar setiap layanan kami.</h2>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <strong>Praktis dan terstruktur</strong>
            <p>
              Setiap proses legalitas disusun dengan langkah yang jelas, sehingga klien
              tidak lagi menebak-nebak persyaratan dan tahapan pengurusan.
            </p>
          </div>
          <div className="why-card">
            <strong>10+ tahun pengalaman</strong>
            <p>
              JLC telah mendampingi proyek pertanahan, perizinan, dan badan usaha di Jawa Timur
              serta wilayah lain dengan hasil yang dapat diandalkan.
            </p>
          </div>
          <div className="why-card">
            <strong>Legalitas untuk berbagai profil</strong>
            <p>
              Dari pemilik tanah hingga perusahaan besar, layanan kami dirancang untuk kebutuhan
              korporasi dan usaha kecil secara seimbang.
            </p>
          </div>
          <div className="why-card">
            <strong>Fokus pada WhatsApp</strong>
            <p>
              Semua konsultasi dan tindak lanjut diarahkan ke WhatsApp agar komunikasi cepat,
              rapi, dan mudah bagi klien.
            </p>
          </div>
        </div>
      </section>

      <section className="section services-section" id="layanan">
        <div className="section-heading">
          <p className="section-kicker">Layanan Kami</p>
          <h2>Layanan legal dan perizinan yang lengkap untuk berbagai kebutuhan usaha.</h2>
          <p>
            Setiap kategori dirancang untuk membantu pemilik tanah, pengembang, UMKM, investor,
            dan perusahaan dalam mengelola legalitas dengan langkah yang jelas dan profesional.
          </p>
        </div>

        <div className="service-layout">
          <div className="service-tabs" role="tablist" aria-label="Kategori layanan">
            {serviceGroups.map((group) => {
              const Icon = group.icon;
              return (
                <button
                  key={group.id}
                  className={activeGroup === group.id ? "is-active" : ""}
                  type="button"
                  onClick={() => setActiveGroup(group.id)}
                >
                  <Icon size={20} />
                  {group.label}
                </button>
              );
            })}
          </div>

          <div className="service-panel">
            <div className="panel-title">
              <activeServices.icon size={28} />
              <div>
                <p>Kategori layanan</p>
                <h3>{activeServices.label}</h3>
              </div>
            </div>
            <div className="service-grid">
              {activeServices.services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div>
                    <h3>
                      {service.title}
                      {service.subtitle ? <span> ({service.subtitle})</span> : null}
                    </h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-benefits">
                    <strong>Manfaat:</strong>
                    <ul>
                      {service.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <a
                    className="primary-btn compact service-card-cta"
                    href={buildWhatsAppLink(service.title)}
                    target="_blank"
                  >
                    Konsultasi via WhatsApp
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="section counters" ref={countersRef} aria-hidden={!countersActive}>
          <div className="counters-grid">
          <div>
            <strong className="count">{countersActive ? 10 : 0}+</strong>
            <span>Tahun pengalaman</span>
          </div>
          <div>
            <strong className="count">{countersActive ? "Jatim+" : "..."}</strong>
            <span>Area layanan</span>
          </div>
          <div>
            <strong className="count">09:00-18:00</strong>
            <span>Jam operasional</span>
          </div>
        </div>
      </section>

      <section className="visual-band" id="proses">
        <div className="motion-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="visual-copy">
          <p className="section-kicker">Alur Konsultasi</p>
          <h2>Proses yang jelas dari percakapan awal hingga penyelesaian dokumen.</h2>
          <p>
            Kami mendampingi setiap langkah dari konsultasi WhatsApp, pemeriksaan dokumen,
            hingga proses legal dan perizinan selesai. Ini adalah alur yang memberi rasa aman bagi klien.
          </p>
        </div>
        <div className="process-list">
          {steps.map((step, index) => (
            <div className="process-item" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section testimonial-section" id="testimoni">
        <div className="section-heading">
          <p className="section-kicker">Testimoni</p>
          <h2>Pengalaman klien yang terus menjadi bukti layanan kami.</h2>
          <p>
            Testimoni ini menggambarkan bagaimana JLC membantu pemilik tanah, pengusaha, dan perusahaan menyelesaikan legalitas dengan cara yang profesional.
          </p>
        </div>
        <div className="testimonial-grid">
          <article className="testimonial-card">
            <p>
              “JLC membantu mengurus balik nama sertifikat dan perizinan PBG dengan proses yang cepat dan jelas. Semua komunikasi tersusun rapi lewat WhatsApp.”
            </p>
            <strong>– Pemilik tanah, Sidoarjo</strong>
          </article>
          <article className="testimonial-card">
            <p>
              “Pendampingan NIB dan KBLI dari JLC memudahkan kami membuka usaha tanpa harus bingung dengan proses administratif.”
            </p>
            <strong>– Pemilik UMKM, Surabaya</strong>
          </article>
          <article className="testimonial-card">
            <p>
              “JLC memberi arahan perizinan PKKPR dan SLF yang tepat, sehingga proyek kami bisa dilanjutkan tanpa hambatan.”
            </p>
            <strong>– Developer perumahan, Malang</strong>
          </article>
        </div>
      </section>

      <section className="section cta-section" id="cta">
        <div className="cta-panel">
          <p className="section-kicker">Siap konsultasi?</p>
          <h2>Hubungi JLC lewat WhatsApp dan mulai rencana legalitas Anda hari ini.</h2>
          <p>
            Kami siap mendampingi pemilik tanah, developer, UMKM, PT/CV, dan investor untuk memastikan semua dokumen legal berada di tangan yang tepat.
          </p>
          <a className="primary-btn" href={buildWhatsAppLink()} target="_blank">
            Konsultasi via WhatsApp
          </a>
        </div>
      </section>

      <section className="section documents-section" id="dokumen">
        <div className="doc-card">
          <ClipboardCheck size={34} />
          <h2>Dokumen awal perseorangan</h2>
          <p>KTP, KK, NPWP, dan surat nikah bila diperlukan untuk proses terkait.</p>
        </div>
        <div className="doc-card">
          <FileCheck2 size={34} />
          <h2>Dokumen awal perusahaan</h2>
          <p>KTP, KK, NPWP, dan akta pendirian PT/CV bila perusahaan sudah berdiri.</p>
        </div>
        <div className="doc-note">
          <strong>Catatan:</strong> persyaratan final menyesuaikan order proses karena
          setiap layanan memiliki kebutuhan dokumen yang berbeda.
        </div>
      </section>

      <section className="section proof-section">
        <div className="proof-media">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85"
            alt="Dokumen perjanjian dan pena di meja konsultasi"
            fill
            sizes="(max-width: 768px) 100vw, 44vw"
          />
        </div>
        <div className="proof-copy">
          <p className="section-kicker">Portofolio</p>
          <h2>Ruang untuk testimoni dan contoh dokumen yang sudah disamarkan.</h2>
          <p>
            Saat foto sertipikat, kegiatan, atau contoh dokumen sudah siap, area ini bisa
            diisi tanpa membuka alamat, nama, nomor dokumen, atau data penting klien.
          </p>
          <div className="redaction-preview" aria-label="Preview dokumen disamarkan">
            <span />
            <span />
            <span />
            <small>Data sensitif disamarkan</small>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="kontak">
        <div className="contact-copy">
          <p className="section-kicker">Konsultasi</p>
          <h2>Ceritakan kebutuhan legalitas Anda.</h2>
          <p>
            Isi ringkas kebutuhan Anda. Tombol kirim akan membuka WhatsApp dengan format
            pesan yang sudah rapi.
          </p>
          <div className="contact-list">
            <a href="tel:+6285258355007">
              <Phone size={18} />
              0852-5835-5007
            </a>
            <a href="mailto:armada.app4@gmail.com">
              <Mail size={18} />
              armada.app4@gmail.com
            </a>
            <span>
              <MapPin size={18} />
              Griyo Wage Asri II, Sidoarjo
            </span>
          </div>
        </div>

        <form className="consultation-form" onSubmit={handleConsultationSubmit}>
          <label>
            Nama
            <input name="name" placeholder="Nama Anda" required />
          </label>
          <label>
            Kebutuhan
            <select name="topic" defaultValue="Balik Nama Sertifikat">
              {serviceGroups.flatMap((group) =>
                group.services.map((service) => (
                  <option value={service.title} key={`${group.id}-${service.title}`}>
                    {service.title}
                  </option>
                ))
              )}
            </select>
          </label>
          <label>
            Lokasi/objek
            <input name="location" placeholder="Contoh: Sidoarjo, tanah, ruko, PT" />
          </label>
          <label>
            Catatan
            <textarea
              name="message"
              placeholder="Tulis kondisi singkat, dokumen yang sudah ada, atau kendala."
              rows={4}
            />
          </label>
          <button className="primary-btn form-btn" type="submit">
            Kirim ke WhatsApp
            <MessageCircle size={19} />
          </button>
        </form>
      </section>

      <section className="section faq-section">
        <div className="section-heading compact-heading">
          <p className="section-kicker">FAQ</p>
          <h2>Pertanyaan umum sebelum konsultasi.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={faq.question}>
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                {faq.question}
                <ChevronDown className={openFaq === index ? "rotate" : ""} size={20} />
              </button>
              {openFaq === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Justice Legal Consultant</strong>
          <p>Konsultan legalitas dan hukum untuk properti, usaha, dan dokumen hukum.</p>
        </div>
        <a className="primary-btn compact" href={buildWhatsAppLink()} target="_blank">
          <MessageCircle size={18} />
          Hubungi JLC
        </a>
      </footer>
      <button
        className={showBackToTop ? "back-to-top is-visible" : "back-to-top"}
        type="button"
        aria-label="Kembali ke atas"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={22} />
      </button>
    </main>
  );
}
