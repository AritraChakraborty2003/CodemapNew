import Image from "next/image";
import React from "react";

const Header = () => {
  const options = [
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "Projects",
      link: "/projects",
    },
    {
      label: "Team",
      link: "/team",
    },
    {
      label: "Careers",
      link: "/careers",
    },
    {
      label: "Blogs",
      link: "/blogs",
    },
    {
      label: "Contact",
      link: "/contact",
    },
    {
      label: "Tools",
      link: "/tools",
    },
  ];
  return (
    <>
      <div className="w-screen h-[11vmin] bg-slate-100 flex justify-evenly items-center text-black">
        <div
          className="logoHolder w-[25%] "
          style={{
            paddingLeft: "2vmin",
            paddingRight: "2vmin",
          }}
        >
          <Image
            src="https://codemap.online/CodemapIconHorizontal.0a8c5128.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </div>
        <div className="optionsHolder hidden lg:block w-[55%]">
          <div className="flex gap-x-10 justify-center items-center">
            {options.map((option) => (
              <a
                key={option.label}
                href={option.link}
                className="hover:underline underline-offset-4 decoration-blue-500"
              >
                <p>{option.label}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="quoteHolder hidden lg:block w-[20%]">
          <div className="btnHolder flex justify-center items-center">
            <button
              className=" bg-blue-500 text-white"
              style={{
                paddingLeft: "2.5vmin",
                paddingRight: "2.5vmin",
                paddingTop: "1.5vmin",
                paddingBottom: "1.5vmin",
                borderRadius: "5px",
              }}
            >
              Get a Qoute
            </button>
          </div>
        </div>
        <div className="hamHolder block lg:hidden w-[70%] ">
          <div className="hamDiv w-[100%] flex justify-end pr-6">Ham</div>
        </div>
      </div>
    </>
  );
};

export default Header;
