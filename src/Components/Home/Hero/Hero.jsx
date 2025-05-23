import React from 'react';
import heroBg from "../../../assets/img/convocation.jpeg";

const Hero = () => {
    return (
        <div
            className="hero min-min-h-screen"
            style={{
                backgroundImage: `url(${heroBg})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold capitalize">Your gateway to campus life starts here</h1>
                    <p className="mb-5">
                        Easily explore, book, and review your dream college with just a few clicks.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;