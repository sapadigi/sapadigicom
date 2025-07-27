'use client';

import { useState } from 'react';

interface Feature {
  text: string;
}

interface ToolCardProps {
  title: string;
  description: string;
  category: 'gratis' | 'premium' | 'pro';
  price?: string;
  icon: React.ReactNode;
  features: Feature[];
  categories: string[];
}

export default function ToolCard({ 
  title, 
  description, 
  category, 
  price, 
  icon, 
  features, 
  categories 
}: ToolCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryStyle = () => {
    switch (category) {
      case 'gratis':
        return 'bg-primary-100 text-primary-800';
      case 'premium':
        return 'bg-accent-100 text-accent-800';
      case 'pro':
        return 'bg-secondary-800 text-white';
      default:
        return 'bg-primary-100 text-primary-800';
    }
  };

  const getIconBgStyle = () => {
    switch (category) {
      case 'gratis':
        return 'bg-primary-50';
      case 'premium':
        return 'bg-accent-50';
      case 'pro':
        return 'bg-secondary-100';
      default:
        return 'bg-primary-50';
    }
  };

  const handleAccess = () => {
    // Show notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.textContent = `Mengakses ${title}...`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  return (
    <div 
      className={`tool-card bg-white rounded-xl shadow-xs border border-gray-100 p-6 hover:shadow-md transition-all duration-200 ${
        isHovered ? 'transform -translate-y-1' : ''
      }`}
      data-category={categories.join(' ')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${getIconBgStyle()} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryStyle()}`}>
          {category === 'gratis' ? 'Gratis' : category === 'premium' ? 'Premium' : 'Pro'}
        </span>
      </div>
      
      <h4 className="text-lg font-semibold text-secondary mb-2">{title}</h4>
      <p className="text-sm text-text-secondary mb-4">{description}</p>
      
      {price && (
        <div className="mb-3">
          <div className={`text-lg font-bold mb-2 ${
            category === 'premium' ? 'text-accent' : 'text-secondary-700'
          }`}>
            {price}
          </div>
        </div>
      )}
      
      <div className="mb-4">
        <ul className="space-y-2 text-sm text-text-secondary">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
      
      <button 
        onClick={handleAccess}
        className="w-full bg-primary hover:bg-primary-600 text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-200"
      >
        Coba Sekarang
      </button>
    </div>
  );
}
