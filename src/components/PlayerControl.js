import React from 'react';
import { PlayIcon, PauseIcon, RewindIcon, FastForwardIcon } from '@heroicons/react/solid';

function PlayerControls() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 p-4 flex justify-between items-center">
      <div>Currently playing: Beat It</div>
      <div className="flex items-center space-x-4">
        <RewindIcon className="h-5 w-5 cursor-pointer" />
        <PlayIcon className="h-5 w-5 cursor-pointer" />
        <PauseIcon className="h-5 w-5 cursor-pointer" />
        <FastForwardIcon className="h-5 w-5 cursor-pointer" />
      </div>
    </div>
  );
}

export default PlayerControls;
