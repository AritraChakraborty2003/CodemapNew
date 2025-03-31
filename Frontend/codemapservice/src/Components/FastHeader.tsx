import Marquee from "react-fast-marquee";
import React from "react";

const FastHeader = () => {
  return (
    <div>
      <Marquee
        style={{
          backgroundColor: "#2b7fff",
          color: "white",
          padding: "10px",

          width: "100%",
        }}
        speed={80}
      >
        <div className="flex gap-x-2 text-xs lg:text-[1.75vmin]">
          <p>The Best IT solutions Company in India &nbsp;|</p>
          <p>Trusted by 100+ clients &nbsp;|</p>
          <p>Top-rated customer reviews &nbsp;|</p>
          <p>Dedicated support &nbsp;|</p>
          <p>24/7 customer support</p>
          <p>Most Affodable Tech Solutons</p>
        </div>
      </Marquee>
    </div>
  );
};

export default FastHeader;
