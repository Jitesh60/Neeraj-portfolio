import React from "react";
import { AiOutlineClose } from "react-icons/ai";

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
    <div className="fixed top-0 left-0 z-50 flex flex-col w-64 h-screen bg-gray-300 ">
      <AiOutlineClose size={"40"} className="mt-5 ml-2" onClick={onClick} />
      <h3 className="mt-20 text-2xl font-bold text-center">Menu</h3>
      <ul className="flex flex-col">
        <li
          onClick={() => {
            scrollToSection(homePage);
            onClick();
          }}
          className="mt-10 text-center hover:text-red-500 hover:-translate-y-2 hover:border-b-black"
        >
          Home
        </li>
        <li
          onClick={() => {
            scrollToSection(servicePage);
            onClick();
          }}
          className="mt-10 text-center hover:text-red-500 hover:-translate-y-2 hover:border-b-black"
        >
          Service
        </li>
        <li
          onClick={() => {
            scrollToSection(workProject);
            onClick();
          }}
          className="mt-10 text-center hover:text-red-500 hover:-translate-y-2 hover:border-b-black"
        >
          Project
        </li>
        <li
          onClick={() => {
            scrollToSection(contactlast);
            onClick();
          }}
          className="mt-10 text-center hover:text-red-500 hover:-translate-y-2 hover:border-b-black"
        >
          Contact us
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
