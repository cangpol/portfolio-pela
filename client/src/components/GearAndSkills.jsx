import React from 'react';
import { Cpu, Camera, Film, Sliders, Mic, Monitor, CheckCircle2 } from 'lucide-react';
import { skillsAndGear } from '../data/portfolioData';

export default function GearAndSkills() {
  return (
    <section id="gear" className="py-24 px-4 sm:px-6 lg:px-8 bg-cinema-900/50 relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cinema-gold/10 text-cinema-gold border border-cinema-gold/30">
            <Cpu className="w-4 h-4" />
            <span>POST-PRODUCTION & CINEMA HARDWARE</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Peralatan Produksi & Software Suite
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Didukung oleh ekosistem perangkat lunak pascaproduksi berstandar industri penyiaran serta peralatan kamera sinema berspesifikasi tinggi.
          </p>
        </div>

        {/* 2 Column Grid: Software Mastery vs Camera & Glass */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Column: Software Suites & Pipelines */}
          <div className="rounded-3xl bg-cinema-950 p-8 border border-white/10 space-y-6 shadow-cinema-card">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-xl bg-cinema-gold/20 text-cinema-gold border border-cinema-gold/30">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">Software & Digital Workstations</h3>
                <p className="text-xs font-mono text-zinc-400">Post-Production, Color, Audio & VFX</p>
              </div>
            </div>

            <div className="space-y-5">
              {skillsAndGear.software.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-white font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cinema-gold" />
                      {item.name}
                    </span>
                    <span className="text-cinema-gold">{item.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 via-cinema-gold to-yellow-300 transition-all duration-1000 shadow-glow-gold"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Physical Production Gear & Optics */}
          <div className="rounded-3xl bg-cinema-950 p-8 border border-white/10 space-y-6 shadow-cinema-card">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Camera className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">Cinema Gear & Field Equipment</h3>
                <p className="text-xs font-mono text-zinc-400">Production Rigs, Glass, Lighting & Audio</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsAndGear.camerasAndGlass.map((gear, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-cinema-900 border border-white/5 hover:border-cyan-500/30 transition-colors space-y-1"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{gear.name}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 font-mono leading-relaxed pl-5">
                    {gear.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Quality Standard Badge */}
            <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-zinc-400 flex items-center justify-between">
              <span>Delivery Format: 4K UHD / DCI 24FPS / ProRes 422 HQ / H.265</span>
              <span className="text-emerald-400">● Broadcast Ready</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

