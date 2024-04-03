'use client'
import { PlayersType, SetDarkMode } from "@/types/type";
import Image from "next/image";
import { useState } from "react";
import { GiMoon } from "react-icons/gi";
import { IoSunnySharp } from "react-icons/io5";
import {playersData} from './playersData';   // importing all player data

const Sports = ({ darkMode, setDarkMode }: SetDarkMode) => {
    const [isShow, setIsShow] = useState(false);
    return (
        <div>
            <div className="flex justify-between">
                <h3 className={`text-lg font-bold border-b-4 w-fit pt-10 lg:ml-7 mb-4 border-blue-500 ${darkMode ? 'text-white' : 'text-black'}`}>Sports</h3>
                <label htmlFor="BasicSwitch_NavigateUI" className="relative mt-14 md:mr-5 flex h-fit w-10 items-center rounded-full border border-sky-600">
                    <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
                    <div className="absolute inset-0 z-10 w-0  rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-sky-200"><IoSunnySharp onClick={() => setDarkMode(false)} className="text-lg" /></div>
                    <div className="z-20 size-4 rounded-full bg-sky-500 duration-200 peer-checked/toggle:translate-x-6"></div><GiMoon onClick={() => setDarkMode(true)} className="ml-1 text-lg" />
                </label>


            </div>
            <div className="grid md:grid-cols-6 lg:grid-cols-10">
                {/* players */}
                <div className="md:col-span-4 ml-2 lg:col-span-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 flex-1 gap-4 justify-center lg:p-4">
                        {
                            playersData.slice(0, !isShow ? 4 : playersData.length).map(player => <div className="shadow-lg" key={player.id}>
                                <Image src={player.img} width={1000} height={1000} className={`w-full h-96 border-8 rounded-t-md ${darkMode ? 'border-gray-700' : 'border-white'}`} alt="playerImg"></Image>
                                <p className={`border-8 font-medium text-lg ${darkMode ? 'border-gray-700 bg-gray-700 text-white' : 'border-white bg-white'}`}>{player.title}</p>
                                <div className={`flex justify-between border-8 rounded-b-md  p-2 ${darkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-white bg-gray-100'}`}>
                                    <p><span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Events</span> <br /> <span className="font-medium">{player.events} Events</span></p>
                                    <p><span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sport</span> <br /> <span className="font-medium">{player.sport}</span></p>
                                </div>
                            </div>)
                        }
                    </div>

                </div>
                {/* Ad */}
                <div className={`rounded-md md:ml-4 lg:ml-0 md:col-span-2 lg:mt-4 relative h-[510px] p-2  ${darkMode ? 'bg-gray-700' : ' bg-white'}`}>
                    <div className={`border-2 md:pb-3 lg:pb-5 ${darkMode ? 'border-none' : 'border-green-300'}`}>
                        <Image src='/adds.jpeg' className="w-full" width={1000} height={1000} alt="ads"></Image>
                        <span className="bg-black px-6 py-2 absolute m-0.5 top-2 right-2 text-white">Ad</span>
                        <h3 className={`font-bold text-lg mt-4 px-2 ${darkMode ? 'text-white' : 'text-black'}`}>Advertisement title</h3>
                        <p className={`px-2 ${darkMode ? 'text-white' : 'text-black'}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eum esse vitae quasi reprehenderit ut assumenda officia magnam! Ad architecto voluptatum ratione libero est nam veniam facilis dese.</p>
                    </div>
                </div>
            </div>
            {/* Show more button */}
            <div className="flex justify-center mt-4">
                {
                    isShow ? <button onClick={() => setIsShow(false)} className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Show Less</button> : <button onClick={() => setIsShow(true)} className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Show More</button>
                }
            </div>
        </div>
    );
};

export default Sports;