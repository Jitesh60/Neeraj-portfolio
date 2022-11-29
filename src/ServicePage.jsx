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
const ServicePage = () => {
  return (
    <div className="flex flex-col invisible p-10 mt-5 shadow-xl lg:visible md:visible">
      <h1 className="flex flex-col mb-5 font-mono text-3xl">
        What Service you will
        <span>Get from me! </span>
      </h1>
      <div className="flex flex-col justify-between text-3xl md:text-9xl">
        <div className="flex flex-col items-center justify-between ">
          <div className="flex items-center">
            <Card>
              <div className="text-red-500">
                <DiHtml5 />
              </div>

              <h1 className="font-mono text-xl ">HTML</h1>
            </Card>
            <Card>
              <div className="text-blue-500 ">
                <DiCss3 />
              </div>
              <h1 className="font-mono text-xl">CSS</h1>
            </Card>
            <Card>
              <div className="text-blue-500 ">
                <SiTailwindcss />
              </div>
              <h1 className="font-mono text-xl">Tailwind CSS</h1>
            </Card>

            <Card>
              <div className="text-green-500 ">
                <DiJavascript />
              </div>
              <h1 className="font-mono text-xl">Java Script</h1>
            </Card>
            <Card>
              <div className="text-blue-500 ">
                <DiReact />
              </div>
              <h1 className="font-mono text-xl ">React</h1>
            </Card>
          </div>
          <div className="flex items-center">
            <Card>
              <div className="text-blue-500 ">
                <SiTypescript />
              </div>
              <h1 className="font-mono text-xl">TypeScript</h1>
            </Card>

            <Card>
              <div className="text-blue-500 ">
                <SiRedux />
              </div>
              <h1 className="font-mono text-xl">Redux</h1>
            </Card>
            <Card>
              <div className="text-blue-500 ">
                <SiReduxsaga />
              </div>
              <h1 className="font-mono text-xl">Redux Saga</h1>
            </Card>
            <Card>
              <div className="text-blue-500 ">
                <SiMaterialui />
              </div>
              <h1 className="font-mono text-xl">Material UI</h1>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
