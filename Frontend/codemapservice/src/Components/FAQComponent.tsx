/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Faq from "../Components/Faq";
const FAQComponent = () => {
  // Mock data
  const items = [
    {
      title: "What is your service?",
      content:
        "Our service is to create engaging, high-quality websites and applications that meet your business needs. We offer various options, including web development, UI/UX design, and mobile app development. Our team of experts will work closely with you to create a customized solution that meets your specific needs.",
    },
    {
      title: "How do you work?",
      content:
        "We use agile methodologies to ensure that our projects are completed on time and within budget. Our team of experts will work closely with you to create a customized solution that meets your specific needs. We will also provide ongoing support and maintenance throughout the project.",
    },
    {
      title: "How much do you charge?",
      content:
        "We charge based on the complexity and scope of your project. Our team of experts will work closely with you to create a customized solution that meets your specific needs. We will also provide ongoing support and maintenance throughout the project.",
    },
    {
      title: "What's included in my project?",
      content:
        "Our service includes web development, UI/UX design, and mobile app development. We will also provide ongoing support and maintenance throughout the project.",
    },
    {
      title: "What if I need help?",
      content:
        "We are here to help you with any questions or concerns you may have. Our team of experts will work closely with you to create a customized solution that meets your specific needs. We will also provide ongoing support and maintenance throughout the project.",
    },
    {
      title: "Can I customize my project?",
      content:
        "Yes, we are here to help you with any questions or concerns you may have. Our team of experts will work closely with you to create a customized solution that meets your specific needs. We will also provide ongoing support and maintenance throughout the project.",
    },
  ];

  return (
    <div className="w-screen flex  flex-wrap bg-slate-50">
      <div className="w-[100%] lg:w-[60%]   flex flex-col justify-center items-center gap-y-6">
        <div className="w-[98%] lg:w-[95%] mt-5 p-4 pb-15 lg:pb-20">
          <p className="text-xs lg:text-[1.85vmin]">//FAQs</p>
          <p className="pb-1">
            <span className=" text-gray-900 font-extrabold text-[8vmin] lg:text-[6.75vmin] pb-2">
              Question?
            </span>
            <span className="text-blue-600 font-extrabold text-[8vmin] lg:text-[6.75vmin] pb-2">
              &nbsp; Look here.
            </span>
          </p>
          <div className="mt-4">
            <Faq items={items} />
          </div>
        </div>
      </div>
      <div className="w-[40%]  hidden lg:block">
        <div className="w-[100%] mt-24">
          <div className="box1 ml-9 rounded-lg w-[75%] h-[30vmin]  bg-blue-950">
            <div className=" h-full flex-col gap-y-4 text-white flex justify-center items-center">
              <a>
                <i className="ri-message-2-fill text-blue-500 text-5xl"></i>
              </a>
              <p className="font-bold text-white text-xl">
                You have a different question?
              </p>
              <p className="w-[80%] text-center text-sm">
                Our team will respond to you as soon as possible reah out to us
              </p>
            </div>
          </div>
        </div>

        <div className="w-[100%] mt-6">
          <div className="box1 flex justify-start items-center ml-9 border-gray-300 border-1 rounded-lg w-[75%] pb-5  bg-white">
            <div className="iconHolder ml-3">
              <a>
                <i className="ri-phone-line text-5xl text-blue-500"></i>
              </a>
            </div>
            <div className="infoHolder flex flex-col gap-y-1 ml-10 mt-4">
              <p className="text-xs text-gray-500">Your comfort our priority</p>
              <p className="text-xl font-extrabold mt-1">
                24&nbsp;/&nbsp;7 service
              </p>
              <p className="text-xs mt-2">(+91) 758-582-4862</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
