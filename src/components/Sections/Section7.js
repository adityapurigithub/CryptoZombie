import React from "react";

const Section7 = () => {
  return (
    <div className="section7 flex flex-col justify-center my-30">
      <div className="flex flex-col text-center ">
        <span className="md:text-5xl text-2xl font-bold">Token Info</span>
        <span className="md:text-xl text-lg text-gray-400 mb-10 ">
          The token will be used to incentivize users to complete courses, and
          interact with the CZ community.
        </span>
      </div>
      <div className="section-2 flex flex-col md:flex-row justify-center items-center my-8 md:text-start text-center">
        <div className="flex flex-col md:items-start items-center md:w-2/3 md:px-9">
          <span className="md:text-5xl text-2xl font-bold p-2">
            Token Rewards Play to Earn
          </span>
          <span className="text-gray-400 md:text-xl text-lg">
            We empower developers to learn and help others, providing the means
            to earn rewards for your contributions.
          </span>
          <span className="text-gray-400 md:text-xl text-lg py-10">
            We will be expanding the existing course format to a live, and more
            engaging format that’s hosted in the Metaverse. This will allow
            users to do live coding events, in which they can easily share their
            code/screen with an instructor or their peers, and interact with
            other students using chat, audio, or video.
          </span>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="https://cryptozombies.io/images/Group%201393.png" />
        </div>
      </div>
    </div>
  );
};

export default Section7;
