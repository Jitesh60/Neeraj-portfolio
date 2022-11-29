import react from "react";

const WorkProject = () => {
  return (
    <div className="flex flex-col p-10 mb-16 space-y-2 overflow-hidden shadow-xl ">
      <h1 className="flex flex-col mb-5 font-mono text-2xl ">Some Clicks</h1>

      <div className="p-2 border-2 border-gray-300 shadow-lg">
        <img src="project1.jpeg" className="w-full" alt="project 1" />
      </div>
      <div className="p-2 border-2 border-gray-300 shadow-lg">
        <img src="proj2.jpeg" className="w-full" alt="project 2" />
      </div>
      <div className="p-2 border-2 border-gray-300 shadow-lg">
        <img src="proj3.jpeg" className="w-full" alt="project 3" />
      </div>
      <div className="p-2 border-2 border-gray-300 shadow-lg">
        <img src="proj4.jpeg" className="w-full" alt="project 4" />
      </div>
      <div className="p-2 border-2 border-gray-300 shadow-lg">
        <img src="proj5.jpeg" className="w-full" alt="project 5" />
      </div>
    </div>
  );
};

export default WorkProject;
