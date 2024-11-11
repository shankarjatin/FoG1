import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';

const NowPlaying = ({ track, onNext, onPrevious }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (track) {
      if (player) {
        player.stop(); // Stop the previous song before starting a new one
      }
      const sound = new Howl({
        src: [track.audioSrc],
        html5: true, // Stream the audio
      });
      setPlayer(sound);
      sound.play();
      return () => {
        sound.unload(); // Unload the sound from memory when component unmounts or track changes
      };
    }
  }, [track]);

  const handlePlay = () => player && player.play();
  const handlePause = () => player && player.pause();

  return (
    <div className="relative w-full h-full bg-black">
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-900 text-white rounded-lg p-4 w-64 shadow-lg">
        <h3 className="text-center text-sm mb-2 font-semibold">Now Playing</h3>
        {track ? (
          <>
            <div className="rounded-lg overflow-hidden mb-4">
              <img src={track.thumbnail} alt={`${track.title} cover`} className="w-full h-40 object-cover" />
            </div>
            <div className="text-center mb-2">
              <h3 className="text-lg font-semibold">{track.title}</h3>
              <p className="text-sm text-gray-300">{track.artist}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs">2:15</span>
              <input
                type="range"
                min="0"
                max="100"
                className="flex-grow mx-2"
              />
              <span className="text-xs">4:18</span>
            </div>
            <div className="flex justify-center items-center mt-4 space-x-4">
              <button onClick={onPrevious} className="text-lg">⏮️</button>
              <button onClick={handlePlay} className="text-lg">▶️</button>
              <button onClick={handlePause} className="text-lg">⏸️</button>
              <button onClick={onNext} className="text-lg">⏭️</button>
            </div>
          </>
        ) : (
          <p className="text-center">Select a track to play</p>
        )}
      </div>
    </div>
  );
};

export default NowPlaying;
