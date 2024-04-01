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
        <div className="grid grid-cols-10">
            {/* players */}
            <div className="col-span-8">
                <div className="flex gap-4 justify-center p-4">
                    {
                        players.slice(0,!isShow? 4: players.length).map(player => <div key={player.id}>
                            <Image src={player.img} width={1000} height={1000} className="w-56 h-96 border-8 rounded-t-md border-white" alt="playerImg"></Image>
                            <p className="border-8 font-medium border-white bg-white">{player.title}</p>
                            <div className="flex justify-between border-8 rounded-t-md border-white p-2">
                                <p>Total Events <br /> <span>{player.events} Events</span></p>
                                <p>Sport <br /> <span>{player.sport}</span></p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            {/* Ad */}
            <div className="col-span-2 mt-4">
                <Image src='/adds.jpeg' className="w-full p-2 relative" width={1000} height={1000} alt="ads"></Image>
                <span className="bg-black text-white px-6 py-2 absolute top-6 right-20">Ad</span>
            </div>
        </div>
    );
};

export default Sports;