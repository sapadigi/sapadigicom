export default function QuickStats() {
  const stats = [
    {
      icon: (
        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
      value: '20',
      label: 'Total Tools Tersedia',
      bgColor: 'bg-primary-100'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
        </svg>
      ),
      value: '50K+',
      label: 'Pengguna Aktif',
      bgColor: 'bg-secondary-100'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
        </svg>
      ),
      value: '99.9%',
      label: 'Uptime Guarantee',
      bgColor: 'bg-accent-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-shadow duration-200">
          <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
            {stat.icon}
          </div>
          <h4 className="text-2xl font-bold text-secondary mb-2">{stat.value}</h4>
          <p className="text-sm text-text-secondary">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
