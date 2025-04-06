function WorkProcess() {
  return (
    <>
      <div
        style={{
          marginTop: "3vmin",
        }}
      >
        <p className="text-center">// Our Work Process</p>
        <p
          className="text-center text-2xl lg:text-5xl font-semibold overflow-hidden"
          style={{
            marginTop: "2vmin",
          }}
        >
          Our Proven <span className="text-blue-600">Work Process</span>
        </p>
        <div
          className="flex gap-4 justify-center items-center"
          style={{
            marginTop: "6vmin",
          }}
        >
          <div>
            <div className="box1 lg:w-[15vmin] lg:h-[15vmin] rounded-full bg-blue-600 text-white border-3 flex justify-center items-center">
              <a href="">
                <i className="ri-file-list-line text-white text-4xl"></i>
              </a>
            </div>
            <p
              className="mr-3 text-sm text-"
              style={{
                marginTop: "1vmin",
              }}
            >
              Planning and design
            </p>
          </div>
          <div className="line w-[20vmin] h-4 border-b-1"></div>
          <div>
            <div className="box1 w-[15vmin] h-[15vmin] rounded-full bg-blue-600 text-white border-3 flex justify-center items-center">
              <a href="">
                <i className="ri-lightbulb-line text-4xl text-white"></i>
              </a>
            </div>
            <p
              className=" text-sm  text-center"
              style={{
                marginTop: "1vmin",
              }}
            >
              Strategy & Setup
            </p>
          </div>
          <div className="line w-[20vmin] h-4 border-b-1"></div>
          <div>
            <div className="box1 w-[15vmin] h-[15vmin] rounded-full bg-blue-600 text-white border-3 flex justify-center items-center">
              <a href="">
                <i className="ri-stack-line text-white text-4xl"></i>
              </a>
            </div>
            <p
              className=" text-sm text-center"
              style={{
                marginTop: "1vmin",
              }}
            >
              Implementation
            </p>
          </div>
          <div className="line w-[20vmin] h-4 border-b-1"></div>
          <div>
            <div className="box1 w-[15vmin] h-[15vmin] rounded-full bg-blue-600 text-white border-3 flex justify-center items-center">
              <a href="">
                <i className="ri-chat-smile-2-line text-white text-4xl"></i>
              </a>
            </div>
            <p
              className="text-center text-sm text-"
              style={{
                marginTop: "1vmin",
              }}
            >
              Result & Delivery
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkProcess;
