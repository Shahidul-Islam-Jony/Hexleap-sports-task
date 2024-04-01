'use client'
import { PlayersType } from "@/types/type";
import Image from "next/image";
import { useState } from "react";

const Sports = () => {
    const [isShow, setIsShow] = useState(false);

    const players: PlayersType[] = [
        {
            id: 1,
            title: "Sacramento River Cats",
            events: 48,
            sport: "baseball",
            img: "/player-1.jpeg",
        },
        {
            id: 2,
            title: "Las Vegas Aviators",
            events: 28,
            sport: "Baseball",
            img: "/player-2.jpeg",
        },
        {
            id: 3,
            title: "new jersey devils",
            events: 15,
            sport: "Ice Hockey",
            img: "/player-6.jpeg",
        },
        {
            id: 4,
            title: "Las Vegas Aviators",
            events: 28,
            sport: "baseball",
            img: "/player-2.jpeg",
        },
        {
            id: 5,
            title: "Las Vegas Aviators",
            events: 28,
            sport: "baseball",
            img: "/player-3.jpeg",
        },
        {
            id: 6,
            title: "new jersey devils",
            events: 15,
            sport: "Ice Hockey",
            img: "/player-4.jpeg",
        },
        {
            id: 7,
            title: "Las Vegas Aviators",
            events: 28,
            sport: "baseball",
            img: "/player-5.jpeg",
        },
        {
            id: 8,
            title: "Sacramento River Cats",
            events: 48,
            sport: "baseball",
            img: "/player-7.jpeg",
        },
    ]
    return (
        <div>
            <h3 className="text-lg font-bold border-b-4 w-fit pt-10 ml-7 mb-4 border-blue-500">Sports</h3>
            <div className="grid grid-cols-10">
                {/* players */}
                <div className="col-span-8">
                    <div className="grid grid-cols-4 flex-1 gap-4 justify-center p-4">
                        {
                            players.slice(0, !isShow ? 4 : players.length).map(player => <div className="shadow-lg" key={player.id}>
                                <Image src={player.img} width={1000} height={1000} className="w-full h-96 border-8 rounded-t-md border-white" alt="playerImg"></Image>
                                <p className="border-8 font-medium text-lg border-white bg-white">{player.title}</p>
                                <div className="flex justify-between border-8 rounded-b-md border-white p-2 bg-gray-100">
                                    <p><span className="text-gray-600">Total Events</span> <br /> <span className="font-medium">{player.events} Events</span></p>
                                    <p><span className="text-gray-600">Sport</span> <br /> <span className="font-medium">{player.sport}</span></p>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className="flex justify-center mt-4">
                        {
                            isShow ? <button onClick={() => setIsShow(false)} className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Show Less</button> : <button onClick={() => setIsShow(true)} className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Show More</button>
                        }
                    </div>
                </div>
                {/* Ad */}
                <div className="col-span-2 mt-4 relative bg-white h-[510px] p-2 border-2">
                    <div className="border-2 border-green-300 pb-5">
                        <Image src='/adds.jpeg' className="w-full" width={1000} height={1000} alt="ads"></Image>
                        <span className="bg-black text-white px-6 py-2 absolute top-2 right-2">Ad</span>
                        <h3 className="font-bold text-lg mt-4 px-2">Advertisement title</h3>
                        <p className="px-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eum esse vitae quasi reprehenderit ut assumenda officia magnam! Ad architecto voluptatum ratione libero est nam veniam facilis dese.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sports;