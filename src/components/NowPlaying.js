import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';

const NowPlaying = ({ track, onNext, onPrevious }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (track) {
      if (player) {
        player.stop(); // Ensure stopping the previous song before starting a new one
      }
      const sound = new Howl({
        src: [track.audioSrc],
        html5: true // This should ensure the file is streamed
      });
      setPlayer(sound);
      sound.play();
      return () => {
        sound.unload(); // Unload the sound from memory when the component is unmounted or track changes
      };
    }
  }, [track]); // Dependency array, ensures effect runs only when track changes

  const handlePlay = () => player && player.play();
  const handlePause = () => player && player.pause();

  return (
    <div className="h-full p-5 bg-black text-white">
      <div className="bg-gray-800 p-3">
        {track ? (
          <>
            <h3 className="text-lg">{track.title} - {track.artist}</h3>
            <div className="flex justify-between items-center mt-2">
              <button onClick={onPrevious} className="bg-blue-500 p-2">Prev</button>
              <button onClick={handlePlay} className="bg-green-500 p-2 mx-1">Play</button>
              <button onClick={handlePause} className="bg-red-500 p-2 mx-1">Pause</button>
              <button onClick={onNext} className="bg-blue-500 p-2">Next</button>
            </div>
          </>
        ) : 'Select a track to play'}
      </div>
    </div>
  );
};

export default NowPlaying;
