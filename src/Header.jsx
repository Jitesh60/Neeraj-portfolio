import React, { useRef, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import HomePage from "./HomePage";
import ServicePage from "./ServicePage";
import WorkProject from "./WorkProject";
import ContactLast from "./ContactLast";
import SideBar from "./SideBar";

function Header() {
  const [seeSideBar, setSeeSideBar] = useState(false);
  const homePage = useRef(null);
  const servicePage = useRef(null);
  const workProject = useRef(null);
  const contactlast = useRef(null);
  const scrollToSection = (element) => {
    window.scrollTo({
      top: element.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {seeSideBar && (
        <SideBar
          homePage={homePage}
          servicePage={servicePage}
          workProject={workProject}
          contactlast={contactlast}
          onClick={() => setSeeSideBar(false)}
        />
      )}
      <div className="sticky top-0 flex items-center justify-between w-full p-5 bg-white shadow-lg ">
        {!seeSideBar && (
          <AiOutlineMenu
            onClick={() => {
              setSeeSideBar(true);
            }}
            size={"40"}
            className="visible lg:invisible md:invisible"
          />
        )}
        <h1 className="invisible mr-16 text-xl font-bold md:text-3xl lg:visible md:visible">
          JITESH BHATT
        </h1>
        <ul className="fixed flex invisible font-medium cursor-pointer md:visible md:sticky justify-evenly grow">
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
          <div className="flex items-center p-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-900 md:text-xl md:p-5">
            <h1> With</h1>
            <div className="mr-2 text-red-900 md:ml-2">
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
