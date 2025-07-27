export default function AboutSection() {
  return (
    <section className="py-20 bg-surface" id="tentang">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary mb-6">
              <span className="text-primary">Sapadigi : </span> Dari Kita, Untuk Kamu yang Ingin Melangkah Lebih Jauh
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Kami tahu tantangan terbesar di dunia digital bukan soal teknologi! tapi soal akses, pemahaman, dan keberanian untuk mulai. Sapadigi hadir sebagai jembatan antara masyarakat dan dunia digital, dengan pendekatan yang membumi dan mudah dicerna.
              Tim kami adalah anak-anak bangsa yang punya satu misi: membuka pintu teknologi untuk semua kalangan dari pelajar, pekerja, orang tua, hingga UMKM.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Lahir dari Realita, Bukan Teori</h3>
                  <p className="text-text-secondary">
                    Tim kami terdiri dari siswa, pekerja, pengangguran, hingga freelancer muda.
                    Kami tahu rasanya bingung mau mulai dari mana, kehabisan waktu, dan takut ketinggalan zaman.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Filosofi Human-First</h3>
                  <p className="text-text-secondary">
                    Teknologi harus bisa membantu manusia, bukan bikin makin bingung. Sapadigi menerjemahkan teknologi ke dalam bahasa sehari-hari.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Hasil Langsung Terasa</h3>
                  <p className="text-text-secondary">
                    Kami tidak hanya mengajarkan klik dan kode, tapi membekali alat yang langsung bisa digunakan untuk bantu pekerjaan, bisnis, atau belajar—dalam hitungan menit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Tim Sapadigi bekerja sama" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover" 
              loading="lazy"
            />
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-text-secondary">Tahun Pengalaman</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-2xl font-bold text-primary">2,847</div>
              <div className="text-sm text-text-secondary">Klien Puas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
