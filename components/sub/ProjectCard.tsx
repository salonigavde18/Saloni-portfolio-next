import React from "react";

interface ProjectCardProps {
  src: string[]; // Assuming this is an array of image URLs
  title: string;
  description: string;
  github: string; // GitHub link prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, title, description, github }) => {
  return (
    <div className="project-card border p-4 rounded-lg shadow-lg flex flex-col items-center">
      {/* Image */}
      <img src={src[0]} alt={title} className="project-image w-full h-full object-cover mb-4 rounded" />

      {/* Project Title */}
      <h2 className="project-title text-white text-xl font-semibold mb-2">{title}</h2>

      {/* Project Description */}
      <p className="project-description text-gray-500 mb-4 text-center">{description}</p>

      {/* GitHub Link */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link text-blue-500 underline z-20"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
