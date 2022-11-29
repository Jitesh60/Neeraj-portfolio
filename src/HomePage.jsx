import react from "react";

const HomePage = () => {
  return (
    <div className="flex justify-center p-5 overflow-hidden bg-gray-100 shadow-lg md:flex md:p-16 items-between">
      <div className="p-5">
        <h1 className="mb-5 font-mono text-red-500 bg-transparent text-md ">
          GET EVERY SINGLE SOLUTIONS.
        </h1>
        <h1 className="flex flex-col mb-5 font-mono text-3xl text-indigo-900 md:text-7xl md:mb-16">
          I'm Developer
          <span>Jitesh Bhatt</span>{" "}
        </h1>
        <p className="mr-3 font-mono text-lg text-slate-400 md:mr-16">
          I am able to handle multiple tasks on a daily basis. I am always
          energetic and eager to learn new skills. I delivered all projects in a
          timely fashion. I am always highly enthused about my work and tasks
          ahead.
        </p>
      </div>
      <div className="w-full h-full ">
        <img src="/jitesh.jpg" />
      </div>
    </div>
  );
};

export default HomePage;
