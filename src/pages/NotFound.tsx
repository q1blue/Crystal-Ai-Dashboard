import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-purple-600 dark:text-purple-400">404</h1>
      <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent my-6"></div>
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
        The page you're looking for doesn't exist or has been moved. 
        Let's get you back to the dashboard.
      </p>
      <Link 
        to="/"
        className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors"
      >
        <Home size={18} className="mr-2" />
        Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;