import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TrackList = ({ tracks, onSelectTrack, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tracklist">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="text-white h-72 overflow-y-auto" // Set height and enable y-axis scroll
          >
            {/* Header Row */}
            <div className="flex justify-between text-gray-400 p-3 font-semibold border-b border-gray-600">
              <div className="flex items-center w-1/4 space-x-4">
                <span>#</span>
                <span>Title</span>
              </div>
              <div className="flex items-center justify-between w-3/4">
                <span className="w-1/3 text-center">Playing</span>
                <span className="w-1/3 text-center">Time</span>
                <span className="w-1/3 text-center">Album</span>
              </div>
            </div>

            {/* Track List Items */}
            {tracks.map((track, index) => (
              <Draggable key={track.id} draggableId={track.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`flex justify-between items-center p-3 ${
                      index % 2 === 0 ? '' : ''
                    } hover:bg-red-700 cursor-pointer`}
                    onClick={() => onSelectTrack(track)}
                  >
                    <div className="flex items-center w-1/4 space-x-4">
                      <span className="text-red-500">{index + 1}</span>
                      <img src={track.thumbnail} alt={`${track.title} cover`} className="h-10 w-10 rounded-md" />
                      <span>{track.title}</span>
                    </div>
                    <div className="flex items-center justify-between w-3/4">
                      <span className="w-1/3 text-center">{track.playing.toLocaleString()}</span>
                      <span className="w-1/3 text-center">{track.time}</span>
                      <span className="w-1/3 text-center">{track.album}</span>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TrackList;
