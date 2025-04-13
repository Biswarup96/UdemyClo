"use client";

import Image from "next/image";
import React from "react";

const Carsouelcomp = () => {
  return (
    <div className="relative w-full h-96 md:h-[32rem]">
      <div className="relative h-full overflow-hidden">
        {/* Hero Image */}
        <Image
          src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/2b90bd01-a579-4052-9fdc-761f5d98a9b2.png"
          alt="Featured Course"
          fill
          priority
          className="object-cover"
          quality={80}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 flex items-center">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-orange-500 mb-4">
              Learn the skills of tomorrow today
            </h1>
            <p className="text-lg text-black/90 mb-8">
              Access thousands of courses starting at just $9.99
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg shadow-lg transition-colors duration-300">
              Start Learning
            </button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className={`h-2 w-8 rounded-full transition-colors duration-300 ${
                index === 2 ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
          <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carsouelcomp;
