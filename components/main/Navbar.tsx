import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin"
          />

          
        </a>

        {/* Centered Links */}
        <div className="flex-grow flex justify-center">
          <div className="flex items-center justify-between w-auto h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer mx-4">
              About me
            </a>
            <a href="#skills" className="cursor-pointer mx-4">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer mx-4">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {/* Add additional elements like buttons or icons here */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
