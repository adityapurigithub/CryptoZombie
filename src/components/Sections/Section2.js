import React from "react";

const Section2 = () => {
  return (
    <div className="section-2 flex flex-col md:flex-row justify-center items-center my-8">
      <div className="flex flex-col items-center md:items-start md:w-2/4">
        <span className="md:text-5xl text-2xl font-bold p-2">
          Why CryptoZombies is Different
        </span>
        <div className="flex justify-between items-center">
          <div className="flex flex-col py-5 mr-40">
            <img src="https://cryptozombies.io/images/Group%207%20(1).png" />
            <span className="text-gray-400 md:text-xl text-lg">Students</span>
          </div>
          <div className="flex flex-col py-5">
            <span className="md:text-3xl text-2xl font-bold">1M+</span>
            <span className="text-gray-400 md:text-xl text-lg">
              Classes Completed
            </span>
          </div>
        </div>
      </div>

      <div className="md:w-2/4 md:p-10 md:text-xl text-lg text-gray-400">
        <div className="py-4 ">
          CryptoZombies is the largest education platform for blockchain
          development, it’s been around for 4+ years, with over 400k registered
          users that have finished multiple courses.
        </div>
        <div className="my-4">
          CryptoZombies was the first tutorial on the internet for NFTs, and is
          still very relevant to the new crop of web3 developers looking to
          enter the industry today. Currently the CryptoZombies curriculum is
          mostly focused on Ethereum and Solidity development, but is a lot of
          demand for content targeting other chains such as Binance, TRON, and
          even projects like Chainlink.
        </div>
      </div>
    </div>
  );
};

export default Section2;
