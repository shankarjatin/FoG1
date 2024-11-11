import React from 'react';
import Sidebar from './components/Sidebar';
import PlayerControls from './components/PlayerControls';
import TrackList from './components/TrackList';
import './index.css';

function App() {
  return (
    <div className="bg-black min-h-screen text-white flex">
      <Sidebar />
      <div className="flex-grow">
        <TrackList />
      </div>
      <PlayerControls />
    </div>
  );
}

export default App;
