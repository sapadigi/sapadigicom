export default function BenefitsSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary mb-6">
            Kenapa Memilih <span className="text-primary">Sapadigi</span>?
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Kami tidak hanya menyediakan tools, tapi solusi lengkap untuk transformasi digital yang mudah dan efektif.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1: Accessibility */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 className="font-headline text-xl font-semibold text-secondary mb-4">Mudah Diakses Semua Orang</h3>
            <p className="text-text-secondary leading-relaxed">
              Interface sederhana yang bisa dipahami siapa saja, dari mahasiswa hingga pemilik warung. 
              Tidak perlu background IT untuk menggunakan tools kami.
            </p>
          </div>
          
          {/* Benefit 2: Local Creation */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 className="font-headline text-xl font-semibold text-secondary mb-4">Dibuat Khusus untuk Indonesia</h3>
            <p className="text-text-secondary leading-relaxed">
              Template dan contoh yang relevan dengan budaya Indonesia. Support bahasa Indonesia penuh, 
              dan integrasi dengan platform lokal seperti GoPay, OVO, dan WhatsApp Business.
            </p>
          </div>
          
          {/* Benefit 3: Immediate Usability */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 className="font-headline text-xl font-semibold text-secondary mb-4">Langsung Bisa Dipakai</h3>
            <p className="text-text-secondary leading-relaxed">
              Tidak perlu tutorial panjang atau training khusus. Buka, pakai, selesai! 
              Hasil profesional dalam hitungan menit, bukan jam atau hari.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
