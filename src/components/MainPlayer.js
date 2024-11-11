import React, { useState, useEffect } from "react";
import TrackList from "./TrackList";
import NowPlaying from "./NowPlaying";
import Navbar from "./Navbar";
import * as mm from 'music-metadata-browser';  // Import music-metadata-browser
import song1 from '../assets/Bekhayali.mp3';
import song2 from '../assets/Kaisehua.mp3';

const initialTracks = [
  {
    id: '1',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thriller 25 Super Deluxe',
    audioSrc: song1,
    playing: 1040811084,
    time: '4:53',
    thumbnail:  'https://picsum.photos/200/300',  // Initially 'https://picsum.photos/200/300', will be updated with the extracted thumbnail
  },
  {
    id: '2',
    title: 'Beat It',
    artist: 'Michael Jackson',
    album: 'Thriller 25 Super Deluxe',
    audioSrc: song2,
    playing: 643786045,
    time: '4:18',
    thumbnail: 'https://picsum.photos/id/237/200/300',  // Initially 'https://picsum.photos/200/300', will be updated with the extracted thumbnail
  },
  {
    id: '3',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thriller 25 Super Deluxe',
    audioSrc: song1,
    playing: 1040811084,
    time: '4:53',
    thumbnail: 'https://picsum.photos/seed/picsum/200/300',  // Initially 'https://picsum.photos/200/300', will be updated with the extracted thumbnail
  },
  {
    id: '4',
    title: 'Beat It',
    artist: 'Michael Jackson',
    album: 'Thriller 25 Super Deluxe',
    audioSrc: song2,
    playing: 643786045,
    time: '4:18',
    thumbnail: 'https://picsum.photos/200/300?grayscale',  // Initially 'https://picsum.photos/200/300', will be updated with the extracted thumbnail
  },
  {
    id: '5',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thriller 25 Super Deluxe',
    audioSrc: song1,
    playing: 1040811084,
    time: '4:53',
    thumbnail: 'https://picsum.photos/200/300/?blur=2',  // Initially 'https://picsum.photos/200/300', will be updated with the extracted thumbnail
  },
  {
    id: '6',
    title: 'Beat It',
    artist: 'Michael Jackson',
    album: 'Thriller 25 Super Deluxe',
    audioSrc: song2,
    playing: 643786045,
    time: '4:18',
    thumbnail: 'https://picsum.photos/200/300',  // Initially 'https://picsum.photos/200/300', will be updated with the extracted thumbnail
  },
  {
    id: '7',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thriller 25 Super Deluxe',
    audioSrc: song1,
    playing: 1040811084,
    time: '4:53',
    thumbnail: 'https://picsum.photos/200/300',  // Initially 'https://picsum.photos/200/300', will be updated with the extracted thumbnail
  },
  {
    id: '8',
    title: 'Beat It',
    artist: 'Michael Jackson',
    album: 'Thriller 25 Super Deluxe',
    audioSrc: song2,
    playing: 643786045,
    time: '4:18',
    thumbnail: 'https://picsum.photos/200/300',  // Initially 'https://picsum.photos/200/300', will be updated with the extracted thumbnail
  },
  // more tracks...
];

const MainPlayer = () => {
  const [tracks, setTracks] = useState(initialTracks);
  const [currentTrack, setCurrentTrack] = useState('https://picsum.photos/200/300');

  // Fetch metadata for each track, including the thumbnail
  useEffect(() => {
    const fetchThumbnails = async () => {
      const updatedTracks = await Promise.all(tracks.map(async (track) => {
        if (track.thumbnail) return track; // Skip if thumbnail already exists

        try {
          const metadata = await mm.fetchFromUrl(track.audioSrc);
          const picture = metadata.common.picture?.[0];
          const thumbnailUrl = picture ? URL.createObjectURL(new Blob([picture.data], { type: picture.format })) : 'https://picsum.photos/200/300';
          return { ...track, thumbnail: thumbnailUrl };
        } catch (error) {
          console.error(`Failed to fetch metadata for ${track.title}:`, error);
          return track;
        }
      }));

      setTracks(updatedTracks);
    };

    fetchThumbnails();
  }, [tracks]);

  const handleSelectTrack = (track) => {
    setCurrentTrack(track);
  };

  const handleNext = () => {
    const index = tracks.findIndex(t => t === currentTrack);
    if (index !== -1 && index < tracks.length - 1) {
      setCurrentTrack(tracks[index + 1]);
    }
  };

  const handlePrevious = () => {
    const index = tracks.findIndex(t => t === currentTrack);
    if (index > 0) {
      setCurrentTrack(tracks[index - 1]);
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedTracks = Array.from(tracks);
    const [movedTrack] = reorderedTracks.splice(result.source.index, 1);
    reorderedTracks.splice(result.destination.index, 0, movedTrack);
    setTracks(reorderedTracks);
  };

  return (
    <div className="flex flex-row h-screen bg-red-800">
      <div className="w-4/6">
        <Navbar />
        <TrackList tracks={tracks} onSelectTrack={handleSelectTrack} onDragEnd={onDragEnd} />
      </div>
      <div className="w-2/6 bg-black">
        <NowPlaying
          track={currentTrack}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
    </div>
  );
};

export default MainPlayer;
