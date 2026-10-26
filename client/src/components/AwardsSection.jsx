import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Medal, Award, Sparkles, ExternalLink, ShieldCheck, CheckCircle2, X } from 'lucide-react';
import { awardsList } from '../data/portfolioData';

export default function AwardsSection({ playClickSound }) {
  const [selectedAward, setSelectedAward] = useState(null);

  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#E5A93C', '#FCD34D', '#F59E0B', '#38BDF8', '#FFFFFF']
    });
  };

  const handleAwardClick = (award) => {
    if (playClickSound) playClickSound();
    triggerConfetti();
    setSelectedAward(award);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-yellow-300" />;
      case 'Medal':
        return <Medal className="w-6 h-6 text-amber-300" />;
      case 'Award':
        return <Award className="w-6 h-6 text-cyan-300" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-300" />;
    }
  };

  return (
    <section id="awards" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cinema-900/60 border-t border-b border-white/5">
      
      {/* Background Lighting Flares */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cinema-gold/10 text-cinema-gold border border-cinema-gold/30">
            <Trophy className="w-4 h-4" />
            <span>HONORS, AWARDS & RECOGNITIONS</span>
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Rekam Jejak Prestasi & Kompetisi Nasional
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Dedikasi dalam menyajikan karya visual berkualitas tinggi telah diakui melalui berbagai ajang kompetisi tingkat kementerian, institusi pendidikan terkemuka, dan dewan juri profesional.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awardsList.map((award, index) => (
            <div
              key={award.id}
              onClick={() => handleAwardClick(award)}
              className="group relative rounded-2xl bg-gradient-to-b from-cinema-850 to-cinema-900 p-6 border border-white/10 hover:border-cinema-gold/60 shadow-cinema-card transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
            >
              {/* Corner Ribbon / Glow */}
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-cinema-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Icon & Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${award.badgeColor} flex items-center justify-center p-0.5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full bg-cinema-950/80 rounded-[10px] flex items-center justify-center">
                      {getIcon(award.icon)}
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-black/40 border border-white/10 text-zinc-300">
                    {award.year}
                  </span>
                </div>

                {/* Rank Tag */}
                <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-cinema-gold/20 text-cinema-gold border border-cinema-gold/40 mb-2">
                  {award.rank}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white group-hover:text-cinema-gold transition-colors mb-2">
                  {award.title}
                </h3>

                {/* Organizer */}
                <p className="text-xs text-zinc-400 font-medium mb-3">
                  {award.organizer}
                </p>

                {/* Brief Excerpt */}
                <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                  {award.description}
                </p>
              </div>

              {/* Action Hint */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-cinema-gold font-mono group-hover:text-amber-300">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Lihat Detail & Kurasi
                </span>
                <span className="text-zinc-500 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Banner */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-black/40 border border-cinema-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Seluruh data penghargaan dan sertifikasi di atas telah terverifikasi secara resmi dari publikasi panitia dan media partner (Kementan RI, Warta Ekonomi, & Unika Atma Jaya).</span>
          </div>
          <button
            onClick={() => {
              if (playClickSound) playClickSound();
              triggerConfetti();
            }}
            className="px-3.5 py-1.5 rounded-lg bg-cinema-gold/10 hover:bg-cinema-gold/20 text-cinema-gold border border-cinema-gold/30 shrink-0 transition-colors"
          >
            🎉 Rayakan Kemenangan
          </button>
        </div>

      </div>

      {/* Detail Modal for Selected Award */}
      {selectedAward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-cinema-950 border border-cinema-gold/50 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => {
                if (playClickSound) playClickSound();
                setSelectedAward(null);
              }}
              className="absolute top-5 right-5 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              
              <div className="flex items-center gap-3">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedAward.badgeColor} p-1 flex items-center justify-center shadow-glow-gold`}>
                  <div className="w-full h-full bg-cinema-950 rounded-xl flex items-center justify-center">
                    {getIcon(selectedAward.icon)}
                  </div>
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-cinema-gold/20 text-cinema-gold border border-cinema-gold/40">
                    {selectedAward.rank}
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">
                    {selectedAward.title}
                  </h3>
                </div>
              </div>

              {/* Specs Box */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-cinema-900 border border-white/10 text-xs font-mono">
                <div>
                  <span className="text-zinc-500 block">PENYELENGGARA:</span>
                  <span className="text-white font-medium">{selectedAward.organizer}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">TAHUN / KATEGORI:</span>
                  <span className="text-cinema-gold font-medium">{selectedAward.year} • {selectedAward.category}</span>
                </div>
              </div>

              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400">Deskripsi Karya & Lomba:</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedAward.description}
                </p>
              </div>

              {/* Jury Assessment Note */}
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-cinema-gold font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CATATAN KURATOR & DEWAN JURI</span>
                </div>
                <blockquote className="text-xs sm:text-sm text-amber-200/90 italic">
                  "{selectedAward.juryQuote}"
                </blockquote>
              </div>

              {/* Impact */}
              <div className="space-y-1">
                <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400">Dampak & Distribusi:</h4>
                <p className="text-xs text-zinc-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{selectedAward.impact}</span>
                </p>
              </div>

              {/* Footer CTA */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">
                  Verifikasi Penghargaan Resmi
                </span>
                <button
                  onClick={() => {
                    if (playClickSound) playClickSound();
                    setSelectedAward(null);
                  }}
                  className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold"
                >
                  Tutup Rincian
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}

