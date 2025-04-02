import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { AlertTriangle, Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-16 w-16 text-yellow-500" />
          </div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Page Not Found</h2>
          <p className="mt-4 text-center text-gray-600">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Home className="h-5 w-5 mr-2" />
              Go to Homepage
            </Link>
            <Link
              to="/search"
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50"
            >
              <Search className="h-5 w-5 mr-2" />
              Search Scholarships
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;