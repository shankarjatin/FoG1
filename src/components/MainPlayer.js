// src/components/MainPlayer.js
import React, { useState } from 'react';
import TrackList from './TrackList';
import NowPlaying from './NowPlaying';
import Navbar from './Navbar';

const tracks = [
  // Add your tracks here
  { title: 'Billie Jean', artist: 'Michael Jackson', album: 'Thriller 25 Super Deluxe Edition', audioSrc: 'path_to_music.mp3' },
  // more tracks...
];

const MainPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <div className="flex h-screen">
      <div className="h-full w-3/4">
      <Navbar />
        <TrackList tracks={tracks} onSelectTrack={setCurrentTrack} />
      </div>
      <div className=" h-full w-1/4">
      <NowPlaying track={currentTrack} />
      </div>
    </div>
  );
};

export default MainPlayer;
