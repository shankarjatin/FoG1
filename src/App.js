import React from 'react';
import Sidebar from './components/Sidebar';
import PlayerControls from './components/PlayerControl';
import TrackList from './components/TrackList';
import './index.css';

function App() {
  return (
    <div className="bg-red flex">
      <Sidebar 
      className="w-1/4" />
      <div className="w-2/4" >
        <TrackList />
      </div>
      <PlayerControls 
       className="w-1/4"/>
    </div>
  );
}

export default App;
