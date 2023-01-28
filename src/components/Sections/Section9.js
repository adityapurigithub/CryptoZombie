import React from "react";

const Section9 = () => {
  return (
    <div className="section9 flex flex-col md:flex-row justify-center items-center my-10 text-center md:text-left">
      <div className="flex flex-col items-start md:w-2/3 px-4 md:px-9 text-lg">
        <span className="md:text-5xl text-2xl font-bold p-2">
          Zombie BattleGround Cards
        </span>
        <span className="text-gray-400 md:text-xl">
          CryptoZombies will be introducing a token that is going to be utilized
          in “Play to Earn” strategy.
        </span>
        <span className="text-gray-400 md:text-xl py-4">
          The token will be used to incentivize users to complete courses, and
          use the CZ site or mobile apps daily to interact with the CZ
          community.
        </span>
        <span className="text-gray-400 md:text-xl py-4">
          We intend to expand the current CZ community by moving it from
          Telegram to our own iOS & Android apps that will let users chat about
          blockchain development, and ask questions in a StackOverflow type
          format.
        </span>
      </div>
      <div className="flex justify-center md:p-20">
        <img src="https://cryptozombies.io/images/Group%201387.png" />
      </div>
    </div>
  );
};

export default Section9;
