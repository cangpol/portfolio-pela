import React from 'react';
import { User, Award, GraduationCap, MapPin, Download, Heart, Quote, Instagram, Mail, MessageCircle, Linkedin } from 'lucide-react';
import { portfolioProfile, testimonials } from '../data/portfolioData';

export default function AboutSection({ playClickSound }) {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-cinema-950 relative">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Stats (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Frame with Gold Accent */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-cinema-900 to-cinema-850 border border-cinema-gold/30 shadow-2xl p-2 group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                <img
                  src="/images/maria-esfera.jpg"
                  alt="Maria Esfera Dyah Untari"
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-102 transition-transform duration-700"
                />
                
                {/* Director Overlay Filter */}
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-transparent to-transparent opacity-80" />

                {/* Corner Film Marks */}
                <div className="absolute top-4 left-4 text-[10px] font-mono text-zinc-400 bg-black/60 px-2.5 py-1 rounded backdrop-blur-xs border border-white/10">
                  MARIA ESFERA • STMM MMTC
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                  <div className="font-display font-bold text-white text-base">
                    Maria Esfera Dyah Untari
                  </div>
                  <div className="text-xs font-mono text-cinema-gold">
                    S.Tr.I.Kom. (Sarjana Terapan Ilmu Komunikasi)
                  </div>
                  <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 mt-1 font-mono">
                    <MapPin className="w-3 h-3 text-red-400" />
                    <span>Yogyakarta & Jakarta, Indonesia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-4 bg-gradient-to-r from-cinema-gold to-amber-500 text-cinema-950 p-4 rounded-2xl shadow-glow-gold flex items-center gap-3">
              <Award className="w-8 h-8 fill-cinema-950" />
              <div>
                <div className="font-display font-black text-xl leading-none">JUARA 1</div>
                <div className="text-[10px] font-mono font-bold tracking-wider uppercase">LOMBA NASIONAL 2020</div>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative Biography (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cinema-gold/10 text-cinema-gold border border-cinema-gold/30">
              <User className="w-4 h-4" />
              <span>BIOGRAPHY & BACKGROUND</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Menenun Emosi Melalui Lensa & Meja Editing
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Saya adalah seorang <strong>Video Editor, Videografer, dan Produser</strong> dengan latar belakang pendidikan formal di bidang <strong>Manajemen Produksi Siaran</strong> dari <strong>Sekolah Tinggi Multi Media (STMM) 'MMTC' Yogyakarta</strong>, menyandang gelar <strong>S.Tr.I.Kom.</strong>
              </p>
              
              <p>
                Bagi saya, video bukan sekadar rangkaian gambar bergerak beresolusi tinggi, melainkan sebuah ruang komunikasi yang memiliki jiwa. Pendekatan saya berakar pada <em>human interest storytelling</em> — menggali ketulusan narasumber, menstruktur alur emosional, dan memperkuat narasi melalui ketepatan ritme editing serta harmoni tata warna sinematik.
              </p>

              <p>
                Karya-karya saya mencakup produksi film dokumenter bertaraf akademik (*Di Balik Layar Pencari Berita*), program majalah televisi bergaya retro (*TrendSpot*), videografis kampanye nasional yang memenangkan <strong>Juara 1 Lomba Videografis Kementan RI 2020</strong>, serta video profil tokoh inspiratif yang meraih <strong>Juara 3 Frans Seda Award 2020</strong>.
              </p>
            </div>

            {/* Academic & Credential Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-cinema-900 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <GraduationCap className="w-4 h-4 text-cinema-gold" />
                  <span>STMM 'MMTC' Yogyakarta</span>
                </div>
                <p className="text-xs text-zinc-400 font-mono">
                  Sarjana Terapan Ilmu Komunikasi (S.Tr.I.Kom.) • Manajemen Produksi Siaran
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cinema-900 border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Award className="w-4 h-4 text-cinema-gold" />
                  <span>National Awardee 2020</span>
                </div>
                <p className="text-xs text-zinc-400 font-mono">
                  Juara 1 Kementan RI & Juara 3 Frans Seda Award Tokoh Muda
                </p>
              </div>
            </div>

            {/* Quick Links & Socials */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://id.linkedin.com/in/mariaesfera"
                target="_blank"
                rel="noreferrer"
                onClick={() => playClickSound && playClickSound()}
                className="px-4 py-2.5 rounded-full bg-zinc-900 hover:bg-[#0A66C2]/20 text-zinc-200 hover:text-[#0A66C2] border border-white/10 hover:border-[#0A66C2]/40 text-xs font-mono flex items-center gap-2 transition-all"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn Resmi</span>
              </a>

              <a
                href="https://instagram.com/gaadadekengan"
                target="_blank"
                rel="noreferrer"
                onClick={() => playClickSound && playClickSound()}
                className="px-4 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 text-xs font-mono flex items-center gap-2 transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@gaadadekengan</span>
              </a>

              <a
                href="#contact"
                onClick={() => playClickSound && playClickSound()}
                className="px-5 py-2.5 rounded-full bg-cinema-gold hover:bg-amber-400 text-cinema-950 font-bold text-xs flex items-center gap-2 shadow-glow-gold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi Proyek Bersama Maria</span>
              </a>
            </div>

          </div>

        </div>

        {/* Testimonials Carousel / Grid */}
        <div className="pt-12 border-t border-white/10 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono tracking-wider text-cinema-gold uppercase">TESTIMONIALS & COLLABORATIONS</span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Apa Kata Mitra Kolaborasi & Dewan Juri
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-cinema-900/70 border border-white/10 flex flex-col justify-between space-y-4"
              >
                <Quote className="w-6 h-6 text-cinema-gold/40" />
                <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                  "{item.quote}"
                </p>
                <div className="pt-3 border-t border-white/5">
                  <div className="text-xs font-bold text-white">{item.author}</div>
                  <div className="text-[11px] font-mono text-zinc-400">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

