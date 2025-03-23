/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React from "react";
import Image from "next/image";
// import Tilt from "react-parallax-tilt";
const About = () => {
  return (
    <>
      <div className=" hidden lg:block ">
        <div className=" flex flex-wrap w-screen pb-10 xl:pt-10">
          <div className="left flex justify-center items-center w-[100%] lg:h-[78vh] xl:h-[65vh]  lg:w-1/2">
            <Image
              src="/about_us.jpg"
              alt="About Us"
              width={650}
              height={650}
            />
          </div>
          <div className="left w-[100%]  lg:h-[78vh] xl:h-[65vh] lg:w-1/2 ">
            <div
              className="h-[100%] flex flex-col gap-y-7 justify-center"
              style={{
                paddingLeft: "3vmin",
              }}
            >
              <p className="font-medium text-sm">
                <span className="text-blue-600 font-bold">//</span>&nbsp; About
                us
              </p>

              <p
                className="text-[6vmin] font-semibold w-[95%]"
                style={{
                  marginTop: "-1vmin",
                }}
              >
                Transforming{" "}
                <span className="text-blue-600">
                  Ideas into Digital Reality
                </span>
              </p>

              <p className="text-sm xl:text-[2.05vmin] w-[90%] lg:leading-7 xl:leading-9 2xl:leading-12">
                We at codemap provide scalable, robust and afforable IT
                solutions to our clients.From Development to manintaience we do
                it all.Give us the oppurtunity to put flying colours for your
                digital dream
              </p>

              <div
                className="infoHolder flex mt-4 "
                style={{
                  marginTop: "1.5vmin",
                }}
              >
                <div className="flex flex-col gap-y-3 box1 w-[30%] h-[10vmin] border-r-1  justify-center items-center">
                  <p className="text-blue-600 text-3xl 2xl:text-4xl overflow-y-hidden">
                    50+
                  </p>
                  <p className="text-gray-800 text-sm 2xl:text-xl ">Projects</p>
                </div>
                <div className="flex flex-col gap-y-3  box1 w-[30%] h-[10vmin] border-r-1 justify-center items-center">
                  <p className="text-blue-600 text-3xl 2xl:text-4xl overflow-y-hidden">
                    4+
                  </p>
                  <p className="text-gray-800 text-sm 2xl:text-xl">
                    Years of Experience
                  </p>
                </div>
                <div className="flex flex-col gap-y-3 box1 w-[30%] h-[10vmin]  justify-center items-center">
                  <p className="text-blue-600 text-3xl 2xl:text-4xl overflow-y-hidden">
                    99%
                  </p>
                  <p className="text-gray-800 text-sm 2xl:text-xl ">
                    Client Satisfaction Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* The  mobile about section*/}
      <div className="block lg:hidden ">
        <div className="flex flex-wrap w-screen pb-10">
          <div
            className="left w-[100%]  lg:h-[78vh] lg:w-1/2 flex  justify-center items-center"
            style={{
              marginTop: "4vmin",
            }}
          >
            <Image
              src="/about_us.jpg"
              alt="About Us"
              width={350}
              height={350}
            />
          </div>
          <div
            className="left w-[100%]  lg:h-[75vh] lg:w-1/2"
            style={{
              paddingBottom: "6vmin",
            }}
          >
            {" "}
            <div
              className="h-[100%] flex flex-col gap-y-5 justify-center"
              style={{
                paddingLeft: "3vmin",
              }}
            >
              <p
                className="font-medium text-sm"
                style={{
                  marginTop: "5vmin",
                }}
              >
                <span className="text-blue-600 font-bold">//</span>
                &nbsp; About us
              </p>

              <p
                className="text-[6vmin] font-semibold "
                style={{
                  marginTop: "1vmin",
                }}
              >
                Transforming{" "}
                <span className="text-blue-600">
                  Ideas into Digital Reality
                </span>
              </p>

              <p className="text-sm w-[90%] leading-[6vmin]">
                We at codemap provide scalable, robust and afforable IT
                solutions to our clients.From Development to manintaience we do
                it all.Give us the oppurtunity to put flying colours for your
                digital dream
              </p>

              <div className="infoHolder flex mt-6">
                <div className="flex flex-col gap-y-3 box1 w-[32%] p-2 border-r-1  justify-center items-center">
                  <p className="text-blue-600 text-xl">50+</p>
                  <p className="text-gray-800 text-[2.75vmin] ">Projects</p>
                </div>
                <div className="flex flex-col gap-y-3  box1 w-[32%] p-2  border-r-1 justify-center items-center">
                  <p className="text-blue-600 text-xl">4+</p>
                  <p className="text-gray-800 text-[2.75vmin] ">
                    Years of Experience
                  </p>
                </div>
                <div className="flex flex-col gap-y-3 box1 w-[32%] p-2   justify-center items-center">
                  <p className="text-blue-600 text-xl">99%</p>
                  <p className="text-gray-800 text-[2.75vmin]  ">
                    Satisfaction Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
