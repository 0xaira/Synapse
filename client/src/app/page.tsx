import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our App</h1>
      <div className="flex space-x-4">
        <a href="/signin" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Sign In
        </a>
        <a href="/signup" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Home;
