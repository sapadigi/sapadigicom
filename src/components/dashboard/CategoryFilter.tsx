'use client';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'Semua Tools' },
  { id: 'gratis', label: 'Gratis' },
  { id: 'premium', label: 'Premium' },
  { id: 'pro', label: 'Pro' },
  { id: 'design', label: 'Design' },
  { id: 'development', label: 'Development' },
  { id: 'marketing', label: 'Marketing' },
];

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      <span className="text-sm font-medium text-text-secondary">Kategori:</span>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeCategory === category.id
              ? 'bg-primary-100 text-primary-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
