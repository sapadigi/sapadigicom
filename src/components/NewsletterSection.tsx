'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    setIsSubmitted(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-secondary mb-4">
            Dapatkan Tips Digital Marketing Gratis
          </h3>
          <p className="text-text-secondary mb-8">
            Subscribe newsletter kami dan dapatkan tips, template gratis, dan update produk terbaru langsung di inbox Anda.
          </p>
          
          {isSubmitted ? (
            <div className="max-w-md mx-auto">
              <div className="bg-success-50 text-success-700 px-6 py-4 rounded-lg">
                ✅ Terima kasih! Anda telah berhasil subscribe newsletter kami.
              </div>
            </div>
          ) : (
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Masukkan email Anda" 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe Gratis
                </button>
              </div>
              <p className="text-xs text-text-secondary mt-3">
                Kami menghormati privasi Anda. Unsubscribe kapan saja.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
