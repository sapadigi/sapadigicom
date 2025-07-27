export default function TechHelpSection() {
  return (
    <section className="py-20 bg-surface" id="solusi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary mb-4">
            SapaTools
          </h2>
          <h3 className="font-headline text-xl md:text-2xl font-semibold text-primary mb-6">
            Bagaimana teknologi bisa membantu manusia
          </h3>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-4">
            Nggak perlu jago IT untuk mulai. Di SapaTools, kamu bisa pakai berbagai alat digital praktis tanpa ribet, dan semuanya bisa diakses gratis.
          </p>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Karena teknologi seharusnya mempermudah, bukan bikin stres.
          </p>
        </div>
        
        {/* Interactive Comparison */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Complex Tools Side */}
            <div className="p-8 bg-gray-50 border-r border-gray-200">
              <div className="text-center mb-6">
                <h3 className="font-headline text-xl font-semibold text-error mb-2">Tools Diluaran Sana</h3>
                <div className="w-12 h-1 bg-error mx-auto"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 text-error mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  Harus daftar dulu, isi email & data pribadi
                </div>
                <div className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 text-error mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  Gratis tapi cuma trial — setelah itu berbayar
                </div>
                <div className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 text-error mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  Banyak iklan yang mengganggu
                </div>
                <div className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 text-error mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  Interface ribet & membingungkan
                </div>
                <div className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 text-error mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  Nggak bisa request fitur khusus
                </div>
                <div className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 text-error mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  Beberapa tools dikunci untuk versi premium
                </div>
                <div className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 text-error mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  Bahasa & istilah teknis susah dipahami
                </div>
              </div>
              
              {/* Mock Complex Interface */}
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <div className="text-xs text-gray-400 mb-2">Preview Interface:</div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                  <div className="grid grid-cols-4 gap-1">
                    <div className="h-8 bg-gray-300 rounded"></div>
                    <div className="h-8 bg-gray-300 rounded"></div>
                    <div className="h-8 bg-gray-300 rounded"></div>
                    <div className="h-8 bg-gray-300 rounded"></div>
                  </div>
                  <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            </div>
            
            {/* SapaTools Side */}
            <div className="p-8 bg-primary-50">
              <div className="text-center mb-6">
                <h3 className="font-headline text-xl font-semibold text-primary mb-2">SapaTools by Sapadigi</h3>
                <div className="w-12 h-1 bg-primary mx-auto"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-text-primary">
                  <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Langsung pakai dengan Akses Mudah
                </div>
                <div className="flex items-center text-text-primary">
                  <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  100% gratis, tanpa batasan waktu
                </div>
                <div className="flex items-center text-text-primary">
                  <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Bebas dari iklan — fokus ke alatnya
                </div>
                <div className="flex items-center text-text-primary">
                  <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Mudah digunakan, bahkan oleh pemula
                </div>
                <div className="flex items-center text-text-primary">
                  <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Bisa request tools khusus sesuai kebutuhan kamu
                </div>
                <div className="flex items-center text-text-primary">
                  <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Semua fitur terbuka, tanpa versi premium
                </div>
                <div className="flex items-center text-text-primary">
                  <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Dijelaskan dengan bahasa yang membumi & manusiawi
                </div>
              </div>
              
              {/* Mock Simple Interface */}
              <div className="mt-6 p-4 bg-white rounded-lg border border-primary-200">
                <div className="text-xs text-primary-600 mb-2">Preview Interface:</div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="h-3 bg-primary-200 rounded w-1/3"></div>
                    <div className="w-16 h-6 bg-primary rounded text-xs text-white flex items-center justify-center">Buat</div>
                  </div>
                  <div className="h-12 bg-primary-100 rounded flex items-center px-3">
                    <div className="w-8 h-8 bg-primary-300 rounded mr-3"></div>
                    <div className="h-2 bg-primary-300 rounded flex-1"></div>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-8 bg-primary rounded mx-auto text-xs text-white flex items-center justify-center">Selesai!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
