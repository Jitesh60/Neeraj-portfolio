import react from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col p-5 overflow-hidden bg-gray-100 shadow-lg lg:flex-row lg:justify-center md:flex-row ">
      <div className="p-5">
        <h1 className="flex flex-col mb-5 font-serif text-2xl text-indigo-900 md:text-7xl md:mb-16">
          <span>I'm Neeraj Joshi</span>{" "}
        </h1>
        <p className="mr-3 font-serif text-lg text-slate-400 md:mr-16">
          When a moment in front of me appears to be particularly special,
          whether it be by beauty or experience, I capture it. I usually find a
          reason to justify taking that photo - symmetry, or color or contrast -
          and it's my hope that my photography sheds light onto what I see and
          do on a daily basis.
        </p>
      </div>
      <div className="w-full h-full ">
        <img src="/neraj.jpeg" />
      </div>
    </div>
  );
};

export default HomePage;
