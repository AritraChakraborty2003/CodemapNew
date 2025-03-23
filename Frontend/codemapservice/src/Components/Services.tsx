/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="bg-slate-100 w-screen lg:h-[75vh] overflow-hidden pt-6 pb-6 lg:pt-4 lg:pb-8">
      <div className="flex flex-col flex-wrap justify-center gap-y-5 2-[100%] ">
        <div className="flex w-[100%] ">
          <div className="headerArea w-[70%] lg:w-[80%]">
            <h1 className="text-gray-500 font-medium">
              <span className="ml-1 lg:ml-3 text-blue-600 font-bold ">//</span>
              &nbsp; &nbsp;Our Services
            </h1>
            <p
              className="ml-1 lg:ml-3 text-[6vmin] lg:text-[7vmin] lg:w-[60%] lg:h-[20vmin] lg:leading-18"
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

          <div className="w-[30%] lg:w-[20%] flex justify-end items-end mr-1 lg:mr-10">
            <button className="bg-blue-600 text-white p-3  text-xs lg:text-lg rounded-md">
              All Services
            </button>
          </div>
        </div>
        <div
          className="servicesArea w-screen flex flex-wrap items-center justify-center gap-x-3 gap-y-6 lg:gap-x-20"
          style={{ marginTop: "3vmin" }}
        >
          <ServiceCard
            image="/web_development.png"
            service="Web Development"
            details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, iusto
                      nihil placeat sapiente eius temporibus assumenda totam "
          />
          <ServiceCard
            image="/android.png"
            service="Android Development"
            details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, iusto
                      nihil placeat sapiente eius temporibus assumenda totam "
          />
          <ServiceCard
            image="/saas.png"
            service="Custom SaaS Development"
            details=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, iusto
                      nihil placeat sapiente eius temporibus assumenda totam "
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
