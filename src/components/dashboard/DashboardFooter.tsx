export default function DashboardFooter() {
  return (
    <footer className="bg-surface border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between text-sm text-text-secondary">
          <p>© 2025 ToolHub Dashboard. Semua hak dilindungi.</p>
          <div className="flex items-center space-x-4">
            <span>v2.1.0</span>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
              <span>Sistem Normal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
