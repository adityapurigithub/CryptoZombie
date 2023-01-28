import React from "react";

const Section4 = () => {
  return (
    <div className="section-2 flex flex-col-reverse md:flex-row justify-center items-center my-8">
      <div className="md:w-1/2 flex justify-center">
        <img src="https://cryptozombies.io/images/Group%201381.png" />
      </div>
      <div className="flex flex-col items-center md:items-start md:w-2/4 text-center md:text-start">
        <span className="md:text-5xl text-2xl font-bold p-2">
          Build a Zombie Army
        </span>
        <span className="text-gray-400 md:text-xl text-lg">
          After completing all lessons and deploying your DApp, pit your zombie
          army against other players' zombies in one of the world's first
          blockchain-based games! Half code-school, half MMO crypto-collectible
          strategy game.
        </span>
      </div>
    </div>
  );
};

export default Section4;
