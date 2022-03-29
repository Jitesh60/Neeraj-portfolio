import react from "react";

function WorkProject() {
  return (
    <div className="flex flex-col p-2 md:p-16 overflow-hidden">
      <h1 className="text-2xl md:text-5xl font-bold flex flex-col mb-5 md:mb-16 ">
        Projects
      </h1>
      <div className="flex flex-col bg-black">
        <div className=" flex-col md:flex p-3">
          <img
            className=" w-full md:w-1/2 mb-5  md:mr-5 object-cover border border-white"
            src="/project1.png"
          />
          <div className="flex flex-col">
            <img
              className="  mb-5 object-cover border border-white"
              src="/project2.png"
            />
            <img className="  border border-white" src="/project3.png" />
          </div>
        </div>
        <div className="md:flex p-2">
          <img
            className="w-full md:w-1/3 mb-3 mr-3 object-cover border border-white"
            src="/project4.png"
          />
          <img
            className=" w-full md:w-1/3 mb-3 mr-3  object-cover border border-white"
            src="/project5.png"
          />
          <img
            className="w-96  mb-3 mr-2 object-cover border border-white"
            src="/project6.png"
          />
        </div>
      </div>
    </div>
  );
}

export default WorkProject;
