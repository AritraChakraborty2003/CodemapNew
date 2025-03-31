/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Image from "next/image";
const WhyUs = () => {
  return (
    <>
      <div className="w-screen  bg-blue-950 pb-13">
        <div
          className="header"
          style={{
            marginTop: "5vmin",
            marginLeft: "1.75vmin",
          }}
        >
          <p
            className="text-white text-xs lg:text-sm"
            style={{ marginLeft: "1.65vmin" }}
          >
            //&nbsp;&nbsp;Why Choose us?
          </p>

          <p
            className="text-white font-semibold text-3xl lg:text-5xl 2xl:text-7xl lg:w-[45%] lg:h-[19vmin] leading-12 lg:leading-16 2xl:leading-24"
            style={{
              marginTop: "3vmin",
              marginLeft: "1.65vmin",
            }}
          >
            Why Trust Us For Your IT Needs?
          </p>
        </div>

        <div className="btnHolder w-[95vw]  flex justify-end">
          <button className="bg-blue-600 text-white rounded-3xl mt-[1vmin] lg:mt-0 text-xs p-3 lg:p-3  lg:text-lg">
            Get a Qoute
          </button>
        </div>
        <div className="flex flex-wrap w-screen">
          <div className="left w-[100vw] lg:h-[60vh] lg:w-[45%]  flex justify-center items-center">
            <div className="hidden lg:block">
              <Image src={"/whyUs.jpg"} height={600} width={600} alt="Why Us" />
            </div>
            <div className="block lg:hidden mt-6">
              <Image src={"/whyUs.jpg"} height={320} width={320} alt="Why Us" />
            </div>
          </div>
          <div className="right w-[100vw] lg:h-[60vh] lg:w-[55%]">
            <div className="flex flex-wrap w-[100%] lg:h-1/2">
              <div className="w-[100%] lg:w-[45%]   text-white h-[100%] pl-4">
                <div className="holder flex flex-col gap-y-4 justify-center items-center lg:items-start h-full mt-8 lg:mt-0">
                  <div>
                    <a>
                      <i className="ri-hand-coin-line text-4xl lg:text-5xl text-white"></i>
                    </a>
                  </div>
                  <div>
                    <p className="text-xl lg:text-2xl">Affordable Price</p>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm text-gray-300 w-[90%] lg:w-[75%] text-center lg:text-start">
                      We provide top notch IT solutions to our clients at
                      affordable price
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[100%] lg:w-[45%]   text-white h-[100%] pl-4">
                <div className="holder flex flex-col gap-y-4 justify-center items-center lg:items-start h-full  mt-8 lg:mt-0">
                  <div>
                    <a>
                      <i className="ri-group-line text-4xl lg:text-4xl text-white"></i>
                    </a>
                  </div>
                  <div>
                    <p className="text-xl lg:text-2xl">Professional Team</p>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm text-gray-300 w-[90%] lg:w-[75%] text-center lg:text-start">
                      We have a dedicated and skilled IT team to help you
                      achieve your goals
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap w-[100%] lg:h-1/2">
              <div className="w-[100%] lg:w-[45%]   text-white h-[100%] pl-4">
                <div className="holder flex flex-col gap-y-4 justify-center items-center lg:items-start h-full  mt-8 lg:mt-0">
                  <div>
                    <a>
                      <i className="ri-briefcase-4-fill text-4xl lg:text-5xl text-white"></i>
                    </a>
                  </div>
                  <div>
                    <p className="text-xl lg:text-2xl">
                      4+ Years of Experience
                    </p>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm text-gray-300 w-[90%] lg:w-[75%] text-center lg:text-start">
                      We have been providing top notch IT solutions for over 4
                      years
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[100%] lg:w-[45%]   text-white h-[100%] pl-4">
                <div className="holder flex flex-col gap-y-4 justify-center items-center lg:items-start h-full  mt-8 lg:mt-0">
                  <div>
                    <a>
                      <i className="ri-trophy-line text-4xl lg:text-5xl text-white"></i>
                    </a>
                  </div>
                  <div>
                    <p className="text-xl lg:text-2xl">Professional Team</p>
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm text-gray-300 w-[90%] lg:w-[75%] text-center lg:text-start">
                      We have a dedicated and skilled IT team to help you
                      achieve your goals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
