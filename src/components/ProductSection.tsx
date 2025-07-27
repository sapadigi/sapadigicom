export default function ProductSection() {
  return (
    <section className="py-20 bg-white" id="produk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary mb-6">
            Produk Digital yang <span className="text-primary">Terbukti Efektif</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Setiap produk dirancang khusus untuk menyelesaikan masalah nyata bisnis Indonesia dengan pendekatan yang mudah dipahami.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1: Bio Link Generator */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200">
            <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-40 bg-white rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <div className="p-3 space-y-2">
                    <div className="w-16 h-16 bg-primary-200 rounded-full mx-auto"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4 mx-auto"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2 mx-auto"></div>
                    <div className="space-y-1">
                      <div className="h-6 bg-primary-100 rounded"></div>
                      <div className="h-6 bg-primary-100 rounded"></div>
                      <div className="h-6 bg-primary-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Gratis
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-headline text-xl font-semibold text-secondary mb-3">Bio Link Generator</h3>
              <p className="text-text-secondary mb-4">
                Buat halaman bio link profesional untuk Instagram, TikTok, dan media sosial lainnya dalam hitungan menit.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Template siap pakai
                </div>
                <div className="flex items-center text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Analytics terintegrasi
                </div>
                <div className="flex items-center text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Custom domain tersedia
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-primary">Gratis</span>
                  <span className="text-sm text-text-secondary ml-2">selamanya</span>
                </div>
                <button className="btn-primary">
                  Coba Sekarang
                </button>
              </div>
            </div>
          </div>
          
          {/* Product 2: IG Template Creator */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200">
            <div className="relative h-48 bg-gradient-to-br from-accent-100 to-accent-200 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2">
                  <div className="w-20 h-20 bg-white rounded-lg shadow-md transform group-hover:rotate-3 transition-transform duration-300"></div>
                  <div className="w-20 h-20 bg-white rounded-lg shadow-md transform group-hover:-rotate-3 transition-transform duration-300"></div>
                  <div className="w-20 h-20 bg-white rounded-lg shadow-md transform group-hover:-rotate-2 transition-transform duration-300"></div>
                  <div className="w-20 h-20 bg-white rounded-lg shadow-md transform group-hover:rotate-2 transition-transform duration-300"></div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-accent text-white text-xs px-2 py-1 rounded-full">
                Premium
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-headline text-xl font-semibold text-secondary mb-3">IG Template Creator</h3>
              <p className="text-text-secondary mb-4">
                Ribuan template Instagram siap pakai untuk feed, story, dan reels yang konsisten dengan brand Anda.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  1000+ template premium
                </div>
                <div className="flex items-center text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Brand kit otomatis
                </div>
                <div className="flex items-center text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Export HD unlimited
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-primary">Rp 99K</span>
                  <span className="text-sm text-text-secondary ml-2">/bulan</span>
                </div>
                <button className="btn-primary">
                  Coba Sekarang
                </button>
              </div>
            </div>
          </div>
          
          {/* Product 3: Website Builder */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200">
            <div className="relative h-48 bg-gradient-to-br from-secondary-100 to-secondary-200 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-36 h-24 bg-white rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <div className="p-2 space-y-1">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    <div className="grid grid-cols-3 gap-1 mt-2">
                      <div className="h-4 bg-primary-200 rounded"></div>
                      <div className="h-4 bg-primary-200 rounded"></div>
                      <div className="h-4 bg-primary-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-secondary text-white text-xs px-2 py-1 rounded-full">
                Pro
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-headline text-xl font-semibold text-secondary mb-3">Website Builder UMKM</h3>
              <p className="text-text-secondary mb-4">
                Platform drag-and-drop untuk membuat website profesional tanpa coding, khusus untuk UMKM Indonesia.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Template bisnis lokal
                </div>
                <div className="flex items-center text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Integrasi payment lokal
                </div>
                <div className="flex items-center text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  SEO optimized
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-primary">Rp 199K</span>
                  <span className="text-sm text-text-secondary ml-2">/bulan</span>
                </div>
                <button className="btn-primary">
                  Coba Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
