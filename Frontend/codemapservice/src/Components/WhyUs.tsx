/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const WhyUs = () => {
  return (
    <>
      <div className="w-screen  bg-blue-950">
        <div
          className="header"
          style={{
            marginTop: "5vmin",
            marginLeft: "1.75vmin",
          }}
        >
          <p className="text-white" style={{ marginLeft: "1.65vmin" }}>
            //&nbsp;&nbsp;Why Choose us?
          </p>

          <p
            className="text-white font-semibold text-4xl lg:text-5xl lg:w-[45%] lg:h-[19vmin] leading-14 lg:leading-16"
            style={{
              marginTop: "3vmin",
              marginLeft: "1.65vmin",
            }}
          >
            Why Trust Us For Your IT Needs?
          </p>
        </div>

        <div className="btnHolder w-[95vw]  flex justify-end">
          <button
            className="bg-blue-600 text-white rounded-3xl mt-[1vmin] lg:mt-0"
            style={{
              padding: "2vmin",
            }}
          >
            Get a Qoute
          </button>
        </div>
        <div className="flex flex-wrap w-screen">
          <div className="left w-[100vw] lg:h-[60vh] lg:w-[45%] border-1"></div>
          <div className="right w-[100vw] lg:h-[60vh] lg:w-[55%] border-1">
            <div className="flex flex-wrap w-[100%] h-1/2">
              <div className="w-[100%] lg:w-[50%]  border-1">Hi</div>
              <div className="w-[100%] lg:w-[50%] border-1">Hello</div>
            </div>
            <div className="flex flex-wrap w-[100%] h-1/2">
              <div className="w-[100%] lg:w-[50%] border-1">Hi</div>
              <div className="w-[100%] lg:w-[50%]  border-1">Hello</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
