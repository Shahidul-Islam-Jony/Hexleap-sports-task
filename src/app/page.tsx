'use client'
import Slide from "@/components/Slider/Slide";
import Sports from "@/components/Sports/Sports";
import { useState } from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main className={`min-h-screen ${darkMode ? 'bg-gray-800':'bg-gray-200'}`}>
      <div className="w-11/12 mx-auto">
        <Sports darkMode={darkMode} setDarkMode={setDarkMode}/>
      </div>
      <div className="w-11/12 mx-auto">
        <Slide darkMode={darkMode} setDarkMode={setDarkMode}></Slide>
      </div>
    </main>
  );
}
