import React from "react";

const Section12 = () => {
  return (
    <div className="section12 flex flex-col my-10">
      <div className="flex flex-col">
        <span className="text-5xl font-bold py-5 md:text-left text-center">
          Latest News
        </span>
        <span className="text-xl text-gray-400">
          Insights from our team, user success stories, and how to get started.
        </span>
      </div>

      <div className="vids-sec flex flex-wrap">
        <div className=" card-1 flex flex-col justify-between md:w-1/2 p-5">
          <img src="https://cryptozombies.io/blog/images/cover/alchemy-live-event-highlights.png" />
          <div className="info p-5 flex flex-col gap-2">
            <span className="text-blue-400 cursor-pointer">
              alchemy ● nft ● live-event
            </span>
            <span className="text-xl font-bold">
              How to Build an NFT Gallery in 30 minutes Using Alchemy - Event
              Highlights
            </span>
            <span className="text-gray-400 ">2022-10-24</span>
            <span className="text-orange-300 text-xl font-bold cursor-pointer">
              Read more >
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between md:w-1/2 p-5">
          <img src="https://cryptozombies.io/blog/images/cover/radix-live-event-highlights.png" />
          <div className="info p-5 flex flex-col gap-2">
            <span className="text-blue-400 cursor-pointer">
              radix ● scrypto ● live-event
            </span>
            <span className="text-xl font-bold">
              Building CryptoZombies on Radix - Event Highlights
            </span>
            <span className="text-gray-400 ">2022-10-24</span>
            <span className="text-orange-300 text-xl font-bold cursor-pointer">
              Read more >
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between md:w-1/2 p-5">
          <img src="https://cryptozombies.io/blog/images/cover/interactive-solidity-workshop.png" />
          <div className="info p-5 flex flex-col gap-2">
            <span className="text-blue-400 cursor-pointer">
              solidity ● metaverse ● live-event
            </span>
            <span className="text-xl font-bold">
              Interactive Solidity Workshop - CryptoZombies Live Recap
            </span>
            <span className="text-gray-400 ">2022-10-24</span>
            <span className="text-orange-300 text-xl font-bold cursor-pointer">
              Read more >
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between md:w-1/2 p-5">
          <img src="https://cryptozombies.io/blog/images/cover/teach-blockchain-to-non-nerd.png" />
          <div className="info p-5 flex flex-col gap-2">
            <span className="text-blue-400 cursor-pointer">
              blockchain ● games
            </span>
            <span className="text-xl font-bold">
              How to Teach Your NON-NERD Friends (and Family) How Blockchain
              Works — While Having Fun
            </span>
            <span className="text-gray-400 ">2022-10-24</span>
            <span className="text-orange-300 text-xl font-bold cursor-pointer">
              Read more >
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between md:w-1/2 p-5">
          <img src="https://cryptozombies.io/blog/images/cover/cryptozombies-to-join-forces-with-happen-space.png" />
          <div className="info p-5 flex flex-col gap-2">
            <span className="text-blue-400 cursor-pointer">announcement</span>
            <span className="text-xl font-bold">
              CryptoZombies to Join Forces with Happen Space
            </span>
            <span className="text-gray-400 ">2022-08-31</span>
            <span className="text-orange-300 text-xl font-bold cursor-pointer">
              Read more >
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between md:w-1/2 p-5">
          <img src="https://cryptozombies.io/blog/images/cover/sept-solidity-workshop-ed-zynda.png" />
          <div className="info p-5 flex flex-col gap-2">
            <span className="text-blue-400 cursor-pointer">
              solidity ● metaverse ● live-event
            </span>
            <span className="text-xl font-bold">
              Sept sees return of popular online Solidity workshop -
              CryptoZombies Live
            </span>
            <span className="text-gray-400 ">2022-10-24</span>
            <span className="text-orange-300 text-xl font-bold cursor-pointer">
              Read more >
            </span>
          </div>
        </div>
      </div>
      <div className="btn my-20 w-100 text-center">
        <button className="p-4 px-5 bg-green-700 rounded">View All Post</button>
      </div>
    </div>
  );
};

export default Section12;
