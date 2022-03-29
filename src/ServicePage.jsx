import react from "react";
import Card from "./Card";
import { DiHtml5, DiCss3, DiJavascript, DiReact } from "react-icons/di";
function ServicePage() {
  return (
    <div className=" mt-5 md:mt-16 flex flex-col p-5 md:p-16">
      <h1 className=" text-2xl md:text-5xl font-bold flex flex-col  mb-5 md:mb-16">
        What Service you will
        <span>Get from me! </span>
      </h1>
      <div className="text-3xl md:text-9xl flex flex-col items-center justify-between">
        <div className=" flex-col md:flex  ">
          <Card>
            <div className="text-red-500">
              <DiHtml5 />
            </div>

            <h1 className=" text-2xl ">HTML</h1>
          </Card>
          <Card>
            <div className="  text-blue-500">
              <DiCss3 />
            </div>
            <h1 className="text-2xl ">CSS</h1>
          </Card>

          <Card>
            <div className="  text-green-500">
              <DiJavascript />
            </div>
            <h1 className="text-2xl ">Java Script</h1>
          </Card>
          <Card>
            <div className="  text-blue-500">
              <DiReact />
            </div>
            <h1 className="text-2xl ">React</h1>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
