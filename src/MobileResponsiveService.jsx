import React from "react";
import Card from "./Card";
import { DiHtml5, DiCss3, DiJavascript, DiReact } from "react-icons/di";
import {
  SiRedux,
  SiReduxsaga,
  SiTypescript,
  SiTailwindcss,
  SiMaterialui,
} from "react-icons/si";
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
              <DiHtml5 />
            </div>

            <h1 className="font-mono text-2xl ">HTML</h1>
          </Card>
          <Card>
            <div className="text-blue-500 text-9xl ">
              <DiCss3 />
            </div>
            <h1 className="font-mono text-xl">CSS</h1>
          </Card>

          <Card>
            <div className="text-blue-500 text-9xl ">
              <SiTailwindcss />
            </div>
            <h1 className="font-mono text-2xl">Tailwind CSS</h1>
          </Card>

          <Card>
            <div className="text-green-500 text-9xl ">
              <DiJavascript />
            </div>
            <h1 className="font-mono text-2xl">Java Script</h1>
          </Card>

          <Card>
            <div className="text-blue-500 text-9xl ">
              <DiReact />
            </div>
            <h1 className="font-mono text-2xl ">React</h1>
          </Card>

          <Card>
            <div className="text-blue-500 text-9xl ">
              <SiTypescript />
            </div>
            <h1 className="font-mono text-2xl">TypeScript</h1>
          </Card>

          <Card>
            <div className="text-blue-500 text-9xl ">
              <SiRedux />
            </div>
            <h1 className="font-mono text-2xl">Redux</h1>
          </Card>
          <Card>
            <div className="text-blue-500 text-9xl ">
              <SiReduxsaga />
            </div>
            <h1 className="font-mono text-2xl">Redux Saga</h1>
          </Card>

          <Card>
            <div className="text-blue-500 text-9xl ">
              <SiMaterialui />
            </div>
            <h1 className="font-mono text-2xl">Material UI</h1>
          </Card>
          <span className="grow"></span>
        </div>
      </div>
    </div>
  );
};

export default MobileServicePage;
