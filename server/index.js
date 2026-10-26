import express from 'express';
import cors from 'cors';
import { portfolioProfile, awardsList, projectsList, skillsAndGear, testimonials } from './data/portfolioData.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory inquiry storage (persisted during server session)
const inquiries = [];

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Maria Esfera Portfolio API'
  });
});

// Profile & Metadata
app.get('/api/profile', (req, res) => {
  res.json({ success: true, data: portfolioProfile });
});

// Awards & Competitions
app.get('/api/awards', (req, res) => {
  res.json({ success: true, data: awardsList });
});

// Projects Showcase
app.get('/api/projects', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'All') {
    const filtered = projectsList.filter(p => p.category.toLowerCase() === category.toLowerCase());
    return res.json({ success: true, data: filtered });
  }
  res.json({ success: true, data: projectsList });
});

// Skills, Software & Gear
app.get('/api/gear', (req, res) => {
  res.json({ success: true, data: skillsAndGear });
});

// Testimonials
app.get('/api/testimonials', (req, res) => {
  res.json({ success: true, data: testimonials });
});

// Inquiry Submission (Client booking / contact form)
app.post('/api/inquiry', (req, res) => {
  const { name, email, phone, projectType, budget, timeline, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Nama, email, dan pesan wajib diisi.'
    });
  }

  const newInquiry = {
    id: `INQ-${Date.now()}`,
    name,
    email,
    phone: phone || '-',
    projectType: projectType || 'Video Production & Editing',
    budget: budget || 'Flexible',
    timeline: timeline || 'Open',
    message,
    receivedAt: new Date().toISOString()
  };

  inquiries.push(newInquiry);
  console.log(`[New Booking Inquiry Received] from ${name} (${email}) for project: ${projectType}`);

  // Construct a pre-formatted WhatsApp direct message link to Maria Esfera's WhatsApp Business (085640582508)
  const waMessage = 
`*HALO MARIA ESFERA - PENGAJUAN PROYEK BARU*
------------------------------------------
👤 *Nama / Instansi:* ${name}
📧 *Email:* ${email}
📱 *Nomor Kontak / WA:* ${phone || '-'}
🎬 *Kategori Proyek:* ${projectType || 'Video Production'}
💰 *Estimasi Anggaran:* ${budget || 'Fleksibel'}
🗓️ *Target Timeline:* ${timeline || 'Fleksibel'}

📝 *Brief & Kebutuhan Visual:*
"${message}"
------------------------------------------
_Dikirim via Formulir Portfolio Resmi Maria Esfera_`;

  const waText = encodeURIComponent(waMessage);
  const waUrl = `https://wa.me/6285640582508?text=${waText}`;

  res.status(201).json({
    success: true,
    message: 'Terima kasih! Pesan dan pengajuan proyek Anda telah berhasil kami terima.',
    inquiryId: newInquiry.id,
    whatsappRedirectUrl: waUrl
  });
});

app.listen(PORT, () => {
  console.log(`🎬 Maria Esfera Portfolio Backend running on http://localhost:${PORT}`);
});

