import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, Clapperboard, Sliders, Film } from 'lucide-react';

export default function ShowreelModal({ isOpen, onClose, playClickSound }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [aspectRatio, setAspectRatio] = useState('2.39'); // '16:9', '2.39', '9:16'
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      document.body.style.overflow = 'unset';
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (playClickSound) playClickSound();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (playClickSound) playClickSound();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (timeInSeconds) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    const frames = Math.floor((timeInSeconds % 1) * 24);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}:${String(frames).padStart(2, '0')}`;
  };

  const handleSpeedChange = (rate) => {
    if (playClickSound) playClickSound();
    setPlaybackRate(rate);
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
      
      {/* Container Frame with Director Monitor Aesthetics */}
      <div className="relative w-full max-w-5xl bg-cinema-950 border border-cinema-gold/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Top Monitor Header HUD */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-cinema-900/90 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-950/80 border border-red-500/40 text-red-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              DIRECTOR'S REEL
            </div>
            <span className="text-zinc-400 hidden sm:inline">PROD: MARIA ESFERA</span>
            <span className="text-zinc-600 hidden md:inline">|</span>
            <span className="text-cinema-gold hidden md:inline">S-LOG3 TO 35MM FILM PRINT</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Aspect Ratio Switcher */}
            <div className="flex items-center bg-black/50 rounded-lg p-0.5 border border-white/10 text-[10px]">
              <button 
                onClick={() => { setAspectRatio('16:9'); if (playClickSound) playClickSound(); }}
                className={`px-2 py-1 rounded transition-colors ${aspectRatio === '16:9' ? 'bg-cinema-gold text-cinema-950 font-bold' : 'text-zinc-400'}`}
              >
                16:9
              </button>
              <button 
                onClick={() => { setAspectRatio('2.39'); if (playClickSound) playClickSound(); }}
                className={`px-2 py-1 rounded transition-colors ${aspectRatio === '2.39' ? 'bg-cinema-gold text-cinema-950 font-bold' : 'text-zinc-400'}`}
              >
                2.39:1 CinemaScope
              </button>
              <button 
                onClick={() => { setAspectRatio('9:16'); if (playClickSound) playClickSound(); }}
                className={`px-2 py-1 rounded transition-colors ${aspectRatio === '9:16' ? 'bg-cinema-gold text-cinema-950 font-bold' : 'text-zinc-400'}`}
              >
                9:16 Reel
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                if (playClickSound) playClickSound();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Canvas & Viewfinder Screen */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden flex-1 min-h-[300px] sm:min-h-[460px]">
          
          {/* Viewfinder Crosshairs and Framing Overlays */}
          <div className="absolute inset-0 pointer-events-none z-10 p-6 flex flex-col justify-between opacity-70">
            {/* 4 Corners */}
            <div className="flex justify-between">
              <div className="w-6 h-6 border-t-2 border-l-2 border-cinema-gold/60" />
              <div className="w-6 h-6 border-t-2 border-r-2 border-cinema-gold/60" />
            </div>
            
            {/* Center Crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center opacity-40">
              <div className="w-full h-px bg-white" />
              <div className="h-full w-px bg-white absolute" />
            </div>

            <div className="flex justify-between">
              <div className="w-6 h-6 border-b-2 border-l-2 border-cinema-gold/60" />
              <div className="w-6 h-6 border-b-2 border-r-2 border-cinema-gold/60" />
            </div>
          </div>

          {/* Camera Info HUD Overlay */}
          <div className="absolute top-4 left-6 z-10 text-[11px] font-mono text-zinc-300 pointer-events-none drop-shadow-md hidden sm:block space-y-0.5">
            <div>CAM: SONY FX3 CINEMA</div>
            <div>SHUTTER: 1/48 (180°)</div>
            <div>IRIS: T2.1 | ISO: 800</div>
          </div>

          <div className="absolute top-4 right-6 z-10 text-[11px] font-mono text-zinc-300 pointer-events-none drop-shadow-md text-right hidden sm:block space-y-0.5">
            <div className="text-cinema-gold font-bold">TC: {formatTime(currentTime)}</div>
            <div>FPS: 23.976</div>
            <div>GAMMA: S-GAMUT3.CINE</div>
          </div>

          {/* The Video Element */}
          <div 
            className={`transition-all duration-500 overflow-hidden relative flex items-center justify-center ${
              aspectRatio === '2.39' ? 'w-full aspect-[2.39/1]' : 
              aspectRatio === '9:16' ? 'h-full aspect-[9/16]' : 'w-full aspect-video'
            }`}
          >
            <video
              ref={videoRef}
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
              poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-full object-cover cursor-pointer"
              onTimeUpdate={handleTimeUpdate}
              onClick={togglePlay}
              playsInline
              loop
            />

            {/* Play Button Overlay when Paused */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs transition-opacity"
              >
                <div className="w-16 h-16 rounded-full bg-cinema-gold/90 text-cinema-950 flex items-center justify-center pl-1 shadow-glow-gold hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-cinema-950" />
                </div>
              </button>
            )}
          </div>

        </div>

        {/* Video Scrubber & Playback Controls */}
        <div className="p-4 bg-cinema-900 border-t border-white/10 space-y-3">
          
          {/* Progress Timeline Scrubber */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-400 min-w-[55px]">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-cinema-gold"
            />
            <span className="text-xs font-mono text-zinc-400 min-w-[55px] text-right">
              {formatTime(duration)}
            </span>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            
            {/* Left Controls: Play, Mute */}
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white transition-colors flex items-center gap-1.5"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                <span className="font-mono">{isPlaying ? "PAUSE" : "PLAY"}</span>
              </button>

              <button
                onClick={toggleMute}
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {/* Speed Switcher */}
              <div className="hidden sm:flex items-center gap-1 bg-black/40 px-2 py-1 rounded border border-zinc-800 font-mono text-[11px]">
                <span className="text-zinc-500">SPEED:</span>
                {[0.5, 1, 1.5].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => handleSpeedChange(speed)}
                    className={`px-1.5 py-0.5 rounded ${playbackRate === speed ? 'bg-cinema-gold text-cinema-950 font-bold' : 'text-zinc-400 hover:text-white'}`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            </div>

            {/* Center: Audio VU Meter simulation */}
            <div className="hidden md:flex items-center gap-1">
              <span className="text-[10px] font-mono text-zinc-500 mr-1">CH1/CH2:</span>
              <div className="flex gap-0.5 h-3 items-end">
                <span className="w-1 h-2 bg-emerald-500 rounded-xs animate-pulse" />
                <span className="w-1 h-3 bg-emerald-500 rounded-xs animate-pulse" />
                <span className="w-1 h-2.5 bg-yellow-500 rounded-xs animate-pulse" />
                <span className="w-1 h-1.5 bg-red-500 rounded-xs animate-pulse" />
              </div>
            </div>

            {/* Right: Director's Note */}
            <div className="text-zinc-400 text-[11px] font-mono">
              Showreel: Compilation of Documentaries & National Campaigns
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

