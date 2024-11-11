import React from 'react';
import music from '../assets/Logo.png';
import arrow from '../assets/arrow.png';
import discover from '../assets/discover.png';
import Logout from '../assets/Log Out.png';
import Musicicon from '../assets/musicsmall.png';
import setting from '../assets/setting.png';
import home from '../assets/Vector.png';
function Sidebar() {
  return (
    <div className=" h-full bg-black text-white flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold p-5">DreamMusic</h1>
        <ul className="mt-10">
        <li className="flex items-center p-4 hover:bg-red-700 cursor-pointer">
           Menu
          </li>
          <li className="flex items-center p-4 hover:bg-red-700 cursor-pointer">
            <img src={home} alt="Home" className="h-6 w-6 mr-2" /> Home
          </li>
          <li className="flex items-center p-4 hover:bg-red-700 cursor-pointer">
            <img src={arrow} alt="Trends" className="h-6 w-6 mr-2" /> Trends
          </li>
          <li className="flex items-center p-4 hover:bg-red-700 cursor-pointer">
            <img src={Musicicon} alt="Library" className="h-6 w-6 mr-2" /> Library
          </li>
          <li className="flex items-center p-4 hover:bg-red-700 cursor-pointer">
            <img src={discover} alt="Discover" className="h-6 w-6 mr-2" /> Discover
          </li>
        </ul>
      </div>
      <div className="mb-10">
        <ul>
          <li className="flex items-center p-4 hover:bg-red-700 cursor-pointer">
            <img src={setting} alt="Settings" className="h-6 w-6 mr-2" /> Settings
          </li>
          <li className="flex items-center p-4 hover:bg-red-700 cursor-pointer">
            <img src={Logout} alt="Log Out" className="h-6 w-6 mr-2" /> Log Out
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
