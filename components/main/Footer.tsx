import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          
          {/* GitHub Link */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-20">
            <a
              href="https://github.com/salonigavde18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo size={24} />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>
          </div>

          {/* LinkedIn Link */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-20">
            <a
              href="https://linkedin.com/in/saloni-gavde-823356206"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo size={24} />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>

          {/* Email (Not clickable, just text) */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-20">
            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px] ml-[6px]">
                saloniigavde2002@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Fullstack Dev 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
