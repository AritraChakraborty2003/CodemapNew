/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div
      className="bg-slate-100 w-screen lg:h-[75vh] overflow-hidden"
      style={{
        paddingBottom: "3vmin",
      }}
    >
      <div className="flex flex-col flex-wrap justify-center gap-y-5">
        <div
          className="headerArea"
          style={{
            marginTop: "5vmin",
            marginLeft: "1.75vmin",
          }}
        >
          <h1
            className="text-gray-500 font-medium"
            style={{
              marginTop: "1vmin",
              marginBottom: "1vmin",
              marginLeft: "1vmin",
            }}
          >
            <span className="text-blue-600 font-bold">//</span>&nbsp; &nbsp;Our
            Services
          </h1>
          <p
            className="text-[6vmin] lg:text-[7vmin] lg:w-[50%] lg:h-[20vmin] lg:leading-18"
            style={{
              marginTop: "2vmin",
            }}
          >
            <span className="text-gray-800 font-extrabold">
              Services We provide to
            </span>{" "}
            <span className="text-blue-600 font-bold text-[6vmin]  lg:text-[6.75vmin]">
              {" "}
              Elevate Your Business
            </span>
          </p>
        </div>
        <div
          className="servicesArea w-screen flex flex-wrap items-center justify-center gap-x-5 gap-y-6 lg:gap-x-10"
          style={{ marginTop: "1vmin" }}
        >
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default Services;
