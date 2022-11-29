import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

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
    <div className="fixed top-0 left-0 z-30 flex flex-col justify-between w-64 h-screen bg-white shadow-xl ">
      <ul className="flex flex-col mt-20">
        <li
          onClick={() => {
            scrollToSection(homePage);
            onClick();
          }}
          className="mt-10 font-serif text-center hover:text-red-500 hover:border-b-black"
        >
          Home
        </li>
        <li
          onClick={() => {
            scrollToSection(servicePage);
            onClick();
          }}
          className="mt-10 font-serif text-center hover:text-red-500 hover:border-b-black"
        >
          Service
        </li>
        <li
          onClick={() => {
            scrollToSection(workProject);
            onClick();
          }}
          className="mt-10 font-serif text-center hover:text-red-500 hover:border-b-black"
        >
          Project
        </li>
        <li
          onClick={() => {
            scrollToSection(contactlast);
            onClick();
          }}
          className="mt-10 font-serif text-center hover:text-red-500 hover:border-b-black"
        >
          Contact us
        </li>
      </ul>
      <div className="fixed bottom-0 flex items-center justify-center pb-10 translate-x-full text-slate-500 hover:text-red-500">
        <a
          href="https://www.facebook.com/neeraj.joshi.79656921?mibextid=ZbWKwL"
          target="blank"
        >
          <span className="hover:text-red-500">
            <BsFacebook size={"30"} className="hover:animate-ping" />
          </span>
        </a>

        <a
          className="ml-3"
          href="https://instagram.com/__neeraj__joshi?igshid=YmMyMTA2M2Y="
          target="blank"
        >
          <span className="hover:text-red-500">
            <BsInstagram size={"30"} className="hover:animate-ping" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
