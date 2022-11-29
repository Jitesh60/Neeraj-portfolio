import react from "react";

const WorkProject = () => {
  return (
    <div className="flex flex-col p-10 mb-16 overflow-hidden shadow-xl ">
      <h1 className="flex flex-col mb-5 font-mono text-4xl ">Projects</h1>
      <a
        href="https://find-show.netlify.app/"
        className="font-mono text-xl text-center cursor-pointer hover:text-red-500 hover:text-2xl"
        target="blank"
      >
        Click to see Project
      </a>
    </div>
  );
};

export default WorkProject;
