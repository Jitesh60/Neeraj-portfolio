import react from "react";
import { VscCallOutgoing, VscMail } from "react-icons/vsc";
import Footer from "./Footer";

function ContactLast() {
  return (
    <div className="bg-gray-900 p-5 md:p-16  ">
      <div className="mb-9 md:mb-32  flex flex-col items-center justify-center">
        <div className="text-white text-2xl md:text-5xl pt-5  md:pt-16 flex items-center mb-3 md:mb-9  ">
          <VscCallOutgoing />
          <h1 className="ml-2 md:ml-5">9528865610</h1>
        </div>
        <div className="flex items-center text-2xl md:text-5xl text-white mb-3 md:mb-9">
          <VscMail />
          <h1 className="ml-2 md:ml-5">jiteshbhatt60@gmail.com</h1>
        </div>
        <h1 className=" text-md md:text-2xl text-white md:mb-2">
          Bametha Bangar kheema , Halduchaur
        </h1>
        <h1 className="text-md md:text-2xl text-white md:mb-2 ">
          Haldwani , Nainital
        </h1>
        <h1 className="text-md md:text-2xl text-white">Uttarakhand , 263139</h1>
      </div>
      <Footer />
    </div>
  );
}

export default ContactLast;
