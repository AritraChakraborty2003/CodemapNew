import React from "react";

interface Project {
  image: string;
  title: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className="relative w-[94vw] h-[69vmin] lg:w-[30%] lg:h-[39vmin] shadow-lg rounded-md overflow-hidden 
                 transition-transform duration-300"
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
        willChange: "transform", // Optimization
      }}
    >
      {/* Absolute Border to Prevent Shift */}
      <div className="absolute inset-0 border-2 border-gray-200 rounded-md pointer-events-none"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      {/* Title */}
      <div className="absolute bottom-4 left-2 text-white text-xl font-semibold">
        {project.title}
        <p className="text-xs font-normal mt-1">
          {project.description.slice(0, 50) + "..."}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
