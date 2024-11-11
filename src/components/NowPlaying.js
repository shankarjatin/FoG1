// src/components/NowPlaying.js
import React from 'react';
import { Howl } from 'howler';

const NowPlaying = ({ track }) => {
  const [player, setPlayer] = React.useState(null);

  React.useEffect(() => {
    if (track) {
      const howl = new Howl({
        src: [track.audioSrc],
        html5: true,
        onplay: () => console.log('Music playing'),
        onstop: () => console.log('Music stopped'),
        onend: () => console.log('Music ended')
      });
      setPlayer(howl);
      howl.play();
      return () => howl.unload();
    }
  }, [track]);

  const handlePlay = () => player && player.play();
  const handlePause = () => player && player.pause();

  return (
    <div className="p-5 bg-black text-white fixed bottom-0 right-0 w-1/4">
      <div className="bg-gray-800 p-3">
        {track ? (
          <>
            <div className="text-lg">{track.title} - {track.artist}</div>
            <div className="flex mt-2">
              <button onClick={handlePlay} className="bg-green-500 p-2 mx-1">Play</button>
              <button onClick={handlePause} className="bg-red-500 p-2 mx-1">Pause</button>
            </div>
          </>
        ) : 'No track playing'}
      </div>
    </div>
  );
};

export default NowPlaying;
