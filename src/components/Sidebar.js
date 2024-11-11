import React from 'react';
import { HomeIcon, LibraryIcon, SearchIcon } from '@heroicons/react/solid';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 p-5">
      <h1 className="text-2xl font-bold mb-5">DreamMusic</h1>
      <ul>
        <li className="flex items-center space-x-2 mb-4">
          <HomeIcon className="h-5 w-5" /> <span>Home</span>
        </li>
        <li className="flex items-center space-x-2 mb-4">
          <LibraryIcon className="h-5 w-5" /> <span>Library</span>
        </li>
        <li className="flex items-center space-x-2 mb-4">
          <SearchIcon className="h-5 w-5" /> <span>Search</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
