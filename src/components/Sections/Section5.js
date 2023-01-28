import React from "react";

const Section5 = () => {
  return (
    <div className="section-5 flex md:flex-row flex-col justify-center items-center my-8">
      <div className="flex flex-col md:items-start items-center md:w-2/4 text-center">
        <span className="md:text-5xl text-2xl font-bold p-2">
          Expand the Course Format
        </span>
        <span className="text-gray-400 md:text-xl text-lg">
          We will be expanding the existing course format to a live, and more
          engaging format that’s hosted in the Metaverse. This will allow you to
          do live coding events, in which yoou can easily share your code/screen
          with an instructor or your peers, and interact with other students
          using chat, audio, or video.
        </span>
        <span className="text-gray-400 md:text-xl text-lg py-10">
          And you know the best part? Everything is completely free!
        </span>
        <button
          class="h-10 px-6 mr-6 font-semibold  text-white rounded-md bg-green-700 text-white :hover-bg-blue-400"
          type="submit"
        >
          Courses
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center md:m-0 mt-10 ">
        <img src="https://cryptozombies.io/images/Group%201379.png" />
      </div>
    </div>
  );
};

export default Section5;
