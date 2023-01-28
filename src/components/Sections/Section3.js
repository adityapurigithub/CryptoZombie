import React from "react";

const Section3 = () => {
  return (
    <div className="section-3 flex md:flex-row flex-col justify-center items-center my-8">
      <div className="flex flex-col md:items-start items-center  md:w-2/4 md:text-start text-center">
        <span className="md:text-5xl text-2xl font-bold p-2">
          Interactive Coding Lessons
        </span>
        <span className="text-gray-400 md:text-xl text-lg">
          In-browser step-by-step lessons take you from the very basics of
          Solidity to creating your own fully-functional blockchain-based game.
          Even by the end of Lesson 1 (which can be completed in one sitting),
          you'll know enough to officially call yourself a blockchain developer!
        </span>
      </div>

      <div className="md:w-1/2 px-5 md:m-0 my-9">
        <img src="https://cryptozombies.io/images/Group%201383.png" />
      </div>
    </div>
  );
};

export default Section3;
