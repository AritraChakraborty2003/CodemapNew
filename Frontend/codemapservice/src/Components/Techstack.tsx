/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React from "react";
import { useState } from "react";
const Techstack = () => {
  const [active, setActive] = useState("Web Development Stack");

  const tabs = [
    "Web Development Stack",
    "Android Development Stack",
    "Cloud and DevOps Stack",
    "Tools & Technologies Stack",
  ];

  return (
    <>
      <div>
        <p className="text-[9vmin] text-gray-800 ml-5 mt-9  font-extrabold">
          Our Tech <span className="text-blue-500">Stack</span>
        </p>
        <p className="ml-6 mt-1 text-sm">
          // The Tech stack we work with for our projects
        </p>
      </div>
      <div className="w-[100vw] mt-12  flex flex-wrap pb-10 items-center pl-8">
        <div className="left w-[40vw] flex justify-center items-center ">
          <ul className="flex flex-col w-[40vw] justify-end items-start p-5 border-gray-300 border-r-[1px] text-gray-700 gap-y-14 text-[3vmin] font-semibold ml-10">
            <ul className="flex flex-col gap-y-12">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  onClick={() => setActive(tab)}
                  className="cursor-pointer w-[40vw]"
                >
                  {tab}
                  <div
                    className={`rounded-lg line h-1 w-[65%] mt-3 ${
                      active === tab ? "bg-blue-500" : "bg-gray-200"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </ul>
        </div>

        <div className="right w-[50vw] flex justify-center items-center flex-wrap gap-x-10 gap-y-10"></div>
      </div>
    </>
  );
};

export default Techstack;
