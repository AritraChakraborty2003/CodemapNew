/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="mt-[-3vmin] lg:mt-0 pb-8 bg-slate-50 newsletter flex flex-col justify-center items-center p-4 gap-y-4 w-screen">
        <p>
          <span className="text-blue-600">//</span>&nbsp;Our Newsletter
        </p>
        <p className="text-center font-medium text-[5vmin] text-gray-800 w-[96%] lg:w-[40%]">
          Subscribe to our newsletter{" "}
          <span className="text-blue-600">Expert IT Tips & Solutions</span>
        </p>
        <div className="msgHolder w-[96vw] lg:w-[60vw] ">
          <div className="inputBox flex gap-x-2 justify-center items-center">
            <input
              type="email"
              placeholder="Your Email Here..."
              className=" border-gray-300 border-1 w-[80%] lg:w-[50%] rounded-2xl"
              style={{
                padding: "1.95vmin",
              }}
            />

            <button
              className="text-xs bg-blue-600 text-white rounded-2xl"
              style={{
                padding: "3vmin",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
