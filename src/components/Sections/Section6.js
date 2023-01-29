import React from "react";

const Section6 = () => {
  return (
    <div className="section6 flex flex-col my-32">
      <div className="flex flex-col items-center mb-8">
        <span className="md:text-4xl text-3xl font-bold mb-4">Roadmap</span>
        <span className="text-gray-500 text-center md:text-xl text-lg md:w-3/4">
          The roadmap illustrates what we're working on. We are continuously
          updating it based on your feedback.
        </span>
      </div>
      <div className="flex flex-col gap-5 md:gap-2 md:flex-row justify-center">
        <div className="flex flex-col justify-between border-l border-dashed px-2 md:w-1/3 ">
          <span className="text-lg text-gray-200 mb-4 font-semibold px-3  before:content-['🟢'] before:relative before:right-8 ">
            Migrate the CZ Telegram room to our community chat
          </span>
          <span className="text-lg text-gray-200 my-5 font-semibold px-3 before:content-['🟢'] before:relative before:right-8 ">
            Reputation Points Participation Rewards
          </span>
          <span className="text-lg text-gray-200 my-5 font-semibold px-3 before:content-['🟢'] before:relative before:right-8 ">
            Launch CZ Token on the BNB chain
          </span>
          <span className="text-lg text-gray-200 mt-4 font-semibold px-3 before:content-['🟢'] before:relative before:right-8 ">
            Host More Live Events
          </span>
        </div>

        <div className="flex flex-col justify-between border-l border-dashed px-2 md:w-1/3">
          <span className="text-lg text-gray-200 mb-4 font-semibold px-3 before:content-['🟢'] before:relative before:right-8 ">
            Deploy CZ Token bridge
          </span>
          <span className="text-lg text-gray-200 my-5 font-semibold px-3 before:content-['🟢'] before:relative before:right-8 ">
            Launch "Code Together" Expand the CZ Course Offering Premium Courses
            NFT Collection
          </span>
          <span className="text-lg text-gray-200 my-5 font-semibold px-3 before:content-['🟢'] before:relative before:right-8 ">
            CZ Testnet
          </span>
        </div>

        <div className="flex flex-col justify-between border-l border-dashed px-2 md:w-1/3">
          <span className="text-lg text-gray-200 mb-4 font-semibold px-3 before:content-['🟢'] before:relative before:right-8 ">
            NFT Marketplace (Testnet)
          </span>
          <span className="text-lg text-gray-200 my-5 font-semibold px-3 before:content-['🟢'] before:relative before:right-8 ">
            CZ Mainnet
          </span>
          <span className="text-lg text-gray-200 my-5 font-semibold px-3 before:content-['🟢'] before:relative before:right-8 ">
            Staking Token Bridge (Mainnet) NFT Bridge (Mainnet)
          </span>
          <span className="text-lg text-gray-200 mt-4 font-semibold px-3 before:content-['🟢'] before:relative before:right-8 ">
            Q&A Board Jobs Board iPad Support
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section6;
