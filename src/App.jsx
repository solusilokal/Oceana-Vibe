import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ArrowDown, 
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Navigation,
  Sun,
  Waves,
  Umbrella,
  Anchor,
  HelpCircle,
  ChevronDown,
  Star,
  Quote,
  Map,
  Ticket,
  Camera,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const pageData = {
  name: "Oceana Vibe",
  phone: "6289529605601",
  address: "Kawasan Pesisir Pantai Selatan, Jl. Samudera Biru Km. 8",
  title: "Surga Tersembunyi di Pesisir Tropis",
  heroDescription: "Rasakan deburan ombak, pasir putih yang lembut, dan pesona sunset memukau. Pelarian sempurna dari hiruk-pikuk kota hanya di Oceana Vibe.",
  about: "Oceana Vibe adalah destinasi ekowisata pantai premium yang memadukan kelestarian alam dengan kenyamanan liburan modern. Kami berdedikasi untuk memberikan pengalaman rekreasi pesisir yang tak terlupakan sambil menjaga ekosistem laut tetap lestari.",
  history: "Didirikan pada tahun 2015, area ini awalnya merupakan pesisir tersembunyi yang belum terjamah. Melalui inisiatif komunitas lokal dan pecinta alam, pesisir ini direvitalisasi dan perlahan dikembangkan menjadi kawasan wisata berkelanjutan (sustainable tourism) pada tahun 2018. Kini, Oceana Vibe menjadi salah satu ikon wisata pantai paling diminati tanpa menghilangkan keasrian aslinya.",
  profileImg: "./logo-oceana-vibe.png", 
  heroImg: "./hero-beach-sunset.jpg",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://www.google.com/maps/search/Palangka+Raya", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  locationHighlights: [
    { time: "45 Menit", place: "Dari Pusat Kota" },
    { time: "Akses", place: "Jalan Aspal" },
    { time: "Parkir", place: "Luas & Aman" }
  ],
  packages: [
    { name: "Beach Pass (Reguler)", price: "Rp 50.000", desc: "Tiket masuk area pantai utama, akses bilas gratis, dan 1 botol air mineral.", icon: "Sun", img: "./galeri-beach-pass.webp" },
    { name: "Relax & Chill", price: "Rp 150.000", desc: "Tiket masuk, akses private gazebo, kursi jemur (sunbed), dan welcome drink kelapa muda segar.", icon: "Umbrella", img: "./galeri-relax-chill.webp" },
    { name: "Ocean Explorer", price: "Rp 350.000", desc: "Tiket masuk, set alat snorkeling, pemandu lokal, tiket perahu glass-bottom, dan makan siang.", icon: "Waves", img: "./galeri-ocean-explorer.webp" },
    { name: "Sunset BBQ Camp", price: "Rp 500.000", desc: "Akses camping ground (termasuk tenda 2 pax), paket seafood BBQ, dan area api unggun.", icon: "Anchor", img: "./galeri-sunset-camp.webp" }
  ],
  galleryPhotos: [
    { src: "./galeri-beach-pass.webp", title: "Pantai Pasir Putih & Laut Jernih", tag: "Beach Pass" },
    { src: "./galeri-relax-chill.webp", title: "Private Gazebo & Kelapa Muda Segar", tag: "Relax & Chill" },
    { src: "./galeri-ocean-explorer.webp", title: "Snorkeling Terumbu Karang & Penyu", tag: "Ocean Explorer" },
    { src: "./galeri-sunset-camp.webp", title: "Sunset BBQ Camping & Api Unggun", tag: "Sunset BBQ Camp" }
  ],
  faqs: [
    { q: "Jam berapa operasional pantai Oceana Vibe?", a: "Kawasan pantai kami buka setiap hari mulai pukul 06.00 WIB pagi hingga 20.00 WIB malam. Khusus paket Sunset & Camping buka 24 jam." },
    { q: "Apakah diperbolehkan membawa makanan dari luar?", a: "Tentu diperbolehkan. Namun, kami memberlakukan aturan bebas plastik sekali pakai dan setiap pengunjung wajib menjaga kebersihan pantai." },
    { q: "Apakah area pantai ramah untuk anak-anak?", a: "Sangat ramah! Kami memiliki area perairan dangkal yang dibatasi jaring pelindung, serta diawasi oleh penjaga pantai bersertifikat (Lifeguard) dari jam 07.00 - 18.00." },
    { q: "Bagaimana sistem penyewaan alat snorkeling?", a: "Alat snorkeling sudah termasuk dalam Paket Ocean Explorer. Namun Anda juga bisa menyewanya secara terpisah di lokasi (on-the-spot) seharga Rp 50.000/set." }
  ],
  testimonials: [
    { name: "Andi Pratama", rating: 5, text: "Pantainya sangat bersih dan tertata rapi. Sunset di sini juara banget! Sangat cocok untuk bawa keluarga." },
    { name: "Sari Kirana", rating: 5, text: "Paket Relax & Chill sangat worth it. Kelapa mudanya segar, pelayanan staf ramah, gazebo-nya nyaman banget buat tiduran." },
    { name: "Bima Bayu", rating: 4, text: "Akses jalan menuju lokasi sangat mulus. Pengalaman snorkeling luar biasa, terumbu karangnya masih sangat terjaga." }
  ]
};

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const date = formData.get('date');
    const pkg = formData.get('package');
    const pax = formData.get('pax');
    const notes = formData.get('notes');
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%20Saya%20ingin%20memesan%20${pkg}%20untuk%20${pax}%20orang%20pada%20tanggal%20${date}.%0ACatatan:%20${notes || '-'}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'Sun': return <Sun size={24} className="text-[#ea580c]" />;
      case 'Umbrella': return <Umbrella size={24} className="text-[#ea580c]" />;
      case 'Waves': return <Waves size={24} className="text-[#0284c7]" />;
      case 'Anchor': return <Anchor size={24} className="text-[#0284c7]" />;
      default: return <Sun size={24} className="text-[#ea580c]" />;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #fffbeb; /* light sunset warm */
          color: #1e1b4b; /* deep blue almost black */
          margin: 0;
          font-family: 'Outfit', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-white min-h-screen overflow-hidden pb-32">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[100dvh] flex flex-col justify-end pb-12 px-6 bg-[#1e1b4b]">
          
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/30 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b] via-[#1e1b4b]/60 to-[#ea580c]/20"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-40">
            <div className="w-32 h-32 rounded-full p-1 bg-white/10 backdrop-blur-md mb-6 shadow-2xl border border-[#fb923c]/40">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            <h1 className="text-4xl font-extrabold text-[#fef3c7] mb-3 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-[#fb923c] font-semibold text-sm mb-4 tracking-wide uppercase">
              {pageData.title}
            </p>
            <p className="text-amber-100 font-light text-sm leading-relaxed mb-6 max-w-[95%]">
              {pageData.heroDescription}
            </p>

            <div className="flex flex-col gap-3 w-full max-w-sm mb-8">
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href={pageData.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
                >
                  <Instagram size={18} /> Instagram
                </a>
                <a 
                  href={pageData.links.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg> TikTok
                </a>
              </div>
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#ea580c]/80 backdrop-blur-md border border-[#fb923c]/50 hover:bg-[#c2410c] transition-all text-white shadow-sm text-sm font-medium"
              >
                <MapPin size={18} /> Arahkan ke Pantai
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#fde047] text-[#451a03] rounded-2xl font-bold text-[14px] uppercase tracking-wider hover:bg-[#fef08a] transition-all shadow-[0_4px_20px_rgba(253,224,71,0.4)]"
            >
              Pesan Tiket & Paket
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* TENTANG KAMI & HISTORY SECTION */}
        <section className="py-12 px-6 bg-[#fffbeb] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#fef3c7] rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffedd5] text-[#ea580c] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <InfoIcon size={14} /> Tentang Kami
            </div>
            <h2 className="text-3xl font-extrabold text-[#451a03] mb-4">Mengenal Lebih Dekat Oceana Vibe</h2>
            <p className="text-amber-900/80 text-[15px] leading-relaxed mb-6">
              {pageData.about}
            </p>
          </div>

          <div className="p-6 bg-white border border-amber-100 rounded-3xl shadow-sm relative">
            <div className="absolute top-4 right-4 text-[#ffedd5]">
              <BookOpenIcon size={40} />
            </div>
            <h3 className="text-lg font-bold text-[#451a03] mb-3 relative z-10">Jejak Sejarah (History)</h3>
            <p className="text-amber-900/70 text-sm leading-relaxed relative z-10">
              {pageData.history}
            </p>
          </div>
        </section>

        {/* GALERI FOTO & SPOT EKSKLUSIF */}
        <section className="py-12 px-6 bg-[#fffbeb] border-t border-amber-100">
          <div className="mb-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffedd5] text-[#ea580c] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Camera size={14} /> Galeri Wisata
            </div>
            <h2 className="text-2xl font-extrabold text-[#451a03]">Pesona Pantai & Fasilitas</h2>
            <p className="text-amber-900/60 text-xs mt-1">Ketuk foto untuk melihat dalam resolusi penuh.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.galleryPhotos.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => openLightbox(pageData.galleryPhotos.map(p => p.src), idx)}
                className="snap-center shrink-0 w-[260px] aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer relative group border border-amber-200 shadow-sm bg-white"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[11px] font-bold text-[#fde047] uppercase tracking-wider mb-0.5">{item.tag}</span>
                  <p className="text-white text-xs font-semibold leading-snug drop-shadow-sm">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KATALOG & HARGA SECTION */}
        <section className="py-12 px-6 bg-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-[#451a03] mb-2">Katalog & Harga Paket</h2>
            <p className="text-amber-900/60 text-sm">Pilih aktivitas liburan sesuai gaya Anda.</p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            {pageData.packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className="w-full bg-[#fffbeb] rounded-3xl shadow-sm border border-amber-100 p-6 hover:shadow-md transition-shadow flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 shrink-0 bg-white rounded-2xl flex items-center justify-center border border-amber-200 shadow-sm">
                    {renderIcon(pkg.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#451a03] text-[16px] leading-tight mb-1">{pkg.name}</h3>
                    <div className="text-[#ea580c] font-extrabold text-lg">{pkg.price} <span className="text-xs font-medium text-amber-700/60">/ pax</span></div>
                  </div>
                </div>
                <p className="text-sm text-amber-900/80 leading-relaxed mt-1">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LOKASI SECTION */}
        <section className="py-10 px-6 bg-[#0c4a6e] text-white relative">
          <div className="absolute inset-0 bg-[#1e1b4b]/80 z-0 mix-blend-multiply"></div>
          <div className="relative z-10 mb-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3">
              <Map size={24} className="text-[#fde047]" />
            </div>
            <h2 className="text-2xl font-extrabold mb-2 text-[#fef3c7]">Lokasi Wisata</h2>
            <p className="text-amber-100/80 text-sm max-w-[280px]">{pageData.address}</p>
          </div>

          <div className="relative z-10 flex flex-wrap justify-center gap-3 w-full mx-auto mb-8">
            {pageData.locationHighlights.map((loc, idx) => (
              <span key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 text-xs font-medium shadow-sm">
                <Navigation size={14} className="text-[#fb923c]" />
                {loc.time} {loc.place}
              </span>
            ))}
          </div>

          <a 
            href={pageData.links.maps}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 w-full block text-center py-4 rounded-2xl bg-[#ea580c] text-white font-bold text-sm hover:bg-[#c2410c] transition-colors shadow-lg"
          >
            Buka di Google Maps
          </a>
        </section>

        {/* FAQ SECTION */}
        <section className="py-12 px-6 bg-white">
          <div className="mb-8 flex items-center gap-3">
            <HelpCircle className="text-[#ea580c]" size={28} />
            <div>
              <h2 className="text-2xl font-extrabold text-[#451a03]">FAQ</h2>
              <p className="text-amber-900/60 text-xs mt-1">Pertanyaan yang sering diajukan</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'border-[#ea580c] bg-[#fffbeb]' : 'border-amber-100 bg-white'}`}
              >
                <button 
                  className="w-full px-5 py-4 flex justify-between items-center text-left"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="font-semibold text-sm text-[#451a03] pr-4">{faq.q}</span>
                  <ChevronDown size={18} className={`text-amber-500 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-[#ea580c]' : ''}`} />
                </button>
                <div 
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-sm text-amber-900/80 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONI PELANGGAN */}
        <section className="py-12 px-6 bg-[#fffbeb] border-t border-amber-100">
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold text-[#451a03] mb-2">Kata Mereka</h2>
            <p className="text-amber-900/60 text-sm">Pengalaman nyata pengunjung Oceana Vibe.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-white p-6 rounded-3xl border border-amber-100 shadow-sm flex flex-col gap-4 relative">
                <Quote className="absolute top-4 right-4 text-[#ffedd5]" size={40} />
                <div className="flex items-center gap-1 relative z-10">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#fb923c] text-[#fb923c]" />
                  ))}
                </div>
                <p className="text-amber-900/80 text-sm leading-relaxed relative z-10">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-amber-50 flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#ffedd5] flex items-center justify-center text-[#ea580c] font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[14px] font-bold text-[#451a03]">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING FORM */}
        <section id="booking-form" className="py-12 px-6 bg-[#1e1b4b] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ea580c] rounded-full blur-3xl -z-0 translate-x-1/3 -translate-y-1/3 opacity-30"></div>
          
          <div className="bg-white rounded-[2rem] p-7 shadow-2xl relative z-10 border border-amber-100">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-[#451a03] mb-2">Mulai Petualanganmu</h2>
              <p className="text-amber-900/60 text-sm leading-relaxed">Isi form di bawah ini untuk pemesanan tiket atau paket liburan melalui WhatsApp.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-amber-700/60 uppercase tracking-wider ml-1">Nama Pemesan</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik nama lengkap"
                  className="w-full bg-[#fffbeb] border border-amber-200 rounded-xl px-4 py-4 text-sm text-[#451a03] placeholder-amber-900/40 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-[12px] font-bold text-amber-700/60 uppercase tracking-wider ml-1">Tanggal Kunjungan</label>
                  <input 
                    type="date" 
                    name="date" 
                    required
                    className="w-full bg-[#fffbeb] border border-amber-200 rounded-xl px-4 py-4 text-sm text-[#451a03] focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-1/2">
                  <label className="text-[12px] font-bold text-amber-700/60 uppercase tracking-wider ml-1">Jumlah Orang</label>
                  <input 
                    type="number" 
                    name="pax"
                    min="1" 
                    required
                    placeholder="Contoh: 2"
                    className="w-full bg-[#fffbeb] border border-amber-200 rounded-xl px-4 py-4 text-sm text-[#451a03] focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-amber-700/60 uppercase tracking-wider ml-1">Pilih Paket Wisata</label>
                <div className="relative">
                  <select 
                    name="package" 
                    required
                    className="w-full bg-[#fffbeb] border border-amber-200 rounded-xl px-4 py-4 pr-10 text-sm text-[#451a03] focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all appearance-none"
                  >
                    <option value="">-- Silakan Pilih --</option>
                    {pageData.packages.map((pkg, idx) => (
                      <option key={idx} value={pkg.name}>{pkg.name} - {pkg.price}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none" size={18} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-amber-700/60 uppercase tracking-wider ml-1">Catatan Tambahan (Opsional)</label>
                <textarea 
                  name="notes" 
                  rows="2"
                  placeholder="Contoh: Bawa anak kecil, alergi makanan laut..."
                  className="w-full bg-[#fffbeb] border border-amber-200 rounded-xl px-4 py-3 text-sm text-[#451a03] placeholder-amber-900/40 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 bg-[#25D366] text-white font-bold text-[15px] tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1ebd5b] transition-all shadow-[0_4px_15px_rgba(37,211,102,0.3)]"
              >
                Kirim Pesan ke WhatsApp
                <MessageCircle size={20} className="fill-current text-[#25D366] stroke-white bg-white rounded-full p-[2px]" />
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-10 pb-16 text-center flex flex-col items-center justify-center mx-6 mt-4 relative z-10 bg-white">
          <div className="w-full h-px bg-amber-100 mb-8"></div>
          
          <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-amber-200 flex items-center justify-center mb-4 p-1 overflow-hidden">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-cover rounded-full" />
          </div>
          
          <div className="text-amber-900/60 text-xs flex flex-col gap-2 items-center">
            <span className="font-extrabold text-[#451a03] text-lg tracking-tight">{pageData.name}</span>
            <span className="max-w-[280px] leading-relaxed">{pageData.address}</span>
          </div>

          <p className="text-amber-900/40 text-[11px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          
          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-amber-900/50 text-[10px] mt-2 tracking-wide font-medium hover:text-[#ea580c] transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#fde047] backdrop-blur-xl border border-[#fde047] rounded-2xl text-[#451a03] shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:bg-[#fef08a] active:scale-[0.98] transition-all"
          >
            <span className="font-extrabold text-[15px] tracking-wide">Pesan Tiket Sekarang</span>
            <div className="bg-[#451a03] text-white p-2.5 rounded-xl">
              <Ticket size={18} className="stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {/* LIGHTBOX MODAL */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#1e1b4b]/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
            onClick={closeLightbox}
            aria-label="Tutup Galeri"
          >
            <X size={24} />
          </button>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute left-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={prevImage}
              aria-label="Foto Sebelumnya"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="w-full max-w-4xl max-h-[85vh] p-2 flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.images[lightbox.currentIndex]} 
              alt="Galeri Oceana Vibe" 
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20"
              onClick={nextImage}
              aria-label="Foto Selanjutnya"
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {lightbox.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs font-bold tracking-[0.2em] bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
              {lightbox.currentIndex + 1} / {lightbox.images.length}
            </div>
          )}
        </div>
      )}

      {/* SHARE MODAL */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#1e1b4b]/60 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-[#451a03] font-bold text-[16px]">Bagikan Oceana Vibe</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-2 text-amber-900/40 hover:bg-amber-50 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-[#fffbeb] border border-amber-100 rounded-[24px] p-8 flex flex-col items-center justify-center mb-8 shadow-sm">
              <img src={pageData.profileImg} alt="Profile" className="w-[72px] h-[72px] rounded-full border-2 border-white shadow-sm mb-4 object-cover" />
              <h4 className="text-[#451a03] font-bold text-lg text-center tracking-tight">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-amber-900/60 text-sm mt-1 text-center font-medium opacity-90">{pageData.links.instagram.replace('https://www.', '')}</p>
            </div>

            <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar items-start px-2 mb-2">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={copyToClipboard}
                  className="w-[60px] h-[60px] rounded-full bg-amber-50 flex items-center justify-center text-amber-900/70 hover:bg-amber-100 transition-all shadow-sm border border-amber-200"
                >
                  {copied ? <Check size={26} className="text-green-600" /> : <Copy size={24} />}
                </button>
                <span className="text-[11px] font-semibold text-amber-900/80 text-center">
                  {copied ? 'Tersalin' : 'Salin Tautan'}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(pageData.name)}`, '_blank')}
                  className="w-[60px] h-[60px] rounded-full bg-[#1e1b4b] flex items-center justify-center text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  <Twitter size={24} />
                </button>
                <span className="text-[11px] font-semibold text-amber-900/80 text-center">X</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="w-[60px] h-[60px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <Facebook size={24} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-amber-900/80 text-center">Facebook</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank')}
                  className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <MessageCircle size={24} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-amber-900/80 text-center">WhatsApp</span>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}

const InfoIcon = ({size=24}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path>
  </svg>
)

const BookOpenIcon = ({size=24}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
)