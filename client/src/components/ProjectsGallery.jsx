import React, { useState } from 'react';
import { Film, Play, Eye, Clapperboard, Clock, Video, Cpu, Sparkles, X, ChevronRight, Award } from 'lucide-react';
import { projectsList } from '../data/portfolioData';

export default function ProjectsGallery({ playClickSound, onPlayVideo }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Dokumenter TV', 'Program Televisi', 'Videografis Nasional', 'Kompetisi Profil'];

  const filteredProjects = activeCategory === 'All'
    ? projectsList
    : projectsList.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  const handleProjectClick = (project) => {
    if (playClickSound) playClickSound();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-cinema-950 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cinema-gold/10 text-cinema-gold border border-cinema-gold/30">
              <Film className="w-3.5 h-3.5" />
              <span>CURATED WORKS & PRODUCTIONS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Eksplorasi Karya Sinematik & Program Televisi
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Koleksi proyek penyutradaraan, videografi komersial, dan pascaproduksi film dokumenter yang dikurasi dengan presisi naratif dan standar visual tertinggi.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  if (playClickSound) playClickSound();
                  setActiveCategory(cat);
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-cinema-gold text-cinema-950 font-bold shadow-glow-gold'
                    : 'bg-cinema-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="group relative rounded-2xl bg-cinema-900 border border-white/10 hover:border-cinema-gold/50 overflow-hidden shadow-cinema-card transition-all duration-500 transform hover:-translate-y-2 cursor-pointer flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-cinema-950/20 to-transparent" />

                {/* Aspect Ratio & Duration Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                    {project.aspectRatio}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cinema-gold" />
                    {project.duration}
                  </span>
                </div>

                {/* Award Badge if Present */}
                {project.awardBadge && (
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-amber-500/90 text-cinema-950 text-[10px] font-mono font-bold shadow-lg flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    <span>WINNER</span>
                  </div>
                )}

                {/* Hover Play Icon Cue */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-xs">
                  <div className="w-14 h-14 rounded-full bg-cinema-gold text-cinema-950 flex items-center justify-center pl-1 shadow-glow-gold transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-cinema-950" />
                  </div>
                </div>

                {/* Color Palette Swatches on Bottom Right */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/60 p-1 rounded-md border border-white/10 backdrop-blur-xs">
                  {project.colorPalette.map((color, idx) => (
                    <span 
                      key={idx} 
                      className="w-2.5 h-2.5 rounded-full border border-black/40" 
                      style={{ backgroundColor: color }} 
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-cinema-gold mb-1.5">
                    <span>{project.category}</span>
                    <span className="text-zinc-500">{project.year}</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-cinema-gold transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <div className="text-xs text-zinc-400 font-mono mt-1 mb-3">
                    Peran: <strong className="text-zinc-200">{project.role}</strong>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {project.synopsis}
                  </p>
                </div>

                {/* Equipment & Case Study Trigger */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span className="flex items-center gap-1 text-[11px] text-zinc-500">
                    <Cpu className="w-3 h-3" />
                    {project.gearUsed[0]}
                  </span>

                  <span className="text-cinema-gold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Detail Kasus Proyek <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-cinema-950 border border-cinema-gold/40 rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-cinema-900 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cinema-gold/15 text-cinema-gold border border-cinema-gold/30">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono text-zinc-400">{selectedProject.year} • {selectedProject.format}</span>
              </div>
              <button
                onClick={() => {
                  if (playClickSound) playClickSound();
                  setSelectedProject(null);
                }}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Media Preview Box */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-white/10 group">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => {
                      if (playClickSound) playClickSound();
                      setSelectedProject(null);
                      if (onPlayVideo) onPlayVideo(selectedProject);
                    }}
                    className="px-6 py-3 rounded-full bg-cinema-gold text-cinema-950 font-bold text-xs flex items-center gap-2 shadow-glow-gold hover:scale-105 transition-transform"
                  >
                    <Play className="w-4 h-4 fill-cinema-950" />
                    <span>Putar Cuplikan Video ({selectedProject.duration})</span>
                  </button>
                </div>
              </div>

              {/* Title & Role */}
              <div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-mono text-cinema-gold mt-1">
                  Kredit Peran: {selectedProject.role}
                </p>
              </div>

              {/* Synopsis */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Sinopsis Naratif:</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedProject.synopsis}
                </p>
              </div>

              {/* Director's Approach / Statement */}
              <div className="p-4 rounded-xl bg-cinema-900 border border-cinema-gold/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cinema-gold font-bold">
                  <Clapperboard className="w-4 h-4" />
                  <span>PENDEKATAN SUTRADARA & TEKNIK EDITING</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                  "{selectedProject.directorNote}"
                </p>
              </div>

              {/* Production Gear & Post Pipeline */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Peralatan Produksi & Software Suite:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.gearUsed.map((gear, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-200"
                    >
                      {gear}
                    </span>
                  ))}
                </div>
              </div>

              {/* Color Grading Palette */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Palet Warna (Color Science):</h4>
                <div className="flex items-center gap-3">
                  {selectedProject.colorPalette.map((col, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md border border-white/20" style={{ backgroundColor: col }} />
                      <span className="text-[11px] font-mono text-zinc-400">{col}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-cinema-900 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">
                Studio Quality Standard • 4K DCI Delivery
              </span>
              <button
                onClick={() => {
                  if (playClickSound) playClickSound();
                  setSelectedProject(null);
                }}
                className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

