
"use client";

import { motion } from "framer-motion";

const ShowreelIntro = () => {
  return (
    <section className="w-full h-auto bg-black overflow-hidden pt-20 md:pt-0 min-h-[300px]">
      <div className="relative w-full aspect-video md:h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dni2duulw/video/upload/v1772491085/Showreel_cm5hoz.mp4?v=2" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>
    </section>
  );
};

export default ShowreelIntro;
