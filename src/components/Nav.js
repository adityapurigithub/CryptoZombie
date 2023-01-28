import React, { useState } from "react";
import { navSpan } from "../commonStyles/styles";

const Nav = () => {
  const [openSideBar, setSideBar] = useState(false);
  console.log(openSideBar);
  return (
    <div className="nav md:p-10 p-5 flex justify-between items-center">
      <img
        className="md:w-48 w-32"
        src="https://cryptozombies.io/images/CZ_logo_landscape.png"
      />
      <div className={`md:flex items-center hidden `}>
        <span className="px-5 text-lg text-gray-200 hover:text-sky-400 cursor-pointer font-semibold">
          BLOG
        </span>
        <span className="px-5 text-lg text-gray-200 hover:text-sky-400 cursor-pointer font-semibold">
          COURSES
        </span>
        <span className="px-5 text-lg text-gray-200 hover:text-sky-400 cursor-pointer font-semibold">
          ENGLISH
        </span>
        <button
          class="h-10 px-6 mr-6 font-semibold  text-white rounded-md bg-black text-white :hover-bg-blue-400"
          type="submit"
        >
          Start Course
        </button>
      </div>

      <div className="bars md:hidden flex w-6">
        <img
          className="cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/128/812/812847.png"
          onClick={() => setSideBar(!openSideBar)}
        />
      </div>
    </div>
  );
};

export default Nav;
