import React from "react";

const SideBar = ({
  homePage,
  servicePage,
  workProject,
  contactlast,
  onClick,
}) => {
  const scrollToSection = (element) => {
    window.scrollTo({
      top: element.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed top-0 left-0 z-30 flex flex-col w-64 h-screen bg-white shadow-xl ">
      <ul className="flex flex-col mt-20">
        <li
          onClick={() => {
            scrollToSection(homePage);
            onClick();
          }}
          className="mt-10 font-mono text-center hover:text-red-500 hover:border-b-black"
        >
          Home
        </li>
        <li
          onClick={() => {
            scrollToSection(servicePage);
            onClick();
          }}
          className="mt-10 font-mono text-center hover:text-red-500 hover:border-b-black"
        >
          Service
        </li>
        <li
          onClick={() => {
            scrollToSection(workProject);
            onClick();
          }}
          className="mt-10 font-mono text-center hover:text-red-500 hover:border-b-black"
        >
          Project
        </li>
        <li
          onClick={() => {
            scrollToSection(contactlast);
            onClick();
          }}
          className="mt-10 font-mono text-center hover:text-red-500 hover:border-b-black"
        >
          Contact us
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
