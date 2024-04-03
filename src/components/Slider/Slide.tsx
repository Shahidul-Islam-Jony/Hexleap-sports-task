'use client'
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Slide = () => {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(600);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <h2> Resizable Collapsible </h2>
            <div className="w-4/5  mx-auto">
                <Slider {...settings}>
                    <div className="border-8 border-white">
                        <Image src='/player-1.jpeg' width={1000} height={1000} alt="player" />
                    </div>
                    <div className="border-8 border-white">
                        <Image src='/player-1.jpeg' width={1000} height={1000} alt="player" />
                    </div>
                    <div className="border-8 border-white">
                        <Image src='/player-1.jpeg' width={1000} height={1000} alt="player" />
                    </div>
                    <div className="border-8 border-white">
                        <Image src='/player-1.jpeg' width={1000} height={1000} alt="player" />
                    </div>
                    
                </Slider>
            </div>
        </div>
    );
}

export default Slide;
