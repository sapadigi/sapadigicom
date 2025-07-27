export interface Tool {
  id: string;
  title: string;
  description: string;
  category: 'gratis' | 'premium' | 'pro';
  price?: string;
  icon: React.ReactNode;
  features: { text: string }[];
  categories: string[];
}

export const toolsData: Tool[] = [
  {
    id: 'bio-link-generator',
    title: 'Bio Link Generator',
    description: 'Buat halaman bio link profesional untuk Instagram, TikTok, dan media sosial lainnya dalam hitungan menit',
    category: 'gratis',
    icon: (
      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
      </svg>
    ),
    features: [
      { text: 'Template siap pakai' },
      { text: 'Analytics terintegrasi' },
      { text: 'Custom domain tersedia' }
    ],
    categories: ['gratis', 'design', 'marketing']
  },
  {
    id: 'pdf-converter',
    title: 'PDF Converter',
    description: 'Konversi berbagai format file ke PDF dan sebaliknya dengan mudah',
    category: 'gratis',
    icon: (
      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
      </svg>
    ),
    features: [
      { text: 'Multi format support' },
      { text: 'Batch processing' },
      { text: 'Cloud storage' }
    ],
    categories: ['gratis', 'development']
  },
  {
    id: 'ig-template-creator',
    title: 'IG Template Creator',
    description: 'Ribuan template Instagram siap pakai untuk feed, story, dan reels yang konsisten dengan brand Anda',
    category: 'premium',
    price: 'Rp 99K /bulan',
    icon: (
      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
      </svg>
    ),
    features: [
      { text: '1000+ template premium' },
      { text: 'Brand kit otomatis' },
      { text: 'Export HD unlimited' }
    ],
    categories: ['premium', 'design', 'marketing']
  },
  {
    id: 'image-optimizer',
    title: 'Image Optimizer',
    description: 'Kompres dan optimasi gambar tanpa mengurangi kualitas',
    category: 'gratis',
    icon: (
      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
      </svg>
    ),
    features: [
      { text: 'Lossless compression' },
      { text: 'Multiple formats' },
      { text: 'Resize otomatis' }
    ],
    categories: ['gratis', 'design']
  },
  {
    id: 'website-builder',
    title: 'Website Builder UMKM',
    description: 'Platform drag-and-drop untuk membuat website profesional tanpa coding, khusus untuk UMKM Indonesia',
    category: 'pro',
    price: 'Rp 199K /bulan',
    icon: (
      <svg className="w-6 h-6 text-secondary-700" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"/>
      </svg>
    ),
    features: [
      { text: 'Template bisnis lokal' },
      { text: 'Integrasi payment lokal' },
      { text: 'SEO optimized' }
    ],
    categories: ['pro', 'development']
  },
  {
    id: 'code-formatter',
    title: 'Code Formatter',
    description: 'Format dan beautify kode dalam berbagai bahasa pemrograman',
    category: 'gratis',
    icon: (
      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
      </svg>
    ),
    features: [
      { text: 'Multi language support' },
      { text: 'Auto indentation' },
      { text: 'Syntax highlighting' }
    ],
    categories: ['gratis', 'development']
  },
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    description: 'Generate konten berkualitas tinggi dengan AI terdepan untuk berbagai kebutuhan marketing',
    category: 'premium',
    price: 'Rp 149K /bulan',
    icon: (
      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    features: [
      { text: 'AI powered writing' },
      { text: '50+ content types' },
      { text: 'Unlimited generation' }
    ],
    categories: ['premium', 'marketing']
  },
  {
    id: 'text-analyzer',
    title: 'Text Analyzer',
    description: 'Analisis teks mendalam dengan statistik kata dan karakter',
    category: 'gratis',
    icon: (
      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
      </svg>
    ),
    features: [
      { text: 'Word & character count' },
      { text: 'Readability score' },
      { text: 'Keyword density' }
    ],
    categories: ['gratis', 'marketing']
  }
];
