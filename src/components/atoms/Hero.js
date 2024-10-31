import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: "url('cocktail-right.avif')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <h1 className="bg-gradient-to-r uppercase from-pink-500 to-yellow-400 bg-clip-text text-transparent text-4xl md:text-6xl font-bold max-w-[800px]">
          The Cocktail Collective
        </h1>
        <p className="text-white text-lg md:text-xl mt-7">
          Shake up your night with the perfect cocktail!
        </p>
      </div>
    </div>
  );
};

export default Hero;
