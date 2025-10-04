// app/404.jsx
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-9xl font-bold text-green-600">404</h1>
      <p className="text-xl text-gray-700 mb-4">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/" className="px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-300">
          Go Back to Home
      </Link>
    </div>
  );
};

export default Custom404;
