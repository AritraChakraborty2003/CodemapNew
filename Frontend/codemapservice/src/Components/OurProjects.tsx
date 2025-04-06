/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import ProjectCard from "./CARDS/ProjectCard";

const OurProjects = () => {
  const projects = [
    {
      title: "TanahSarees Estore",
      description:
        "TanahSarees is a luxurious and stylish saree collection made from 100% pure cotton.",
      image: "/Tanah.png",
    },
    {
      title: "Portfolio Website",
      description: "Portfolio Project",
      image: "/aritra_portfolio.png",
    },
    {
      title: "Portfolio",
      description: "Portfolio Project",
      image: "",
    },
  ];
  return (
    <>
      <div className="projects-area w-[100vw]  mt-8  pb-10">
        <div className="header">
          <p className="text-xs ml-2 lg:ml-5 mt-5">//Our Projects</p>
          <p className="w-[90%] lg:w-[48%] pb-2 text-[9vmin] lg:text-[7.75vmin]  ml-2 mt-2 lg:ml-5 font-extrabold text-gray-800 leading-[10.5vmin]">
            Take a look on our &nbsp;
            <span className="text-blue-500 ">latest projects</span>
          </p>
        </div>
        <div className="display-area  mt-3 ml-2 lg:ml-5 flex flex-wrap lg:gap-x-10 gap-y-8 lg:pt-7">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurProjects;
