// src/components/TrackList.js
import React from 'react';

const TrackList = ({ tracks, onSelectTrack }) => {
  return (
    <div className="bg-black text-white p-5 overflow-y-auto">
      {tracks.map((track, index) => (
        <div key={index} className="p-2 hover:bg-gray-800 cursor-pointer" onClick={() => onSelectTrack(track)}>
          <div className="flex items-center">
            <div className="text-red-500 mr-2">▶</div>
            <div className="flex flex-col">
              <span>{track.title}</span>
              <span className="text-gray-400 text-sm">{track.artist} - {track.album}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
