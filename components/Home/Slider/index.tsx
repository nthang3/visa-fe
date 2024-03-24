"use client"
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slider = () => {
    const images = [
        "/images/banner1.jpg",
        "/images/banner2.jpg",
        "/images/banner3.jpg",
    ];

    return (
        <Zoom scale={1.4} indicators={false}>
            {images.map((each, index) => (
                <div key={index} style={{ width: "100%" }}>
                    <img style={{ objectFit: "cover", width: "100%" }} alt="Slide Image" src={each} />
                </div>
            ))}
        </Zoom>
    );
};

export default Slider;