'use client';

import { useState } from 'react';

interface ProblemModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string[];
  bgColor: string;
  borderColor: string;
}

function ProblemModal({ id, isOpen, onClose, title, content, bgColor, borderColor }: ProblemModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div 
        className={`${bgColor} ${borderColor} rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-pulse`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <h3 className="font-headline text-xl font-semibold text-secondary mb-4">{title}</h3>
        {content.map((paragraph, index) => (
          <p key={index} className="text-text-secondary mb-2" dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </div>
  );
}

export default function WhySapadigiSection() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const problems = [
    {
      id: '1',
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 32 32" strokeWidth="1.5">
          <circle cx="10" cy="13" r="3"/>
          <circle cx="22" cy="13" r="3"/>
          <circle cx="16" cy="20" r="2.5"/>
          <path d="M7 25c0-3 2-5 6-5s6 2 6 5"/>
          <path d="M19 25c0-2 1.5-3.5 3-3.5s3 1.5 3 3.5"/>
          <path d="M6 25c0-2 1.5-3.5 3-3.5s3 1.5 3 3.5"/>
        </svg>
      ),
      title: 'Anak Tumbuh di Internet, Orang Tua Tak Lagi Jadi Penuntun',
      description: 'Anak makin jago pegang gadget, tapi orang tua makin sering pegang kepala.<br>Kenapa? Karena nggak ngerti dunia yang sedang dijelajahi anaknya.',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconBg: 'bg-red-100',
      modalContent: [
        'Anak makin jago pegang gadget, tapi orang tua makin sering pegang kepala.<br>Kenapa? Karena nggak ngerti dunia yang sedang dijelajahi anaknya.',
        'Dari tontonan yang nggak sesuai umur, sampai game atau konten yang susah diawasi — semua bisa jadi bahaya kalau tak ada pendampingan.',
        'Di sinilah peran orang tua seharusnya hadir. <span class="font-semibold text-red-600">Bukan untuk melarang, tapi untuk membimbing.</span><br>Sayangnya, banyak yang merasa terlalu jauh tertinggal untuk mengejar.',
        'Sapadigi bantu orang tua menyusul pelan-pelan.<br>Biar anak dan orang tua bisa melek digital bareng, ngobrol dengan bahasa yang sama, dan tumbuh tanpa saling tertinggal.'
      ]
    },
    {
      id: '2',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 32 32" strokeWidth="1.5">
          <path d="M4 13l12-6 12 6-12 6-12-6z"/>
          <path d="M20 17v4a4 4 0 0 1-8 0v-4"/>
        </svg>
      ),
      title: 'Dunia Sudah Berubah, Tapi Sistem Belajarnya Masih Sama',
      description: 'Hari ini, dunia digital adalah ladang emas bagi yang tahu caranya.<br>Tapi sistem pendidikan masih fokus pada nilai dan gelar.',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      iconBg: 'bg-orange-100',
      modalContent: [
        'Hari ini, dunia digital adalah ladang emas bagi yang tahu caranya.<br>Tapi sistem pendidikan masih fokus pada nilai dan gelar.',
        'Akibatnya, banyak pelajar yang rajin belajar… tapi tak tahu dunia apa yang menanti setelah lulus.',
        'Sapadigi membawa pelajar melihat masa depan yang lebih luas dari sekadar meja kantor.'
      ]
    },
    {
      id: '3',
      icon: (
        <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 32 32" strokeWidth="1.5">
          <path d="M20 4a10 10 0 1 0 8 8 8 8 0 0 1-8-8z"/>
          <circle cx="16" cy="16" r="10"/>
        </svg>
      ),
      title: 'Internet Nggak Pernah Tidur. Tapi Banyak yang Belum Bangun',
      description: 'Dunia digital aktif 24 jam: ada yang jualan online, bikin konten, ngelola akun brand, ngedit video — dan semuanya dibayar.',
      bgColor: 'bg-secondary-50',
      borderColor: 'border-secondary-200',
      iconBg: 'bg-secondary-100',
      modalContent: [
        'Dunia digital aktif 24 jam: ada yang jualan online, bikin konten, ngelola akun brand, ngedit video — dan semuanya dibayar.<br>Tapi ironisnya, banyak dari kita justru cuma jadi penonton:<br>🔄 Scroll terus, nonton terus, like terus… tapi nggak pernah ikut ambil bagian.',
        'Di tengah angka pengangguran yang tinggi, banyak yang lebih sering pakai teknologi buat hiburan, bukan untuk kerja atau cari penghasilan.',
        'Sapadigi hadir buat ubah itu.<br>Karena teknologi seharusnya bukan cuma buat konsumsi — tapi juga buat berkarya, menghasilkan, dan membangun masa depan.'
      ]
    },
    {
      id: '4',
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 32 32" strokeWidth="1.5">
          <polygon points="16,4 28,8 16,28 4,8 16,4"/>
          <line x1="16" y1="4" x2="16" y2="28"/>
        </svg>
      ),
      title: 'Usaha Jalan, Tapi Tanpa Arah Digital — Sapadigi Bantu Susun Peta Jalannya',
      description: 'Banyak UMKM semangat jualan, tapi bingung saat masuk dunia digital.<br>Mau bikin konten? Bingung mulai dari mana.',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
      iconBg: 'bg-primary-100',
      modalContent: [
        'Banyak UMKM semangat jualan, tapi bingung saat masuk dunia digital.<br>Mau bikin konten? Bingung mulai dari mana.<br>Mau buat katalog, sistem, atau promosi? Serba coba-coba tanpa strategi.',
        'Akhirnya usaha jalan, tapi tanpa arah.<br>Stuck di tempat. Ditinggal tren.<br>Karena nggak ada perencanaan yang jelas dan nggak tahu harus belajar ke siapa.',
        'Sapadigi hadir untuk bantu UMKM bikin rencana yang realistis dan tepat sasaran.<br>Bukan sekadar "ayo digital", tapi bagaimana caranya — mulai dari membangun mindset, mengelola tools, sampai menumbuhkan strategi yang berkelanjutan.'
      ]
    },
    {
      id: '5',
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 32 32" strokeWidth="1.5">
          <rect x="6" y="12" width="20" height="12" rx="3"/>
          <path d="M12 12V9a4 4 0 0 1 8 0v3"/>
        </svg>
      ),
      title: 'Kerja Tiap Hari, Tapi Nggak Ke Mana-Mana? Saatnya Buka Jalan Baru.',
      description: 'Banyak orang bekerja keras setiap hari, tapi hanya untuk bertahan — bukan berkembang.<br>Pulang kerja capek, weekend pun habis buat istirahat.',
      bgColor: 'bg-accent-50',
      borderColor: 'border-accent-200',
      iconBg: 'bg-accent-100',
      modalContent: [
        'Banyak orang bekerja keras setiap hari, tapi hanya untuk bertahan — bukan berkembang.<br>Pulang kerja capek, weekend pun habis buat istirahat.<br>Sampai lupa tanya ke diri sendiri: "Sampai kapan begini terus?"',
        'Bukan karena malas, tapi karena nggak tahu harus mulai dari mana, dan terlalu sibuk sampai tak sempat berpikir: "Apa aku bisa punya usaha sendiri? Bisa kerja lebih fleksibel?"',
        '💡 Sapadigi hadir untuk bantu para pekerja bangun alternatif hidup.<br>Kami ajak kamu kenal dunia digital yang penuh peluang: dari skill baru, usaha sampingan, sampai jalan jadi freelancer. Tanpa harus resign, tanpa harus jadi expert dulu.',
        'Karena kerja keras itu bagus, tapi kerja cerdas bisa bikin hidup lebih bebas.'
      ]
    },
    {
      id: '6',
      icon: (
        <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 32 32" strokeWidth="1.5">
          <rect x="6" y="8" width="20" height="16" rx="3"/>
          <path d="M12 16h8M16 12v8"/>
        </svg>
      ),
      title: 'Teknologi Terlihat Rumit? Karena Selama Ini Dijelaskan Pakai Bahasa yang Sulit.',
      description: 'Bagi banyak orang, dunia digital terasa seperti sesuatu yang jauh dan membingungkan. Istilahnya susah dimengerti, isinya soal coding, AI, UI/UX, dan hal teknis lain yang bikin pusing duluan sebelum mencoba.',
      bgColor: 'bg-surface',
      borderColor: 'border-gray-200',
      iconBg: 'bg-gray-100',
      modalContent: [
        'Bagi banyak orang, dunia digital terasa seperti sesuatu yang jauh dan membingungkan. Istilahnya susah dimengerti, isinya soal coding, AI, UI/UX, dan hal teknis lain yang bikin pusing duluan sebelum mencoba. Padahal, kenyataannya kita nggak perlu jadi ahli teknologi untuk bisa masuk dan berkembang di dunia digital. Cukup mulai dari hal-hal sederhana, mengenal alatnya, dan mendapat panduan yang mudah dimengerti.',
        'Sapadigi hadir untuk menjembatani itu semua.<br>Kami membantu menerjemahkan teknologi ke dalam bahasa sehari-hari, agar siapa pun bisa belajar tanpa tekanan. Bukan cuma mengajarkan langkah-langkah teknis, tapi juga menjelaskan kenapa ini penting dan bagaimana teknologi bisa dimanfaatkan untuk hidup yang lebih baik. Karena teknologi seharusnya bukan jadi sesuatu yang ditakuti, tapi alat yang bisa kita ajak bicara dan gunakan.'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white" id="masalah">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary mb-6">
            Kenapa Sapadigi Harus Ada <span className="text-red-600">?</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Kesenjangan Digital Itu Nyata. Dan Kita Harus Melakukan Sesuatu.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <div 
              key={problem.id}
              className={`p-8 rounded-2xl ${problem.bgColor} ${problem.borderColor} hover:shadow-lg transition-all duration-300 text-left flex flex-col h-full min-h-[480px]`}
            >
              <div className={`w-14 h-14 ${problem.iconBg} rounded-full flex items-center justify-center mb-4`}>
                {problem.icon}
              </div>
              <h3 className="font-headline text-xl font-semibold text-secondary mb-2">
                {problem.title}
              </h3>
              <p 
                className="text-text-secondary mb-2" 
                dangerouslySetInnerHTML={{ __html: problem.description }}
              />
              <div className="flex-grow"></div>
              <button 
                className="mt-4 inline-block px-4 py-2 btn-secondary text-lg font-semibold w-full"
                onClick={() => setOpenModal(problem.id)}
              >
                Selengkapnya
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {problems.map((problem) => (
        <ProblemModal
          key={problem.id}
          id={problem.id}
          isOpen={openModal === problem.id}
          onClose={() => setOpenModal(null)}
          title={problem.title}
          content={problem.modalContent}
          bgColor={problem.bgColor}
          borderColor={problem.borderColor}
        />
      ))}
    </section>
  );
}
