import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-evenly md:flex md:items-center">
      <div>
        <h1 className="flex flex-col items-center font-mono md:flex-row md:items-center lg:flex-row lg:items-center text-slate-700">
          Neeraj Joshi All rights reserved.
        </h1>
      </div>
      <div className="flex items-center text-slate-500 hover:text-red-500">
        <h1 className="font-mono hover:text-red-500">Stay Connected</h1>

        <a
          className="ml-3"
          href="https://www.facebook.com/neeraj.joshi.79656921?mibextid=ZbWKwL"
          target="blank"
        >
          <span className="hover:text-red-500">
            <BsFacebook className="hover:animate-ping" />
          </span>
        </a>

        <a
          className="ml-3"
          href="https://instagram.com/__neeraj__joshi?igshid=YmMyMTA2M2Y="
          target="blank"
        >
          <span className="hover:text-red-500">
            <BsInstagram className="hover:animate-ping" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
