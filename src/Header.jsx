import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import HomePage from "./HomePage";
import ServicePage from "./ServicePage";
import WorkProject from "./WorkProject";
import ContactLast from "./ContactLast";

function Header(props) {
  const homePage = useRef(null);
  const servicePage = useRef(null);
  const workProject = useRef(null);
  const contactlast = useRef(null);
  const scrollToSection = (element) => {
    console.log("its click");
    window.scrollTo({
      top: element.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className=" shadow-lg   flex sticky top-0 bg-white w-full justify-between p-5 items-center">
        <img
          className="w-7 md:w-12 mr-2"
          src="data:image/png;base64,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"
        />
        <h1 className="mr-16 text-xl md:text-3xl font-bold">PORTFOLIO</h1>
        <ul className=" invisible fixed md:visible md:sticky flex justify-evenly  grow font-medium cursor-pointer">
          <li
            onClick={() => scrollToSection(homePage)}
            className="hover:text-red-500 hover:border-b-2 hover:-translate-y-2 hover:border-b-black"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection(servicePage)}
            className="hover:text-red-500 hover:border-b-2 hover:-translate-y-2 hover:border-b-black"
          >
            Service
          </li>
          <li
            onClick={() => scrollToSection(workProject)}
            className="hover:text-red-500 hover:border-b-2 hover:-translate-y-2 hover:border-b-black"
          >
            Project
          </li>
          <li
            onClick={() => scrollToSection(contactlast)}
            className="hover:text-red-500 hover:border-b-2 hover:-translate-y-2 hover:border-b-black"
          >
            Contact us
          </li>
        </ul>
        <a href="https://codeyogi.io/" target="blank">
          <div className="flex rounded-lg hover:bg-red-900 text-sm md:text-xl text-white font-medium items-center bg-red-500 p-2 md:p-5">
            <h1> With</h1>
            <div className="text-red-900 mr-2 md:ml-2">
              <BsHeartFill />
            </div>
            <h1> CodeYogi</h1>
          </div>
        </a>
      </div>
      <div ref={homePage}>
        <HomePage />
      </div>
      <div ref={servicePage}>
        <ServicePage />
      </div>
      <div ref={workProject}>
        <WorkProject />
      </div>
      <div ref={contactlast}>
        <ContactLast />
      </div>
    </div>
  );
}

export default Header;
