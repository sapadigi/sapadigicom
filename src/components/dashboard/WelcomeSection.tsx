export default function WelcomeSection() {
  return (
    <div className="mb-8">
      <div className="bg-linear-to-r from-primary-50 to-primary-100 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-2">
              👋 Selamat datang di ToolHub!
            </h2>
            <p className="text-text-secondary">
              Akses berbagai tools yang tersedia untuk produktivitas Anda. Temukan tools gratis dan premium untuk kebutuhan bisnis Anda.
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center bg-primary-100 text-primary-700 px-3 py-2 rounded-lg text-sm font-medium">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              <span>12 Tools Gratis</span>
            </div>
            <div className="flex items-center bg-accent-100 text-accent-700 px-3 py-2 rounded-lg text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span>8 Tools Premium</span>
            </div>
          </div>
        </div>
      </div>

      {/* Request Tools Section */}
      <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100 shadow-xs">
        <div className="text-center">
          <p className="text-text-secondary mb-4">
            Kamu bisa request tools untuk kebutuhan kamu disini secara gratis
          </p>
          <button className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            Request Tools
          </button>
        </div>
      </div>
    </div>
  );
}
