import React from "react";

const Section1 = () => {
  return (
    <div className="section-1 flex md:flex-row flex-col justify-between items-center ">
      <div className="flex flex-col md:items-start items-center md:w-2/5 text-center md:text-start">
        <span className="md:text-5xl text-2xl font-bold p-2">
          Learn to Code Blockchain DApps by Building Simple Games
        </span>
        <span className="md:text-xl text-lg text-gray-400 p-2">
          CryptoZombies is an interactive school that teaches you all things
          technical about blockchains. Learn to write smart contracts by making
          your own crypto-collectibles game.
        </span>
        <button
          class="h-10 px-6 m-2 font-semibold bg-red-600 text-white rounded-md bg-black text-white"
          type="submit"
        >
          Courses
        </button>
      </div>

      <div className="md:w-1/2">
        <img src="https://cryptozombies.io/images/Group%201421.png" />
      </div>
    </div>
  );
};

export default Section1;
