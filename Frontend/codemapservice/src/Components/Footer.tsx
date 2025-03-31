import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="pb-5 bg-blue-950 text-white">
        <div className="headerArea  h-[15vmin] flex justify-evenly items-center">
          <div className="w-[78%] ">
            <p className="hidden lg:block text-white lg:text-[5.5vmin] font-medium">
              Let&#39;s &nbsp;
              <span className="text-blue-600">&nbsp;Connect</span> &nbsp;there
            </p>
          </div>
          <p>
            <button
              className="bg-blue-600 hidden lg:block rounded-xl text-white"
              style={{
                padding: "2.3vmin",
              }}
            >
              Contact Us
            </button>
          </p>
        </div>
        <div className="hidden lg:block">
          <div className="flex flex-wrap justify-center items-center">
            <div className="line w-[95vw] h-2 border-blue-300 border-t-1"></div>
          </div>
        </div>
        <div className="w-screen flex  justify-center items-center">
          <div
            style={{
              marginLeft: "3vmin",
            }}
            className="w-[96vw] optionsHolder flex flex-wrap gap-x-1"
          >
            {" "}
            <div className="mt-[-2vmin] lg:mt-[3vmin] w-[100vw] lg:w-[30%] flex flex-col gap-y-8 justify-center items-center">
              <Image
                src="https://codemap.online/CodemapIconHorizontal.0a8c5128.png"
                alt="Logo"
                width={250}
                height={250}
              />
              <p className="text-xs w-[80%]  leading-5">
                We at codemap build robust afforadable IT solutions ranging from
                android to web development.We are the one stop solution for your
                tech needs
              </p>
              <div className="icons flex gap-x-6">
                <a href="">
                  <i className="ri-facebook-circle-line text-white text-2xl"></i>
                </a>
                <a href="">
                  <i className="ri-twitter-x-fill text-white text-2xl"></i>
                </a>
                <a href="">
                  <i className="ri-instagram-line text-white text-2xl"></i>
                </a>
                <a href="">
                  <i className="ri-twitter-x-fill text-white text-2xl"></i>
                </a>
                <a href="">
                  <i className="ri-linkedin-box-fill text-white text-2xl"></i>
                </a>
              </div>
            </div>
            <div
              className=" w-[100vw] lg:w-[30%] text-gray-200 gap-y-5  flex flex-col justify-center items-start text-sm text-medium"
              style={{
                marginTop: "4vmin",
                paddingLeft: "3.5vmin",
              }}
            >
              <p className="text-gray-300 text-lg font-extrabold">Contact</p>
              <ul>Phone: (+91) 7585824862</ul>
              <ul>Email: codemap2024@gmail.com</ul>
              <ul>
                {" "}
                Address: IIMT LBF Incubation Center,Greater Noida,Uttar Pradesh
              </ul>
              <ul> Website: https://www.codemap.online</ul>
            </div>
            <div className=" w-[100vw] lg:w-[30%] hidden lg:block">
              <div
                style={{
                  paddingLeft: "1.75vmin",
                }}
                className="w-[100%]  text-white flex flex-col justify-center items-start"
              >
                <p
                  className="text-gray-300"
                  style={{
                    marginLeft: "5vmin",
                    fontWeight: "bolder",
                    marginTop: "10vmin",
                  }}
                >
                  Get the lastest Information
                </p>

                <div className="w-[100%] searchArea flex  justify-center items-center ">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    style={{
                      marginTop: "3vmin",
                      padding: "1.2vmin",
                      marginLeft: "6vmin",
                    }}
                    className="w-[80%] border-2 border-gray-300  px-4 py-2"
                  />
                  <button
                    className="bg-blue-500  w-[20%]"
                    style={{
                      marginTop: "3vmin",
                      padding: "1.5vmin",
                    }}
                  >
                    <a href="">
                      <i className="ri-send-plane-fill text-white"></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p
          className="text-[2.75vmin] block lg:hidden"
          style={{
            marginTop: "5.75vmin",
            textAlign: "center",
          }}
        >
          Copyright © 2025 Codemap. All Rights Reserved
        </p>
      </div>

      <div className="hidden lg:block">
        <div
          className=" flex bg-blue-600 text-white w-screen"
          style={{
            padding: "2vmin",
          }}
        >
          <p className="w-[75vw]">
            {" "}
            Copyright &copy; 2025 Codemap. All Rights Reserved
          </p>
          <div
            className=""
            style={{
              marginRight: "1vmin",
            }}
          >
            <a href="">Privacy Policy</a> | <a href="">Terms & Conditions</a>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
