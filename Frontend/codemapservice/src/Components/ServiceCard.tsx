import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  image: string;
  service: string;
  details: string;
}

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  return (
    <>
      <div className="w-[78%] lg:w-1/4 pb-4 lg:h-[38vmin] bg-white text-black rounded-xl p-5 border-blue-500 hover:border-b-4">
        <div className="imageHolder">
          <Image src={props.image} alt="web dev" height={80} width={80} />
        </div>
        <h3 className="font-medium mt-2 font-medium text-md lg:text-2xl">
          {props.service}
        </h3>
        <p className="text-[3.45vmin] lg:text-xs text-gray-500 mt-2 leading-5 font-normal">
          {props.details}
        </p>
        <p className="mt-5 text-blue-500">
          Learn more &nbsp;
          <a className="">
            <i className="ri-arrow-right-line text-sm"></i>
          </a>
        </p>
      </div>
    </>
  );
};

export default ServiceCard;
