'use client';

import { useState } from 'react';

export default function SapaToolsSection() {
  const [bioPreview, setBioPreview] = useState({
    name: '',
    bio: '',
    link: '',
    showPreview: false
  });

  const generateDemo = () => {
    const name = (document.getElementById('demo-name') as HTMLInputElement)?.value || 'Warung Makan Ibu Sari';
    const bio = (document.getElementById('demo-bio') as HTMLInputElement)?.value || 'Makanan rumahan terenak di Jakarta';
    const link = (document.getElementById('demo-link') as HTMLInputElement)?.value || 'https://wa.me/628123456789';
    
    setBioPreview({
      name,
      bio,
      link,
      showPreview: true
    });
  };

  const selectTemplate = (templateId: number) => {
    // Template selection logic can be added here
    console.log(`Template ${templateId} selected`);
  };

  return (
    <section className="py-20 bg-white" id="tools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary mb-6">
            Coba <span className="text-primary">SapaTools</span> Sekarang Juga!
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Rasakan langsung kemudahan tools kami. Tidak perlu daftar, tidak perlu bayar. Langsung pakai!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Link Demo */}
          <div className="bg-linear-to-br from-primary-50 to-primary-100 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="font-headline text-2xl font-semibold text-secondary mb-4">Bio Link Generator</h3>
              <p className="text-text-secondary">Buat bio link profesional dalam 30 detik</p>
            </div>
            
            {/* Interactive Demo */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Nama/Brand</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Warung Makan Ibu Sari" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                    id="demo-name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Bio Singkat</label>
                  <input 
                    type="text" 
                    placeholder="Makanan rumahan terenak di Jakarta" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                    id="demo-bio" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Link Utama</label>
                  <input 
                    type="text" 
                    placeholder="https://wa.me/628123456789" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                    id="demo-link" 
                  />
                </div>
                <button className="w-full btn-primary" onClick={generateDemo}>
                  🚀 Generate Bio Link
                </button>
              </div>
              
              {/* Preview */}
              {bioPreview.showPreview && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-200 rounded-full mx-auto mb-3"></div>
                    <h4 className="font-semibold text-secondary">{bioPreview.name}</h4>
                    <p className="text-sm text-text-secondary mb-4">{bioPreview.bio}</p>
                    <a 
                      href={bioPreview.link} 
                      className="block w-full bg-primary text-white py-2 rounded-lg text-center hover:bg-primary-600 transition-standard"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link Utama
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* IG Template Demo */}
          <div className="bg-linear-to-br from-accent-50 to-accent-100 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="font-headline text-2xl font-semibold text-secondary mb-4">IG Template Preview</h3>
              <p className="text-text-secondary">Lihat template Instagram siap pakai</p>
            </div>
            
            {/* Template Gallery */}
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" 
                onClick={() => selectTemplate(1)}
              >
                <div className="aspect-square bg-linear-to-br from-pink-200 to-purple-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-medium text-secondary text-sm">Feed Post</h4>
                <p className="text-xs text-text-secondary">Promosi produk</p>
              </div>
              
              <div 
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" 
                onClick={() => selectTemplate(2)}
              >
                <div className="aspect-square bg-linear-to-br from-blue-200 to-green-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="font-medium text-secondary text-sm">Story Template</h4>
                <p className="text-xs text-text-secondary">Tips & quotes</p>
              </div>
              
              <div 
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" 
                onClick={() => selectTemplate(3)}
              >
                <div className="aspect-square bg-linear-to-br from-yellow-200 to-orange-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-medium text-secondary text-sm">Carousel</h4>
                <p className="text-xs text-text-secondary">Tutorial step</p>
              </div>
              
              <div 
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" 
                onClick={() => selectTemplate(4)}
              >
                <div className="aspect-square bg-linear-to-br from-red-200 to-pink-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-2xl">🎬</span>
                </div>
                <h4 className="font-medium text-secondary text-sm">Reels Cover</h4>
                <p className="text-xs text-text-secondary">Video thumbnail</p>
              </div>
            </div>
            
            <button className="w-full btn-secondary mt-6">
              Lihat Semua Template
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
