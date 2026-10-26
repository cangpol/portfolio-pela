import React from 'react';
import { Film, Compass, HeartHandshake, Volume2, Sparkles, Quote } from 'lucide-react';
import { skillsAndGear } from '../data/portfolioData';

export default function DirectorPhilosophy({ playClickSound }) {
  const principles = [
    {
      icon: Film,
      title: "Narrative Rhythm & Editorial Pacing",
      description: "Setiap cut adalah denyut emosi. Mengatur tempo transisi dan durasi shot bukan sekadar memotong klip, melainkan memandu detak jantung dan rasa penasaran penonton."
    },
    {
      icon: HeartHandshake,
      title: "Human-Centric Visual Storytelling",
      description: "Menghadirkan kedekatan emosional narasumber tanpa jarak. Dokumenter sejati lahir dari rasa saling percaya dan empati antara kreator dan subjek di depan kamera."
    },
    {
      icon: Compass,
      title: "Harmonic Color Science",
      description: "Warna adalah bahasa bawah sadar sinema. Mengolah kurva tonal, skin tone balance, dan color harmony untuk memperkuat substansi cerita secara puitis."
    },
    {
      icon: Volume2,
      title: "Atmospheric Sound Scenography",
      description: "Separuh kekuatan video terletak pada tata suara. Membangun ruang bunyi berlapis dengan foley autentik, room tone natural, dan alunan scoring yang menyatu."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cinema-950 relative overflow-hidden">
      
      {/* Subtle Grid Lines */}
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cinema-gold/10 text-cinema-gold border border-cinema-gold/30">
            <Sparkles className="w-4 h-4" />
            <span>THE AUTEUR MANIFESTO</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Filosofi Sutradara & Ritme Visual
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Menyatukan disiplin ilmu penyiaran akademis dari STMM 'MMTC' Yogyakarta dengan kepekaan artistik kontemporer.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-cinema-900 border border-white/10 hover:border-cinema-gold/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cinema-gold/20 to-amber-500/10 border border-cinema-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-cinema-gold" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-cinema-gold transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                  PILLAR 0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Cinematic Quote Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-cinema-900 via-cinema-850 to-cinema-900 border border-cinema-gold/30 p-8 sm:p-12 overflow-hidden shadow-cinema-card">
          <Quote className="absolute -top-4 -right-4 w-36 h-36 text-white/5 pointer-events-none" />
          
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-mono tracking-widest uppercase text-cinema-gold block">
              — DIRECTOR'S CREED
            </span>
            <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-snug">
              "Kamera merekam apa yang tampak di mata, namun editor yang terampil menenun apa yang dirasakan oleh hati."
            </blockquote>
            <p className="text-xs font-mono text-zinc-400">
              Maria Esfera Dyah Untari, S.Tr.I.Kom. • Produser & Video Editor
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

