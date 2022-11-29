import React, { useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import HomePage from "./HomePage";
import ServicePage from "./ServicePage";
import WorkProject from "./WorkProject";
import ContactLast from "./ContactLast";
import SideBar from "./SideBar";
import MobileServicePage from "./MobileResponsiveService";
import useBreakpoint from "./UseBreakPoint";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const { width } = useBreakpoint();
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
      <div className="sticky top-0 z-40 flex items-center justify-between w-full p-5 bg-white shadow-lg ">
        {!seeSideBar && (
          <AiOutlineMenu
            onClick={() => {
              setSeeSideBar(true);
            }}
            size={"40"}
            className="visible lg:invisible md:invisible"
          />
        )}
        {seeSideBar && (
          <AiOutlineClose
            size={"40"}
            onClick={() => {
              setSeeSideBar(false);
            }}
          />
        )}
        <h1 className="invisible mr-16 font-mono text-xl md:text-3xl lg:visible md:visible">
          JITESH BHATT
        </h1>
        <ul className="fixed flex invisible font-medium cursor-pointer md:visible md:sticky justify-evenly grow">
          <li
            onClick={() => scrollToSection(homePage)}
            className="font-mono hover:text-red-500 "
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection(servicePage)}
            className="font-mono hover:text-red-500 "
          >
            Service
          </li>
          <li
            onClick={() => scrollToSection(workProject)}
            className="font-mono hover:text-red-500 "
          >
            Project
          </li>
          <li
            onClick={() => scrollToSection(contactlast)}
            className="font-mono hover:text-red-500 "
          >
            Contact us
          </li>
        </ul>
      </div>
      <div ref={homePage}>
        <HomePage />
      </div>
      <div ref={servicePage}>
        {" "}
        {(width || 0) >= 640 && <ServicePage />}
        {(width || 0) <= 640 && <MobileServicePage />}
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
