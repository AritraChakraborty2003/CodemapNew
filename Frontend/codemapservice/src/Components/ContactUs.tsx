/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const ContactUs = () => {
  return (
    <div className="">
      <div className="w-screen flex">
        <div className="w-[35%]   hidden lg:block">
          <div className="w-[100%] h-[100%] flex justify-end items-center">
            <div
              className="rounded-md leftHolder w-[89%] bg-blue-950 text-white flex flex-col gap-y-12"
              style={{
                paddingLeft: "6vmin",
                paddingTop: "5vmin",
                paddingBottom: "5vmin",

                marginRight: "0.15vmin",
              }}
            >
              <div className="addressHolder flex flex-col gap-y-3">
                <p className="text-white font-bold">Address</p>
                <p>
                  1st Floor, IIMT LBF Incubation Center,Greater Noida,Uttar
                  Pradesh
                </p>
              </div>
              <div className="contactHolder flex flex-col gap-y-4 ">
                <p className="text-white font-bold">Contact</p>
                <div>
                  <p>Phone: (+ 91) 7585824862</p>
                  <p
                    className="mt-4"
                    style={{
                      marginTop: "1vmin",
                    }}
                  >
                    Email: codemap2024@gmail.com
                  </p>
                </div>
              </div>

              <div className="contactHolder flex flex-col gap-y-3">
                <p className="text-white font-bold">Open Time</p>
                <div>
                  <p>Monday-Friday: 24/7 hours open</p>
                </div>
              </div>

              <div className="contactHolder flex flex-col gap-y-3">
                <p className="text-white font-bold">Stay Connected</p>
                <div>
                  <p>Monday-Friday: 24/7 hours open</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] lg:w-[60%] h-[70vh]">
          <p
            style={{
              marginTop: "3vmin",
              marginLeft: "1.65vmin",
            }}
          >
            //&nbsp; Contact Us
          </p>
          <p
            className="text-black font-extrabold text-5xl h-[27vmin] lg:h-[10vmin]"
            style={{
              marginTop: "1vmin",
              marginLeft: "1.75vmin",
            }}
          >
            Get Your <span className="text-blue-600"> Free Quote</span> Today!
          </p>

          <div className="formHolder">
            <div className="holder1">
              <div className="flex flex-wrap gap-x-6 gap-y-5">
                <div>
                  <p
                    className=""
                    style={{
                      marginLeft: "1.75vmin",
                    }}
                  >
                    Your name *
                  </p>
                  <input
                    type="text"
                    className="inputField rounded-md bg-gray-200 w-[90vw] lg:w-[45vmin]"
                    placeholder="Ex. John Doe"
                    style={{
                      padding: "1.2vmin",
                      marginTop: "1.5vmin",
                      marginLeft: "1.75vmin",
                    }}
                  />
                </div>
                <div>
                  <p
                    className=""
                    style={{
                      marginLeft: "1.75vmin",
                    }}
                  >
                    Your name *
                  </p>
                  <input
                    type="text"
                    className="inputField rounded-md bg-gray-200 w-[90vw] lg:w-[45vmin]"
                    placeholder="Ex. John Doe"
                    style={{
                      padding: "1.2vmin",
                      marginTop: "1.5vmin",
                      marginLeft: "1.75vmin",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className="holder1"
              style={{
                marginTop: "3.5vmin",
              }}
            >
              <div className="flex flex-wrap gap-x-6">
                <div>
                  <p
                    className=""
                    style={{
                      marginLeft: "1.75vmin",
                    }}
                  >
                    Your name *
                  </p>
                  <input
                    type="text"
                    className="inputField rounded-md bg-gray-200 w-[90vw] lg:w-[45vmin]"
                    placeholder="Ex. John Doe"
                    style={{
                      padding: "1.2vmin",
                      marginTop: "1.5vmin",
                      marginLeft: "1.75vmin",
                    }}
                  />
                </div>
                <div>
                  <p
                    className=""
                    style={{
                      marginLeft: "1.75vmin",
                    }}
                  >
                    Your name *
                  </p>
                  <input
                    type="text"
                    className="inputField rounded-md bg-gray-200  w-[90vw] lg:w-[45vmin]"
                    placeholder="Ex. John Doe"
                    style={{
                      padding: "1.2vmin",
                      marginTop: "1.5vmin",
                      marginLeft: "1.75vmin",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="holder1"
              style={{
                marginTop: "2.5vmin",
              }}
            >
              <textarea
                className="bg-gray-200 h-[15vmin] w-[90%] lg:h-[20vmin] lg:w-[90%]"
                style={{
                  padding: "1.2vmin",
                  marginTop: "1.5vmin",
                  marginLeft: "1.75vmin",

                  resize: "none",
                  marginBottom: "3vmin",
                  borderRadius: "5px",
                }}
                placeholder="Your Message"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
