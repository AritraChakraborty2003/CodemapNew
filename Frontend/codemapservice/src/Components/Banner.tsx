/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-screen h-[80vh] lg:h-[77vh]">
      {/* Background Image */}
      <div
        className=" absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/IT_Background.jpg')" }}
      ></div>

      {/* Black Overlay with Proper Transparency */}
      <div className=" absolute inset-0 bg-black/62"></div>

      {/* Text Content (Ensures Readability) */}
      <div className=" absolute inset-0 left-3 lg:left-10 flex flex-col items-start justify-center gap-y-4  text-white text-center">
        <div>
          <p className="text-xs lg:text-sm">
            // Experience Best IT Solution in India
          </p>
        </div>
        <div className="">
          <p className="leading-10 lg:leading-[7min]  lg:w-[47vw] text-3xl 2xl:text-7xl font-medium lg:text-6xl text-start ">
            Where Creativity Meets Cutting-Edge Technology
          </p>
        </div>
        <div>
          <p className="text-xs lg:text-sm  lg:w-[36vw] text-start leading-6 lg:leading-8">
            We specialize in delivering cutting-edge IT solutions tailored to
            your business needs and requirements.From custom web and app
            development to all your software needs we do it all
          </p>
        </div>

        <div
          className="flex gap-x-12 justify-center items-center"
          style={{
            marginTop: "2.35vmin",
          }}
        >
          <button
            className="bg-blue-500 text-white"
            style={{
              paddingLeft: "2.5vmin",
              paddingRight: "2.5vmin",
              paddingTop: "1.5vmin",
              paddingBottom: "1.5vmin",
              borderRadius: "5px",
            }}
          >
            Learn More&nbsp;&nbsp;
            <a className="">
              <i className="ri-arrow-right-line  text-white text-md"></i>
            </a>
          </button>
          <p className="text-white border-b-1">View all Services</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
