import React from "react";
import Marquee from "react-fast-marquee";

const ServicesBar = () => {
  const services = [
    {
      label: "Web Development",
    },
    {
      label: "UI/UX Design",
    },
    {
      label: "Android Development",
    },
    {
      label: "API Integrations",
    },
    {
      label: "CMS Support",
    },
    {
      label: "Digital Marketing",
    },
  ];
  return (
    <div
      className="w-screen flex gap-x-10 bg-blue-500  text-white"
      style={{
        paddingTop: "3vmin",
        paddingBottom: "3vmin",
        paddingLeft: "2vmin",
      }}
    >
      <Marquee speed={120} className="flex">
        {services.map((service) => (
          <div key={service.label} className="flex gap-x-2 ">
            <a>
              <i className="ri-snowflake-fill text-xl"></i>
            </a>
            <p className="text-md lg:text-xl">{service.label}</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ServicesBar;
