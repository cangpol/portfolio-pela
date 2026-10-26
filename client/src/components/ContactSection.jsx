import React, { useState } from 'react';
import { Mail, MessageCircle, Instagram, Send, Sparkles, CheckCircle2, Clock, Calendar, DollarSign, AlertCircle, Linkedin } from 'lucide-react';
import { portfolioProfile } from '../data/portfolioData';

export default function ContactSection({ playClickSound }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Documentary Film',
    budget: '15 - 30 Juta',
    timeline: '1 Bulan',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const projectTypes = [
    'Documentary Film & Diary Storytelling',
    'Broadcast & TV Magazine Show',
    'Commercial & Brand Video Campaign',
    'Color Grading Suite (DaVinci Resolve)',
    'Full Video Editing & Post-Production',
    'Event & Wedding Cinematic Reel'
  ];

  const budgetRanges = [
    '5 - 15 Juta IDR',
    '15 - 30 Juta IDR',
    '30 - 50 Juta IDR',
    '> 50 Juta IDR (Large Campaign)',
    'Fleksibel / Diskusi Terbuka'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (playClickSound) playClickSound();
    setLoading(true);
    setErrorMsg('');

    // Pre-format WhatsApp Business message with all input fields
    const waMessage = 
`*HALO MARIA ESFERA - PENGAJUAN PROYEK BARU*
------------------------------------------
👤 *Nama / Instansi:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Nomor Kontak / WA:* ${formData.phone || '-'}
🎬 *Kategori Proyek:* ${formData.projectType}
💰 *Estimasi Anggaran:* ${formData.budget}
🗓️ *Target Timeline:* ${formData.timeline}

📝 *Brief & Kebutuhan Visual:*
"${formData.message}"
------------------------------------------
_Dikirim via Formulir Portfolio Resmi Maria Esfera_`;

    const waUrl = `https://wa.me/6285640582508?text=${encodeURIComponent(waMessage)}`;

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      // Automatically open WhatsApp with the formatted message
      window.open(waUrl, '_blank');

      if (response.ok && data.success) {
        setSuccessResponse({
          ...data,
          whatsappRedirectUrl: waUrl
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Documentary Film',
          budget: '15 - 30 Juta',
          timeline: '1 Bulan',
          message: ''
        });
      } else {
        // Fallback open WhatsApp directly
        setSuccessResponse({
          success: true,
          message: 'Pengajuan proyek Anda telah tercatat dan pesan WhatsApp sedang dibuka.',
          whatsappRedirectUrl: waUrl
        });
      }
    } catch (err) {
      // Direct WhatsApp fallback
      window.open(waUrl, '_blank');
      setSuccessResponse({
        success: true,
        message: 'Pengajuan proyek Anda telah tercatat! Anda dapat melanjutkan obrolan langsung via WhatsApp Business.',
        whatsappRedirectUrl: waUrl
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-cinema-900/80 relative border-t border-white/10">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cinema-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cinema-gold/10 text-cinema-gold border border-cinema-gold/30">
            <Mail className="w-4 h-4" />
            <span>PROJECT INQUIRY & BOOKING</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Mari Ciptakan Karya Visual Berikutnya
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Diskusikan visi proyek film dokumenter, iklan komersial, penyuntingan video, atau grading warna Anda. Kami siap merespons brief Anda dengan cepat.
          </p>
        </div>

        {/* 2 Column: Form (Left 7) vs Quick Contact Cards (Right 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-cinema-950 p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
            
            {successResponse ? (
              <div className="p-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-white">
                    Pesan Berhasil Terkirim!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    {successResponse.message}
                  </p>
                </div>

                {successResponse.whatsappRedirectUrl && (
                  <div className="pt-2">
                    <a
                      href={successResponse.whatsappRedirectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-cinema-950 font-bold text-sm shadow-lg transition-transform hover:scale-105"
                    >
                      <MessageCircle className="w-5 h-5 fill-cinema-950" />
                      <span>Lanjutkan Chat via WhatsApp Sekarang</span>
                    </a>
                  </div>
                )}

                <button
                  onClick={() => setSuccessResponse(null)}
                  className="text-xs font-mono text-zinc-400 hover:text-white underline block mx-auto pt-4"
                >
                  Kirim pengajuan proyek lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Nama Lengkap / Instansi *</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso / PT Kreatif Media"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cinema-900 border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-cinema-gold"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Alamat Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="budi@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cinema-900 border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-cinema-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp / Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Nomor WhatsApp / Kontak</label>
                    <input
                      type="tel"
                      placeholder="0812xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cinema-900 border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-cinema-gold"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Kategori Proyek</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cinema-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cinema-gold cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Budget */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Estimasi Anggaran</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cinema-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cinema-gold cursor-pointer"
                    >
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Ekspektasi Timeline / Deadline</label>
                    <input
                      type="text"
                      placeholder="Contoh: 2-3 Minggu / Bulan Depan"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cinema-900 border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-cinema-gold"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-300">Brief Proyek & Kebutuhan Visual *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Ceritakan gambaran cerita, referensi visual, durasi yang diinginkan, atau format deliverables..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-cinema-900 border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-cinema-gold resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cinema-gold via-amber-400 to-amber-500 text-cinema-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-gold hover:brightness-110 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Mengirim Data...' : 'Kirim Pengajuan Proyek'}</span>
                </button>

              </form>
            )}

          </div>

          {/* Right Direct Contact & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl text-white">
                Kontak Langsung & Jadwal Diskusi
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Lebih menyukai komunikasi instan? Hubungi langsung melalui WhatsApp untuk konsultasi cepat mengenai ketersediaan jadwal shooting atau timeline post-production.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6285640582508?text=Halo%20Maria%20Esfera,%20saya%20tertarik%20berkolaborasi%20untuk%20proyek%20video."
                target="_blank"
                rel="noreferrer"
                onClick={() => playClickSound && playClickSound()}
                className="p-4 rounded-2xl bg-cinema-950 border border-emerald-500/30 hover:border-emerald-500/80 transition-all flex items-center justify-between group shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 fill-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                      WhatsApp Bisnis
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      0856-4058-2508 (Respon Cepat)
                    </div>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-mono">Chat Sekarang →</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://id.linkedin.com/in/mariaesfera"
                target="_blank"
                rel="noreferrer"
                onClick={() => playClickSound && playClickSound()}
                className="p-4 rounded-2xl bg-cinema-950 border border-[#0A66C2]/30 hover:border-[#0A66C2]/80 transition-all flex items-center justify-between group shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/20 text-[#0A66C2] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-[#0A66C2] transition-colors">
                      LinkedIn Professional
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      in/mariaesfera
                    </div>
                  </div>
                </div>
                <span className="text-xs text-[#0A66C2] font-mono">Hubungkan Profil →</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/gaadadekengan"
                target="_blank"
                rel="noreferrer"
                onClick={() => playClickSound && playClickSound()}
                className="p-4 rounded-2xl bg-cinema-950 border border-pink-500/30 hover:border-pink-500/80 transition-all flex items-center justify-between group shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-pink-400 transition-colors">
                      Instagram Resmi
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      @gaadadekengan
                    </div>
                  </div>
                </div>
                <span className="text-xs text-pink-400 font-mono">Follow & DM →</span>
              </a>

              {/* Email */}
              <a
                href="mailto:maria.esfera.creative@gmail.com"
                onClick={() => playClickSound && playClickSound()}
                className="p-4 rounded-2xl bg-cinema-950 border border-cinema-gold/30 hover:border-cinema-gold/80 transition-all flex items-center justify-between group shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cinema-gold/20 text-cinema-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-cinema-gold transition-colors">
                      Email Korespondensi
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      maria.esfera.creative@gmail.com
                    </div>
                  </div>
                </div>
                <span className="text-xs text-cinema-gold font-mono">Kirim Surel →</span>
              </a>
            </div>

            {/* Production Notice */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-[11px] font-mono text-zinc-400 space-y-1">
              <span className="text-cinema-gold block font-bold">LOKASI & JANGKAUAN PRODUKSI:</span>
              <p>Berdomisili di Yogyakarta & Jakarta. Bersedia melakukan perjalanan dinas untuk produksi lapangan di seluruh penjuru Indonesia.</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

