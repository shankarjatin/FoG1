import React from 'react';

function Navbar() {
  return (
    <div className="bg-red-800 text-white flex justify-between items-center px-5 py-2">
      <div className="flex space-x-4">
        <a href="#music" className="hover:text-gray-300">Music</a>
        <a href="#podcast" className="hover:text-gray-300">Podcast</a>
        <a href="#live" className="hover:text-gray-300">Live</a>
        <a href="#radio" className="hover:text-gray-300">Radio</a>
      </div>
      <div className="flex items-center space-x-2">
        <span>Michael Jackson</span>
        <button className="p-2 rounded-full bg-gray-600">
          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12l-4-4m0 0l-4 4m4-4v12M3 6a2 2 0 011-1.732V16.8a2 2 0 01-1 1.732M4 5h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
