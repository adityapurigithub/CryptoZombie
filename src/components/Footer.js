import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center px-10">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col items-center gap-5">
          <span className="text-3xl font-bold">Stay Updated</span>
          <span className="text-lg text-gray-500 font-semibold">
            Join our mailing list to stay in the loop with our newest feature
            releases
          </span>
        </div>
        <div className="flex my-20 justify-center">
          <input
            class="border border-slate-400 bg-transparent rounded py-2 px-5 text-gray-700 leading-tight focus:outline-1"
            id="username"
            type="text"
            placeholder="Enter Email address"
          />
          <button className="p-2 px-5 bg-pink-800">Submit</button>
        </div>
        <div className="flex flex-col md:flex-row md:justify-evenly items-center md:items-start justify-center md:px-10 px-2 text-center md:text-justify">
          <div className="md:w-1/2 flex flex-col md:items-start items-center">
            <img
              className="md:w-1/4 w-1/3 py-4"
              src="https://cryptozombies.io/images/CZ_logo_landscape.png"
            />
            <span className="text-gray-500">
              Learn to Code Blockchain DApps by Building Simple Games
            </span>
          </div>

          <div className="flex flex-col justify-between gap-2 my-5 ">
            <span className="font-bold">Get Started</span>
            <span className="cursor-pointer text-gray-500">Blog</span>
            <span className="cursor-pointer text-gray-500">Courses</span>

            <span className="cursor-pointer text-gray-500">
              What is BlockChain?
            </span>
          </div>

          <div className="flex flex-col justify-between md:mx-20 gap-2 my-5 ">
            <span className="font-bold">Get In Touch</span>
            <span className="cursor-pointer text-gray-500">Github</span>
            <span className="cursor-pointer text-gray-500">Twitter</span>
            <span className="cursor-pointer text-gray-500">News Letter</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:text-lg text-sm md:px-20 mb-5 mt-20 text-gray-400">
        <span className="w-2/4">
          © Copyright 2022 Cryptozombies All Rights Reserved
        </span>
        <span className="cursor-pointer">Privacy Policy</span>
        <span className="cursor-pointer">Cookies</span>
        <span className="cursor-pointer">Terms</span>
      </div>
    </div>
  );
};

export default Footer;
