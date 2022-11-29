import react, { useRef } from "react";
import {
  BsHeartFill,
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-evenly md:flex md:items-center">
      <div>
        <h1 className="flex items-center font-mono text-slate-700">
          Copyright ©2022 All rights reserved |
          <span>This Portfolio is made with</span>
          <span className="ml-2 mr-2 text-red-500">
            <BsHeartFill />
          </span>
          <a
            href="https://codeyogi.io/"
            target="blank"
            className="font-mono text-red-500"
          >
            CodeYogi
          </a>
        </h1>
      </div>
      <div className="flex items-center text-slate-500 hover:bg-text-white">
        <h1 className="font-mono hover:text-white">Stay Connected</h1>
        <a className="ml-3 " href="https://twitter.com/home" target="blank">
          <span className="hover:text-red-500 hover:animate-bounce">
            <BsTwitter className="hover:animate-ping" />
          </span>
        </a>
        <a
          className="ml-3"
          href="https://m.facebook.com/100008920776995/"
          target="blank"
        >
          <span className="hover:text-red-500">
            <BsFacebook className="hover:animate-ping" />
          </span>
        </a>
        <a
          className="ml-3 "
          href="https://www.linkedin.com/in/jitesh-bhatt-999422211"
          target="blank"
        >
          <span className="hover:text-red-500">
            <BsLinkedin className="hover:animate-ping" />
          </span>
        </a>
        <a
          className="ml-3"
          href="https://instagram.com/_._jitesh_?utm_medium=copy_link"
          target="blank"
        >
          <span className="hover:text-red-500">
            <BsInstagram className="hover:animate-ping" />
          </span>
        </a>
        <a className="ml-3" href="https://github.com/Jitesh60" target="blank">
          <span className="hover:text-red-500">
            <BsGithub className="hover:animate-ping" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
