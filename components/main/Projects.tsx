"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {/* Real-time Chat Application */}
        <ProjectCard
          src={["/messaging.png"]}
          title="Real-time Chat Application"
          description="A real-time chat application built on the MERN stack, utilizing Socket.io for seamless communication and JWT for secure user authentication."
          github="https://github.com/salonigavde18/chat-application"
        />

        {/* Automated Billing System */}
        <ProjectCard
          src={["/autobill.png"]}
          title="Automated Billing System"
          description="An AI-powered autonomous checkout system that uses computer vision and machine learning to identify products and generate a bill, running on a Raspberry Pi."
          github="https://github.com/salonigavde18/AutomatedBilling"
        />

        {/* Movie Review App */}
        <ProjectCard
          src={["/infowood.png"]}
          title="Movie Review App"
          description="A sleek React movie app that lets users search, explore, and discover movies with real-time updates and detailed information."
          github="https://github.com/salonigavde18/infowood"
        />
      </div>
    </div>
  );
};

export default Projects;
