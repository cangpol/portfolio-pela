import React, { useState, useEffect } from 'react';
import { Film, Award, Clapperboard, Sliders, User, Menu, X, Volume2, VolumeX, Linkedin, Instagram, Music2 } from 'lucide-react';

export default function Navbar({ onOpenShowreel, soundEnabled, setSoundEnabled, bgMusicPlaying, toggleBgMusic, playClickSound }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Showreel", href: "#showreel", icon: Clapperboard, action: onOpenShowreel },
    { label: "Prestasi", href: "#awards", icon: Award },
    { label: "Karya", href: "#projects", icon: Film },
    { label: "Color Grade", href: "#color-grading", icon: Sliders },
    { label: "Tentang", href: "#about", icon: User },
  ];

  const handleLinkClick = (link) => {
    if (playClickSound) playClickSound();
    if (link.action) {
      link.action();
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-cinema-950/95 backdrop-blur-xl py-2 border-b border-cinema-gold/20 shadow-2xl' 
        : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-3 sm:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          
          {/* Left: Brand Identity */}
          <a 
            href="#hero" 
            onClick={() => playClickSound && playClickSound()}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cinema-gold to-amber-600 flex items-center justify-center p-0.5 shadow-glow-gold transition-transform group-hover:scale-105 shrink-0">
              <div className="w-full h-full bg-cinema-950 rounded-[9px] flex items-center justify-center">
                <span className="font-display font-black text-cinema-gold text-sm sm:text-base tracking-wider">ME</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-display font-bold text-white text-sm sm:text-base tracking-wide group-hover:text-cinema-gold transition-colors whitespace-nowrap">
                  MARIA ESFERA
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cinema-gold/15 text-cinema-gold border border-cinema-gold/30 font-semibold whitespace-nowrap">
                  S.Tr.I.Kom.
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-zinc-400 font-mono tracking-wider hidden md:block whitespace-nowrap">
                VIDEO EDITOR • VIDEOGRAPHER
              </p>
            </div>
          </a>

          {/* Center: Clean Capsule Navigation (No Wrapping) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 xl:px-4 py-1.5 rounded-full bg-cinema-900/80 border border-white/10 backdrop-blur-md shadow-inner shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.action) {
                    e.preventDefault();
                    handleLinkClick(link);
                  } else {
                    handleLinkClick(link);
                  }
                }}
                className="whitespace-nowrap px-3 xl:px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold tracking-wide text-zinc-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5 group"
              >
                <link.icon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cinema-gold transition-colors shrink-0" />
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Right: Audio, Socials & CTA (No Overflow) */}
          <div className="hidden sm:flex items-center gap-1.5 sm:gap-2 xl:gap-3 shrink-0">
            
            {/* Christian Jazz Background Music Player Button */}
            <button
              onClick={() => {
                if (playClickSound) playClickSound();
                toggleBgMusic();
              }}
              className={`whitespace-nowrap flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full border transition-all text-xs font-mono shrink-0 ${
                bgMusicPlaying
                  ? 'bg-amber-500/15 border-cinema-gold/50 text-cinema-gold shadow-glow-gold'
                  : 'bg-zinc-900/80 border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
              }`}
              title={bgMusicPlaying ? "Jeda Musik: Jazz Lembut Rohani Kristen" : "Putar Musik Latar: Jazz Lembut Rohani Kristen"}
            >
              <Music2 className={`w-3.5 h-3.5 ${bgMusicPlaying ? 'text-cinema-gold animate-bounce' : 'text-zinc-400'} shrink-0`} />
              
              <span className="hidden xl:inline font-medium">
                {bgMusicPlaying ? "Jazz Rohani" : "Play BGM"}
              </span>

              {/* Animated Equalizer Wave Bars */}
              {bgMusicPlaying && (
                <div className="flex items-end gap-0.5 h-3 ml-0.5">
                  <span className="w-0.5 h-2 bg-cinema-gold rounded-full animate-pulse" />
                  <span className="w-0.5 h-3 bg-cinema-gold rounded-full animate-bounce" />
                  <span className="w-0.5 h-1.5 bg-cinema-gold rounded-full animate-pulse" />
                </div>
              )}
            </button>

            {/* LinkedIn Quick Icon */}
            <a
              href="https://id.linkedin.com/in/mariaesfera"
              target="_blank"
              rel="noreferrer"
              onClick={() => playClickSound && playClickSound()}
              className="p-1.5 sm:p-2 rounded-full bg-zinc-900/80 hover:bg-[#0A66C2]/20 text-zinc-400 hover:text-[#0A66C2] border border-white/5 transition-all shrink-0"
              title="LinkedIn: Maria Esfera Dyah Untari"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Instagram Quick Icon */}
            <a
              href="https://instagram.com/gaadadekengan"
              target="_blank"
              rel="noreferrer"
              onClick={() => playClickSound && playClickSound()}
              className="p-1.5 sm:p-2 rounded-full bg-zinc-900/80 hover:bg-pink-500/20 text-zinc-400 hover:text-pink-400 border border-white/5 transition-all shrink-0"
              title="Instagram: @gaadadekengan"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Camera Click FX Toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                if (playClickSound) playClickSound();
              }}
              className="p-1.5 sm:p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-cinema-gold border border-white/5 transition-all shrink-0"
              title={soundEnabled ? "Nonaktifkan Efek Suara Kamera" : "Aktifkan Efek Suara Kamera"}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cinema-gold" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Quick Contact CTA (Guaranteed No-Cutoff) */}
            <a
              href="#contact"
              onClick={() => playClickSound && playClickSound()}
              className="whitespace-nowrap shrink-0 px-3.5 sm:px-4 xl:px-5 py-2 rounded-full text-xs xl:text-[13px] font-bold uppercase tracking-wider bg-gradient-to-r from-cinema-gold to-amber-500 text-cinema-950 hover:brightness-110 shadow-glow-gold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Inquire</span>
              <span className="hidden xl:inline"> Project</span>
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            {/* Mobile Music Toggle */}
            <button
              onClick={() => {
                if (playClickSound) playClickSound();
                toggleBgMusic();
              }}
              className={`p-2 rounded-full border text-xs ${
                bgMusicPlaying
                  ? 'bg-amber-500/20 border-cinema-gold text-cinema-gold'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800'
              }`}
              title="Musik Latar Jazz Rohani"
            >
              <Music2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                if (playClickSound) playClickSound();
              }}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cinema-950/98 backdrop-blur-2xl border-b border-cinema-gold/20 px-4 pt-3 pb-6 mt-2 space-y-2 animate-fadeIn">
          
          {/* Mobile Music Status Card */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-cinema-900 border border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Music2 className={`w-4 h-4 ${bgMusicPlaying ? 'text-cinema-gold animate-spin' : 'text-zinc-400'}`} />
              <span className="text-zinc-200">Jazz Rohani Kristen</span>
            </div>
            <button
              onClick={() => {
                toggleBgMusic();
                if (playClickSound) playClickSound();
              }}
              className={`px-3 py-1 rounded text-[11px] font-bold ${
                bgMusicPlaying ? 'bg-cinema-gold text-cinema-950' : 'bg-zinc-800 text-zinc-300'
              }`}
            >
              {bgMusicPlaying ? 'JEDA' : 'PUTAR'}
            </button>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.action) {
                  e.preventDefault();
                  handleLinkClick(link);
                } else {
                  handleLinkClick(link);
                }
              }}
              className="flex items-center gap-3 px-3.5 py-3 rounded-lg text-sm font-medium text-zinc-200 hover:text-cinema-gold hover:bg-white/5 transition-colors"
            >
              <link.icon className="w-4 h-4 text-cinema-gold" />
              <span>{link.label}</span>
            </a>
          ))}

          <div className="pt-3 grid grid-cols-2 gap-2">
            <a
              href="https://id.linkedin.com/in/mariaesfera"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2 rounded-lg bg-[#0A66C2]/15 border border-[#0A66C2]/30 text-[#0A66C2] text-xs font-mono font-semibold"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/gaadadekengan"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2 rounded-lg bg-pink-500/15 border border-pink-500/30 text-pink-400 text-xs font-mono font-semibold"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => handleLinkClick({})}
              className="block w-full text-center py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cinema-gold to-amber-500 text-cinema-950 shadow-glow-gold"
            >
              Hubungi / Inquire Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
