'use client';

import { useState, useMemo } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import CategoryFilter from '@/components/dashboard/CategoryFilter';
import ToolCard from '@/components/dashboard/ToolCard';
import QuickStats from '@/components/dashboard/QuickStats';
import DashboardFooter from '@/components/dashboard/DashboardFooter';
import { toolsData } from '@/data/toolsData';

export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTools = useMemo(() => {
    if (activeCategory === 'all') {
      return toolsData;
    }
    return toolsData.filter(tool => 
      tool.categories.includes(activeCategory) || tool.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background font-body">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <WelcomeSection />
        
        <CategoryFilter 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Integrated Tools Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-secondary">Semua Tools</h3>
            <span className="text-sm text-text-secondary">Tools gratis dan premium terintegrasi</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                title={tool.title}
                description={tool.description}
                category={tool.category}
                price={tool.price}
                icon={tool.icon}
                features={tool.features}
                categories={tool.categories}
              />
            ))}
          </div>
        </div>

        <QuickStats />
      </main>

      <DashboardFooter />
    </div>
  );
}
