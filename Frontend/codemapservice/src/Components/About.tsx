/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="flex flex-wrap w-screen lg:pb-2">
          <div className="left flex justify-center items-center w-[100%] lg:h-[78vh] xl:h-[65vh] lg:w-1/2">
            <Image
              src="/about_us.jpg"
              alt="About Us"
              width={650}
              height={650}
            />
          </div>
          <div className="left w-[100%] lg:h-[78vh] xl:h-[65vh] lg:w-1/2">
            <div className="h-[100%] flex flex-col gap-y-7 justify-center pl-[3vmin]">
              <p className="font-medium text-sm">
                <span className="text-blue-600 font-bold">//</span>&nbsp; About
                us
              </p>

              <p className="text-[6vmin] font-semibold w-[95%] -mt-[2vmin]">
                Transforming{" "}
                <span className="text-blue-600">
                  Ideas into Digital Reality
                </span>
              </p>

              <p className="text-sm xl:text-[2.05vmin] w-[85%] lg:leading-7 xl:leading-9 2xl:leading-12">
                We at Codemap provide scalable, robust, and affordable IT
                solutions to our clients. From development to maintenance, we do
                it all. Give us the opportunity to bring your digital dream to
                life.
              </p>

              <div className="infoHolder flex mt-[1.5vmin]">
                {[
                  { value: "50+", label: "Projects" },
                  { value: "4+", label: "Years of Experience" },
                  { value: "99%", label: "Client Satisfaction Rate" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-y-3 w-[30%] h-[10vmin] justify-center items-center border-r last:border-none"
                  >
                    <p className="text-blue-600 text-3xl 2xl:text-4xl">
                      {item.value}
                    </p>
                    <p className="text-gray-800 text-sm 2xl:text-xl">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile about section */}
      <div className="block lg:hidden">
        <div className="flex flex-wrap w-screen">
          <div className="left w-[100%] flex justify-center items-center mt-[4vmin]">
            <Image
              src="/about_us.jpg"
              alt="About Us"
              width={350}
              height={350}
            />
          </div>
          <div className="left w-[100%] pb-[6vmin]">
            <div className="h-[100%] flex flex-col gap-y-5 justify-center pl-[3vmin]">
              <p className="font-medium text-sm mt-[5vmin]">
                <span className="text-blue-600 font-bold">//</span>&nbsp; About
                us
              </p>

              <p className="text-[6vmin] font-semibold mt-[0.25vmin]">
                Transforming{" "}
                <span className="text-blue-600">
                  Ideas into Digital Reality
                </span>
              </p>

              <p className="text-xs w-[94%] leading-[7vmin]">
                We at Codemap provide scalable, robust, and affordable IT
                solutions to our clients. From development to maintenance, we do
                it all. Give us the opportunity to bring your digital dream to
                life.
              </p>

              <div className="infoHolder flex mt-2 lg:mt-6">
                {[
                  { value: "50+", label: "Projects" },
                  { value: "4+", label: "Years of Experience" },
                  { value: "99%", label: "Satisfaction Rate" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-y-3 w-[32%] p-2 justify-center items-center border-r last:border-none"
                  >
                    <p className="text-blue-600 text-xl">{item.value}</p>
                    <p className="text-gray-800 text-[2.75vmin]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
