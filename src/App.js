import React from "react";
import Sidebar from "./components/Sidebar";
import PlayerControls from "./components/PlayerControl";
import MainPlayer from "./components/MainPlayer";
import "./index.css";


function App() {
  return (
    <div className="flex flex-row h-screen">
    <div className="w-1/5">
      <Sidebar />
    </div>
    <div className="w-4/5">
      <MainPlayer />
    </div>
   
  </div>
  );
}

export default App;
