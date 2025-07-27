'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [activeUsers, setActiveUsers] = useState(0);
  const [toolsCreated, setToolsCreated] = useState(0);

  // Counter animation effect
  useEffect(() => {
    const animateCounter = (target: number, setter: (value: number) => void) => {
      let current = 0;
      const increment = target / 60; // Animation over ~1 second
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 16); // ~60fps
    };

    const timer = setTimeout(() => {
      animateCounter(450, setActiveUsers);
      animateCounter(24, setToolsCreated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-surface opacity-80"></div>
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-tight">
            Satu Sapa
            <span className="align-middle inline-block ml-2 text-4xl md:text-6xl lg:text-7xl select-none" aria-label="Waving Hand" title="Sapa!">
              👋
            </span>
            , Bisa Buka Masa Depan.
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-text-secondary mb-4 max-w-3xl mx-auto leading-relaxed">
            Di era digital seperti sekarang, satu langkah kecil bisa membawa perubahan besar.
            Mulai dari sekadar menyapa dunia digital. kami bantu kamu menjelajah lebih jauh. Karena kami percaya, siapa pun kamu, latar belakang apapun, semua bisa melek teknologi dan tumbuh bersama.
          </p>
          
          <div className="mb-8">
            <span className="inline-block bg-primary-50 text-primary font-semibold px-4 py-2 rounded-lg shadow-sm text-base md:text-lg">
              💡 Jangan tunggu nanti. Masa depanmu bisa dimulai dari satu sapa hari ini.
            </span>
          </div>
          
          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary text-lg px-8 py-4 shadow-cta hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              🚀 Coba Tools Gratis
            </button>
            <button className="btn-secondary text-lg px-8 py-4 shadow-cta hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              👀 Lihat Showcase Produk
            </button>
          </div>
          
          {/* Trust Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {activeUsers}
              </div>
              <div className="text-sm text-text-secondary">Pengguna Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {toolsCreated}
              </div>
              <div className="text-sm text-text-secondary">Tools Dibuat Hari Ini</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-text-secondary">Bisnis Lokal Partner</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>
  );
}
