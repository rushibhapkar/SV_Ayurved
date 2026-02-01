import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-green-600">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been moved, deleted, or 
          never existed. Let's get you back to your wellness journey.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;