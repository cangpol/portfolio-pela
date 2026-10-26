import React from 'react';
import { ArrowUp, Heart, Film, Award } from 'lucide-react';

export default function Footer({ playClickSound }) {
  const scrollToTop = () => {
    if (playClickSound) playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-cinema-950 border-t border-white/10 relative overflow-hidden">
      
      {/* Film Strip Holes Aesthetic Top & Bottom */}
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Credits Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cinema-gold to-amber-600 flex items-center justify-center p-0.5">
              <div className="w-full h-full bg-cinema-950 rounded-[6px] flex items-center justify-center">
                <span className="font-display font-black text-cinema-gold text-base">ME</span>
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-white tracking-wide">
                MARIA ESFERA DYAH UNTARI, S.Tr.I.Kom.
              </span>
              <p className="text-[11px] font-mono text-zinc-400">
                VIDEO EDITOR • VIDEOGRAPHER • PRODUCER
              </p>
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-full bg-cinema-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-xs font-mono flex items-center gap-2 transition-all"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp className="w-3.5 h-3.5 text-cinema-gold" />
          </button>
        </div>

        {/* Film Credits Block */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left text-xs font-mono">
          <div>
            <span className="text-zinc-600 block mb-1">DIRECTION & EDITING</span>
            <span className="text-zinc-300">Maria Esfera Dyah Untari</span>
          </div>

          <div>
            <span className="text-zinc-600 block mb-1">ACADEMIC ALMA MATER</span>
            <span className="text-zinc-300">STMM 'MMTC' Yogyakarta</span>
          </div>

          <div>
            <span className="text-zinc-600 block mb-1">PRIMARY COLOR SUITE</span>
            <span className="text-cinema-gold">DaVinci Resolve Studio</span>
          </div>

          <div>
            <span className="text-zinc-600 block mb-1">VERIFIED HONORS</span>
            <span className="text-zinc-300">Kementan & Frans Seda 2020</span>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center justify-center sm:justify-start gap-4 pt-2 text-xs font-mono">
          <a
            href="https://id.linkedin.com/in/mariaesfera"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-[#0A66C2] transition-colors"
          >
            LinkedIn: in/mariaesfera
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href="https://instagram.com/gaadadekengan"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-pink-400 transition-colors"
          >
            Instagram: @gaadadekengan
          </a>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Maria Esfera Dyah Untari. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with cinematic passion in React & Node.js</span>
          </div>
        </div>

      </div>

    </footer>
  );
}

