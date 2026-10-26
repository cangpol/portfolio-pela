import React, { useState, useRef } from 'react';
import { Sliders, Sparkles, Eye, Layers, Compass, CheckCircle2 } from 'lucide-react';

export default function ColorGradingSlider({ playClickSound }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeScene, setActiveScene] = useState(0);
  const containerRef = useRef(null);

  const scenes = [
    {
      title: "Scene 1: Documentary Character & Mood",
      location: "Interior Low-Light • Sony FX3",
      sourceLog: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=80",
      gradedImg: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1400&q=80",
      colorSpace: "Sony S-Gamut3.Cine / S-Log3 → Rec.709",
      lutUsed: "Custom Kodak 2383 Film Print Emulation",
      notes: "Peningkatan micro-contrast pada wajah narasumber, penataan bayangan dingin (cool teal shadows) dipadukan dengan cahaya hangat lampu tungsten (warm amber key)."
    },
    {
      title: "Scene 2: Kedaulatan Pangan (Kementan Winner)",
      location: "Exterior Golden Hour • Sony A7S III",
      sourceLog: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=80",
      gradedImg: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
      colorSpace: "Sony S-Log3 → DaVinci Wide Gamut Intermediate",
      lutUsed: "Earthy Foliage Rich Green & Golden Harvest",
      notes: "Menyelamatkan highlight langit sore yang terik sambil mengekstraksi saturasi hijau sawah dan emas bulir padi untuk memperkuat pesan optimisme agrikultur."
    },
    {
      title: "Scene 3: Program Majalah Televisi TrendSpot",
      location: "Studio Penyiaran STMM MMTC Yogyakarta • Retro Tone",
      sourceLog: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=80",
      gradedImg: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=80",
      colorSpace: "Blackmagic Film Gen 5 → Rec.709 Broadcast Standard",
      lutUsed: "Vintage Warm Retro 70s Saturation & Filmic Roll-off",
      notes: "Pengembangan visual magazine show TrendSpot episode 'Back In Style' karya Maria Esfera. Menyeimbangkan nuansa retro nostalgia dengan kejelasan standar penyiaran televisi modern."
    }
  ];

  const current = scenes[activeScene];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="color-grading" className="py-24 px-4 sm:px-6 lg:px-8 bg-cinema-900/40 relative border-t border-b border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Sliders className="w-4 h-4" />
            <span>DAVINCI RESOLVE COLOR SCIENCE</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Color Grading Suite & Film Emulation
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Geser slider di bawah untuk melihat transformasi dari rekaman mentah <strong className="text-zinc-200">Flat S-Log3 (kiri)</strong> menjadi hasil akhir <strong className="text-cinema-gold">Cinematic 35mm Grade (kanan)</strong> dengan akurasi saturasi dan kontras kelas festival film.
          </p>

          {/* Scene Switcher Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {scenes.map((scene, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (playClickSound) playClickSound();
                  setActiveScene(idx);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  activeScene === idx
                    ? 'bg-gradient-to-r from-cinema-gold to-amber-500 text-cinema-950 font-bold shadow-glow-gold'
                    : 'bg-cinema-900 text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                {scene.title.split(':')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Split Slider Container */}
        <div className="max-w-5xl mx-auto">
          
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/9] sm:aspect-[2.39/1] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-cinema-gold/40 shadow-2xl bg-black"
          >
            {/* Graded Image (Background Right) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={current.gradedImg}
                alt="Graded Result"
                className="w-full h-full object-cover"
                draggable={false}
              />
              
              {/* Graded Label Badge */}
              <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-cinema-gold/40 text-cinema-gold text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-cinema-gold" />
                <span>REC.709 FILM GRADE</span>
              </div>
            </div>

            {/* Flat LOG Image (Clipped Layer Left) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={current.sourceLog}
                alt="Raw S-Log3"
                className="absolute inset-0 w-full h-full object-cover filter brightness-110 contrast-75 saturate-50"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  maxWidth: 'none'
                }}
                draggable={false}
              />

              {/* Raw LOG Label Badge */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-zinc-700 text-zinc-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-zinc-400" />
                <span>RAW S-LOG3 FLAT</span>
              </div>
            </div>

            {/* Vertical Divider Bar with Grip */}
            <div
              className="absolute top-0 bottom-0 z-30 w-0.5 bg-gradient-to-b from-cinema-gold via-white to-cinema-gold shadow-glow-gold"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-cinema-gold text-cinema-950 flex items-center justify-center shadow-xl border-2 border-white">
                <Sliders className="w-4 h-4 rotate-90" />
              </div>
            </div>

            {/* Quick Toggle Overlay Bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300">
              <button
                onClick={() => setSliderPosition(0)}
                className="hover:text-cinema-gold transition-colors"
              >
                100% Graded
              </button>
              <span className="text-zinc-600">•</span>
              <button
                onClick={() => setSliderPosition(50)}
                className="hover:text-cinema-gold transition-colors"
              >
                Split 50:50
              </button>
              <span className="text-zinc-600">•</span>
              <button
                onClick={() => setSliderPosition(100)}
                className="hover:text-cinema-gold transition-colors"
              >
                100% Raw LOG
              </button>
            </div>

          </div>

          {/* Color Technical Breakdown Card */}
          <div className="mt-6 p-6 rounded-2xl bg-cinema-900 border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
            <div>
              <span className="text-zinc-500 block mb-1">COLOR WORKSPACE TRANSFORM:</span>
              <div className="text-white font-medium flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>{current.colorSpace}</span>
              </div>
            </div>

            <div>
              <span className="text-zinc-500 block mb-1">FILM PRINT EMULATION & LUT:</span>
              <div className="text-cinema-gold font-medium flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-cinema-gold" />
                <span>{current.lutUsed}</span>
              </div>
            </div>

            <div>
              <span className="text-zinc-500 block mb-1">PENDEKATAN SUTRADARA & COLORIST:</span>
              <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                {current.notes}
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

