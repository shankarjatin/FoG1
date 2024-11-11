import React from 'react';

function TrackList() {
  // Dummy data
  const tracks = [
    { title: 'Billie Jean', artist: 'Michael Jackson' },
    { title: 'Beat It', artist: 'Michael Jackson' },
    // Add more tracks here
  ];

  return (
    <div className="p-10">
      <h2 className="text-xl mb-3">Popular</h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={index} className="mb-2">
            {track.title} by {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrackList;
