/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React from "react";
import Image from "next/image";
// import Tilt from "react-parallax-tilt";
const About = () => {
  return (
    <div className="bg-slate-100 lg:h-[80vh] flex flex-wrap w-screen">
      <div className="w-[100%] lg:w-[50%] border-1">
        <div className="block lg:hidden ">
          <div
            className="flex justify-center items-center"
            style={{
              marginTop: "6vmin",
            }}
          >
            <Image src="/about_us.jpg" alt="Logo" width={330} height={330} />
          </div>
        </div>

        <div className="hidden lg:block ">
          <div
            className="flex justify-center items-center"
            style={{
              marginTop: "6vmin",
            }}
          >
            <Image src="/about_us.jpg" alt="Logo" width={660} height={660} />
          </div>
        </div>
      </div>
      <div className="w-[100%] lg:w-[50%] border-1">
        <div className="rightHolder flex flex-col gap-y-5">
          <p>
            <span className="text-blue-500">//</span> About us
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
