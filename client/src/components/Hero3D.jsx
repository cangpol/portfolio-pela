import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Sparkles, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Play, Award, ArrowDown, Sparkles as SparklesIcon, CheckCircle2 } from 'lucide-react';

// 3D Cinema Anamorphic Lens Rig
function CinemaLensModel({ mousePosition }) {
  const groupRef = useRef();
  const innerGlassRef = useRef();
  const flareRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth lerp to mouse position
    const targetX = (mousePosition.current.x * Math.PI) / 8;
    const targetY = (mousePosition.current.y * Math.PI) / 10;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX + 0.3, delta * 3);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY + 0.1, delta * 3);
    
    // Constant subtle idle rotation
    groupRef.current.rotation.z += delta * 0.15;

    if (flareRef.current) {
      flareRef.current.rotation.z -= delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.2}>
      {/* Outer Anodized Cinema Lens Barrel */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.5, 1.45, 1.6, 64, 1, true]} />
        <meshStandardMaterial 
          color="#0F1219" 
          metalness={0.9} 
          roughness={0.25} 
          side={THREE.DoubleSide} 
        />
      </mesh>

      {/* Gold Accent Ring (Cinema Prime Identity) */}
      <mesh position={[0, 0.45, 0]}>
        <torusGeometry args={[1.52, 0.04, 32, 100]} />
        <meshStandardMaterial color="#E5A93C" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* Focus & Aperture Gear Teeth Ring */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.55, 1.55, 0.5, 48, 1, true]} />
        <meshStandardMaterial color="#1E2330" metalness={0.8} roughness={0.4} />
      </mesh>

      {/* Blue Anamorphic Coated Front Glass Element */}
      <mesh ref={innerGlassRef} position={[0, 0.65, 0]}>
        <sphereGeometry args={[1.4, 64, 32, 0, Math.PI * 2, 0, Math.PI * 0.45]} />
        <meshPhysicalMaterial
          color="#0EA5E9"
          emissive="#0369A1"
          emissiveIntensity={0.2}
          roughness={0.05}
          metalness={0.1}
          transmission={0.88}
          ior={1.62}
          thickness={0.5}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Deep Inner Optical Core */}
      <mesh position={[0, -0.3, 0]}>
        <sphereGeometry args={[1.0, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.35]} />
        <meshStandardMaterial
          color="#E5A93C"
          emissive="#D97706"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Glowing Anamorphic Flare Shard Rings */}
      <group ref={flareRef} position={[0, 0.72, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.1, 1.42, 64]} />
          <meshBasicMaterial 
            color="#38BDF8" 
            transparent 
            opacity={0.35} 
            side={THREE.DoubleSide} 
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.7, 0.95, 64]} />
          <meshBasicMaterial 
            color="#F59E0B" 
            transparent 
            opacity={0.25} 
            side={THREE.DoubleSide} 
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>

      {/* Outer Floating Optical Shards */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 2.0;
        return (
          <mesh 
            key={i} 
            position={[Math.cos(angle) * radius, Math.sin(angle) * 0.3, Math.sin(angle) * radius]}
            rotation={[Math.PI / 4, angle, 0]}
          >
            <boxGeometry args={[0.08, 0.25, 0.08]} />
            <meshStandardMaterial
              color="#E5A93C"
              emissive="#E5A93C"
              emissiveIntensity={0.8}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// 3D Canvas Container
function Scene3D({ mousePosition }) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      className="w-full h-full pointer-events-none sm:pointer-events-auto"
    >
      <ambientLight intensity={0.6} />
      
      {/* Warm Golden Key Spotlight */}
      <spotLight 
        position={[4, 5, 4]} 
        intensity={2.2} 
        color="#FDE68A" 
        angle={0.6} 
        penumbra={0.8} 
      />
      
      {/* Cyan Anamorphic Rim Light */}
      <pointLight position={[-4, -2, -2]} intensity={2.5} color="#38BDF8" />
      
      {/* Golden Accent Fill Light */}
      <pointLight position={[0, -3, 2]} intensity={1.2} color="#D97706" />

      {/* Floating 3D Rig with Smooth Micro Floating */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
        <CinemaLensModel mousePosition={mousePosition} />
      </Float>

      {/* Golden & Cyan Cinematic Dust Particles */}
      <Sparkles count={80} scale={6} size={2.5} speed={0.4} opacity={0.6} color="#E5A93C" />
      <Sparkles count={50} scale={7} size={2.0} speed={0.3} opacity={0.4} color="#38BDF8" />
    </Canvas>
  );
}

export default function Hero3D({ onOpenShowreel, playClickSound }) {
  const mousePosition = useRef({ x: 0, y: 0 });
  const [hasWebGL, setHasWebGL] = useState(true);

  // Check WebGL availability
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mousePosition.current = {
      x: (clientX / innerWidth) * 2 - 1,
      y: (clientY / innerHeight) * 2 - 1
    };
  };

  return (
    <section 
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden cinema-grain"
    >
      {/* Ambient Radial Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-amber-600/15 via-cinema-gold/10 to-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Headline, Bio & Credential Badges (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          {/* Top Pill Badges */}
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cinema-gold/10 text-cinema-gold border border-cinema-gold/30">
              <SparklesIcon className="w-3.5 h-3.5" />
              S.Tr.I.Kom. • STMM MMTC Yogyakarta
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
              <Award className="w-3.5 h-3.5" />
              Juara 1 Videografis Nasional Kementan
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] tracking-tight">
            Crafting Visual Stories That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cinema-gold via-amber-200 to-amber-500">
              Resonate Through Time
            </span>
          </h1>

          {/* Subtitle / Professional Statement */}
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            Portfolio resmi <strong className="text-white font-semibold">Maria Esfera Dyah Untari</strong>. Mengolah visual dokumenter humanis, tayangan televisi dinamis, dan grading warna sinematik dengan ritme visual presisi.
          </p>

          {/* Key Directing Highlights & Stats Ribbon */}
          <div className="grid grid-cols-3 gap-3 py-4 max-w-lg mx-auto lg:mx-0">
            <div className="p-3 rounded-xl bg-cinema-900/60 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-display font-bold text-cinema-gold">4+</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 font-mono mt-0.5">Penghargaan Lomba</div>
            </div>
            <div className="p-3 rounded-xl bg-cinema-900/60 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">5</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 font-mono mt-0.5">Karya Utama</div>
            </div>
            <div className="p-3 rounded-xl bg-cinema-900/60 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-display font-bold text-cyan-400">500+</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 font-mono mt-0.5">Jam Color Grading</div>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            
            {/* Showreel Button */}
            <button
              onClick={() => {
                if (playClickSound) playClickSound();
                onOpenShowreel();
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-cinema-gold via-amber-400 to-amber-500 text-cinema-950 flex items-center justify-center gap-3 shadow-glow-gold hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="w-6 h-6 rounded-full bg-cinema-950/20 flex items-center justify-center">
                <Play className="w-3.5 h-3.5 fill-cinema-950 text-cinema-950 ml-0.5" />
              </div>
              <span>Putar Director Showreel</span>
            </button>

            {/* Explore Works Link */}
            <a
              href="#projects"
              onClick={() => playClickSound && playClickSound()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm bg-cinema-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 flex items-center justify-center gap-2 transition-all"
            >
              <span>Jelajahi Karya & Proyek</span>
              <ArrowDown className="w-4 h-4 text-cinema-gold animate-bounce" />
            </a>

          </div>

          {/* Availability Status */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-zinc-400 pt-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
            <span>Terbuka untuk kolaborasi Video Production, Dokumenter, & Post-Production</span>
          </div>

        </div>

        {/* Right Column: Interactive 3D Canvas (5 cols) */}
        <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] xl:h-[540px] flex items-center justify-center">
          
          {/* Circular Cinematic HUD Frame behind 3D */}
          <div className="absolute inset-4 rounded-full border border-dashed border-cinema-gold/20 animate-spin-slow pointer-events-none" />
          <div className="absolute inset-10 rounded-full border border-white/5 pointer-events-none" />

          {/* 3D Motion Canvas */}
          {hasWebGL ? (
            <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center text-zinc-500 text-xs font-mono">
                  Loading 3D Cinema Optics...
                </div>
              }>
                <Scene3D mousePosition={mousePosition} />
              </Suspense>
              
              {/* Interactive Cue Tag */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 border border-white/10 text-[10px] font-mono text-zinc-400 backdrop-blur-sm pointer-events-none flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cinema-gold" />
                <span>3D Interactive Anamorphic Lens • Drag to Inspect</span>
              </div>
            </div>
          ) : (
            // Fallback for non-WebGL devices
            <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-cinema-gold/30 via-amber-500/20 to-cyan-500/30 flex items-center justify-center border border-cinema-gold/40 shadow-glow-gold animate-pulse">
              <div className="w-52 h-52 rounded-full bg-cinema-900 border border-white/20 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-cinema-950 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-cinema-gold font-display font-bold text-lg">35mm</span>
                  <span className="text-[10px] font-mono text-zinc-400">ANAMORPHIC</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </section>
  );
}

