'use client'
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { SetDarkMode } from "@/types/type";
import './style.css'
import { slideData } from "./slideData";

const Slide = ({ darkMode, setDarkMode }: SetDarkMode) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite:true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite:true,
                },
            },
        ],
    };
    return (
        <div className={`slider-container py-12 mt-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
            <div className={`w-4/5 text-center mx-auto ${darkMode ? 'text-white' : 'text-black'}`}>
                <h2 className="text-5xl mb-4 font-bold">Collection Spotlight</h2>
                <p>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
            </div>
            <div className="w-11/12  mx-auto">
                <Slider {...settings}>
                    {
                        slideData.map(slide =>

                            <div key={slide.id} className="flex flex-col md:flex-row gap-2">
                                <div className={`w-80 p-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}>
                                    <div className="border-b-2 relative border-gray-300 border-dashed pb-4">
                                        <Image src={slide.img} className="w-full h-96" width={1000} height={1000} alt="player" />
                                        <div className={`absolute w-6 h-6 -left-5 -bottom-3 rounded-full ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}></div>
                                        <div className={`absolute w-6 h-6 -right-5 -bottom-3 rounded-full ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}></div>
                                    </div>
                                    <div>
                                        <h3 className="text-center py-5 text-lg font-medium">{slide.title}</h3>
                                        <p className="text-center">{slide.date}</p>
                                        <p className="text-center">{slide.des}</p>
                                        <div className="bg-black py-4 mt-4 text-white text-center">{slide.name}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
}

export default Slide;
