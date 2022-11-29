import React from "react";
import Card from "./Card";
import { MdOutlineAddAPhoto, MdVideoCameraBack } from "react-icons/md";

const ServicePage = () => {
  return (
    <div className="flex flex-col invisible p-10 mt-5 shadow-xl lg:visible md:visible">
      <h1 className="flex flex-col mb-5 font-serif text-xl">
        What you will
        <span>Get from me! </span>
      </h1>
      <div className="flex flex-col justify-between text-3xl md:text-9xl">
        <div className="flex flex-col items-center justify-between ">
          <div className="flex items-center">
            <Card>
              <div className="text-red-500">
                <MdOutlineAddAPhoto />
              </div>

              <h1 className="font-mono text-xl ">Photography</h1>
            </Card>
            <Card>
              <div className="text-blue-500 ">
                <MdVideoCameraBack />
              </div>
              <h1 className="font-mono text-xl">Video Editing</h1>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
