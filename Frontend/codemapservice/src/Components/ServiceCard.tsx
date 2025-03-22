import React from "react";

const ServiceCard = () => {
  return (
    <>
      <div className="w-[45%] lg:w-1/4 h-[50vmin] lg:h-[36vmin] bg-white text-black rounded-lg">
        <div className="imageHolder"></div>
        <h3 className="text-lg font-medium">Service Name</h3>
        <p className="text-sm">Service Description</p>
      </div>
      <div className="w-[45%] lg:w-1/4  h-[50vmin]  lg:h-[36vmin] bg-white text-black rounded-lg">
        Hello
      </div>
      <div className="w-[45%] lg:w-1/4  h-[50vmin]   lg:h-[36vmin] bg-white text-black rounded-lg">
        Hello
      </div>
    </>
  );
};

export default ServiceCard;
