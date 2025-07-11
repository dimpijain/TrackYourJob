// frontend/src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { FaSearch, FaPlus, FaChartLine, FaFileUpload } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">JobTrack</h1>
          <nav>
           
            <Link 
              to="/login" 
              className="ml-4 bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-400 transition"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content - grows to push footer down */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Organize Your Job Search
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              Track applications, manage resumes, and analyze your progress - all in one place.
            </p>
            <div className="mt-8 flex justify-center">
              <Link 
                to="/signup" 
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all"
              >
                Get Started for Free
              </Link>
            </div>
          </div>

          {/* Features Grid - Spaced wider */}
          <div className="mt-24 grid gap-12 md:grid-cols-2 lg:grid-cols-4 px-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-500 mb-6 flex justify-center">
                <FaSearch size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Track Applications</h3>
              <p className="mt-4 text-gray-600 text-center">
                Never lose track of where you've applied and follow-up dates.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-500 mb-6 flex justify-center">
                <FaFileUpload size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Resume Management</h3>
              <p className="mt-4 text-gray-600 text-center">
                Store and version your resumes tailored to different jobs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-500 mb-6 flex justify-center">
                <FaChartLine size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Progress Analytics</h3>
              <p className="mt-4 text-gray-600 text-center">
                Visualize your application success rates and response times.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-500 mb-6 flex justify-center">
                <FaPlus size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">Quick Add</h3>
              <p className="mt-4 text-gray-600 text-center">
                Add new applications in seconds with our streamlined form.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - always at bottom */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <p className="text-gray-500 text-sm mb-4">
              &copy; {new Date().getFullYear()} JobTrack. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-gray-500">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-gray-500">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-gray-500">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
