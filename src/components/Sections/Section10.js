import React from "react";

const Section10 = () => {
  return (
    <div className="section10 flex flex-col-reverse md:flex-row justify-center items-center gap-5 my-12">
      <div className="flex justify-center md:p-32 ">
        <img src="https://cryptozombies.io/images/level-complete%201.png" />
      </div>
      <div className="flex flex-col items-center md:items-start md:w-1/2 px-9">
        <span className="md:text-5xl text-2xl font-bold p-2">
          Course Completion NFTs
        </span>
        <span className="text-gray-400 md:text-xl">
          Rollout NFT certificates for course completion, each user will get a
          personalized NFT certificate for the courses they complete.
        </span>
      </div>
    </div>
  );
};

export default Section10;
