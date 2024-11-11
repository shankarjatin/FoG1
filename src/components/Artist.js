import React from 'react';
import backgroundImageUrl from "../assets/Background.png";
import artistImagePath from '../assets/Michael.png';

const ArtistCard = () => {
  return (
    <div className="flex justify-center my-20 relative"> {/* Center the card horizontally */}
      
      {/* Background card */}
      <div
        className="relative h-60 w-full max-w-xl rounded-lg overflow-hidden z-10"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>

        <div className="absolute bottom-4 left-4 text-white">
          <span className="flex items-center space-x-2">
            <span className="text-blue-400">Verified Artist</span>
          </span>
          <h1 className="text-2xl font-bold">Michael Jackson</h1>
          <p className="text-gray-300">27,852,501 monthly listeners</p>
        </div>
      </div>

      {/* Singer image positioned on top and larger */}
      <img
        src={artistImagePath}
        alt="Artist"
        className="absolute -top-16 right-28 h-72 w-auto z-20" // Place above and larger than the background card
      />
    </div>
  );
};

export default ArtistCard;
