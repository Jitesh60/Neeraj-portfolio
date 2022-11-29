import React from "react";
import Card from "./Card";
import { MdOutlineAddAPhoto, MdVideoCameraBack } from "react-icons/md";
const MobileServicePage = () => {
  return (
    <div className="flex flex-col visible p-10 shadow-xl lg:invisible md:invisible">
      <h1 className="flex flex-col mb-5 font-mono text-3xl text-center">
        What Service you will
        <span>Get from me! </span>
      </h1>
      <div className="flex flex-col justify-between text-3xl md:text-9xl">
        <div className="flex flex-col items-center justify-between ">
          <Card>
            <div className="text-red-500 text-9xl">
              <MdOutlineAddAPhoto />
            </div>

            <h1 className="font-mono text-2xl ">Photography</h1>
          </Card>
          <Card>
            <div className="text-blue-500 text-9xl ">
              <MdVideoCameraBack />
            </div>
            <h1 className="font-mono text-2xl">Video Editing</h1>
          </Card>
          <span className="grow"></span>
        </div>
      </div>
    </div>
  );
};

export default MobileServicePage;
