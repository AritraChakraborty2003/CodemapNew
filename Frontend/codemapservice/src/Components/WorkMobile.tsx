"use client";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const WorkMobile = () => {
  return (
    <div className="pt-10">
      <p className="pl-4 text-[10vmin] font-bold">
        <span className="text-gray-800 ">Our Proven</span>
        <span className="text-blue-600 ">&nbsp;Work Process</span>
      </p>
      <div className="mt-6">
        <VerticalTimeline lineColor="#f1f5f9">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              width: "74%",
              background: "#2b7fff",
              color: "#000000",
            }}
            iconStyle={{
              background: "#fff",
              color: "#fff",
              marginTop: "4px",
              marginLeft: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px", // Adjust font size
              fontWeight: "bold", // Optional
            }}
            icon={<span style={{ color: "#000" }}>1</span>} // Emoji or text
          >
            <div>
              <div className="box1   rounded-full  ">
                <a href="">
                  <i className="ri-file-list-line text-white text-5xl lg:text-4xl"></i>
                </a>
              </div>
              <p
                className="mr-3 mt-5 lg:mt-4  text-white"
                style={{
                  fontSize: "4.75vmin",
                }}
              >
                Planning and design
              </p>
              <p
                className="text-white"
                style={{
                  fontSize: "3.15vmin",
                }}
              >
                We plan and design the ideal IT solution as per your need and
                business requirements submitted and disxussed with the team
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              width: "74%",
              height: "auto",
              background: "#2b7fff",
              color: "#000000",
              fontSize: "25px",
            }}
            iconStyle={{
              background: "#fff",
              color: "#fff",
              marginTop: "4px",
              marginLeft: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px", // Adjust font size
              fontWeight: "bold", // Optional
            }}
            icon={<span style={{ color: "#000" }}>2</span>} // Emoji or text
          >
            <div>
              <div className="box1   rounded-full  ">
                <a href="">
                  <i className="ri-lightbulb-line text-white text-5xl lg:text-4xl"></i>
                </a>
              </div>
              <p
                className="mr-3 mt-5 lg:mt-4  text-white"
                style={{
                  fontSize: "4.75vmin",
                }}
              >
                Startegy & Setup
              </p>
              <p
                className="text-white"
                style={{
                  fontSize: "3.15vmin",
                }}
              >
                We work on figuring out the startegy and setup required for the
                project as per your business needs{" "}
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              width: "74%",
              background: "#2b7fff",
              color: "#000000",
            }}
            iconStyle={{
              background: "#fff",
              color: "#fff",
              marginTop: "4px",
              marginLeft: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px", // Adjust font size
              fontWeight: "bold", // Optional
            }}
            icon={<span style={{ color: "#000" }}>3</span>} // Emoji or text
          >
            {" "}
            <div>
              <div className="box1   rounded-full  ">
                <a href="">
                  <i className="ri-stack-line text-white text-5xl lg:text-4xl"></i>
                </a>
              </div>
              <p
                className="mr-3 mt-5 lg:mt-4  text-white"
                style={{
                  fontSize: "4.75vmin",
                }}
              >
                Implementation
              </p>
              <p
                className="text-white"
                style={{
                  fontSize: "3.15vmin",
                }}
              >
                After figuring out the proper project plan and strategy we work
                on implementing the project according to the plan and strategy.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              width: "74%",
              background: "#2b7fff",
              color: "#000000",
            }}
            iconStyle={{
              background: "#fff",
              color: "#fff",
              marginTop: "4px",
              marginLeft: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px", // Adjust font size
              fontWeight: "bold", // Optional
            }}
            icon={<span style={{ color: "#000" }}>4</span>} // Emoji or text
          >
            <div>
              <div className=" box1  rounded-full  ">
                <a href="">
                  <i className="ri-chat-smile-2-line text-white text-5xl lg:text-4xl"></i>
                </a>
              </div>
              <p
                className="mr-3 mt-5 lg:mt-4  text-white"
                style={{
                  fontSize: "4.75vmin",
                }}
              >
                Result & Delivery
              </p>
              <p
                className="text-white"
                style={{
                  fontSize: "3.15vmin",
                }}
              >
                After complete project implementation we work on the final
                testing and updates as needed as per the client then finally
                deploy and deliver it
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkMobile;
