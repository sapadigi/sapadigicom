'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Apakah tools SapaTools benar-benar gratis?",
      answer: "Ya! Bio Link Generator dan beberapa template dasar IG benar-benar gratis selamanya. Untuk fitur premium seperti custom domain, analytics mendalam, dan template eksklusif, tersedia paket berbayar mulai dari Rp 99K/bulan."
    },
    {
      question: "Siapa yang cocok menggunakan layanan Sapadigi?",
      answer: "Sapadigi cocok untuk mahasiswa yang ingin belajar digital marketing, pemilik UMKM yang butuh presence online, freelancer yang perlu tools profesional dengan budget terbatas, dan siapa saja yang merasa overwhelmed dengan tools digital yang rumit."
    },
    {
      question: "Bisakah saya customize template sesuai brand saya?",
      answer: "Tentu saja! Semua template bisa disesuaikan dengan warna brand, logo, dan konten Anda. Bahkan di versi gratis, Anda sudah bisa mengganti warna dan teks. Untuk customization lebih advanced, tersedia di paket premium."
    },
    {
      question: "Bagaimana cara mendapatkan support jika ada masalah?",
      answer: "Kami menyediakan support dalam bahasa Indonesia melalui WhatsApp, email, dan live chat. Tim support kami online Senin-Jumat 09:00-17:00 WIB. Plus, ada knowledge base lengkap dengan tutorial video dalam bahasa Indonesia."
    },
    {
      question: "Apakah data saya aman di platform Sapadigi?",
      answer: "Keamanan data adalah prioritas utama kami. Semua data dienkripsi dengan standar SSL, server berlokasi di Indonesia untuk compliance dengan regulasi lokal, dan kami tidak pernah membagikan data personal Anda ke pihak ketiga tanpa izin."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary mb-6">
            Pertanyaan yang Sering <span className="text-primary">Ditanyakan</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Temukan jawaban untuk pertanyaan umum tentang layanan dan tools kami.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <button 
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-secondary">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-primary transform transition-transform ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-text-secondary">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
