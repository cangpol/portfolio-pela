import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ShowreelModal from './components/ShowreelModal';
import AwardsSection from './components/AwardsSection';
import ProjectsGallery from './components/ProjectsGallery';
import ColorGradingSlider from './components/ColorGradingSlider';
import DirectorPhilosophy from './components/DirectorPhilosophy';
import GearAndSkills from './components/GearAndSkills';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [bgMusicPlaying, setBgMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  // Toggle Background Music (Christian Jazz Piano & Worship Instrumental)
  const toggleBgMusic = () => {
    if (!audioRef.current) return;
    if (bgMusicPlaying) {
      audioRef.current.pause();
      setBgMusicPlaying(false);
    } else {
      audioRef.current.volume = 0.4;
      audioRef.current.play().then(() => {
        setBgMusicPlaying(true);
      }).catch(() => {
        // Autoplay policy fallback
      });
    }
  };

  // Synthesize a subtle mechanical cinema shutter / click sound using Web Audio API
  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Short noise burst (shutter mechanism)
      const bufferSize = ctx.sampleRate * 0.04;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1400;
      filter.Q.value = 3;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
    } catch {
      // Audio context might be restricted before user gesture
    }
  };

  return (
    <div className="min-h-screen bg-cinema-950 text-zinc-100 flex flex-col font-sans selection:bg-cinema-gold selection:text-cinema-950">
      
      {/* Background Christian Jazz Audio Element */}
      <audio
        ref={audioRef}
        src="/audio/christian-jazz.mp3"
        loop
        preload="auto"
        onEnded={() => setBgMusicPlaying(false)}
      />

      {/* Top Navigation */}
      <Navbar
        onOpenShowreel={() => setShowreelOpen(true)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        bgMusicPlaying={bgMusicPlaying}
        toggleBgMusic={toggleBgMusic}
        playClickSound={playClickSound}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Interactive 3D Cinema Optics */}
        <Hero3D
          onOpenShowreel={() => setShowreelOpen(true)}
          playClickSound={playClickSound}
        />

        {/* Awards, Lomba & National Honors */}
        <AwardsSection playClickSound={playClickSound} />

        {/* Projects Showcase & TV Productions */}
        <ProjectsGallery
          playClickSound={playClickSound}
          onPlayVideo={() => setShowreelOpen(true)}
        />

        {/* Interactive Color Grading Suite (S-Log3 to Rec.709 Slider) */}
        <ColorGradingSlider playClickSound={playClickSound} />

        {/* Directing Philosophy & Visual Rhythm */}
        <DirectorPhilosophy playClickSound={playClickSound} />

        {/* Post-Production Software & Cinema Hardware */}
        <GearAndSkills />

        {/* About Maria Esfera, STMM MMTC, & Testimonials */}
        <AboutSection playClickSound={playClickSound} />

        {/* Project Booking & Inquiry Studio */}
        <ContactSection playClickSound={playClickSound} />
      </main>

      {/* Cinematic Film Credits Footer */}
      <Footer playClickSound={playClickSound} />

      {/* Director's Showreel Monitor Modal */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        playClickSound={playClickSound}
      />

    </div>
  );
}
