import React from "react";

const Section8 = () => {
  return (
    <div className="section8 flex flex-col md:flex-row justify-center items-center my-36 md:text-start text-center">
      <div className="md:w-1/2 flex justify-center">
        <img src="https://cryptozombies.io/images/Group.png" />
      </div>
      <div className="flex flex-col items-start md:w-2/3 md:px-9 ">
        <span className="md:text-5xl text-2xl font-bold text-center p-2">
          Why token is Important
        </span>
        <span className="text-gray-400 md:text-xl text-lg">
          CryptoZombies will be introducing a token that is going to be utilized
          in “Play to Earn” strategy. The token will be used to incentivize
          users to complete courses, and use the CZ site or mobile apps daily to
          interact with the CZ community.
        </span>
        <span className="text-gray-400 md:text-xl text-lg py-10">
          The CZ tokens will be bought back and burned when users pay for
          courses.
        </span>
      </div>
    </div>
  );
};

export default Section8;
