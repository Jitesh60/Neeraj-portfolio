import react from "react";
import { VscCallOutgoing, VscMail } from "react-icons/vsc";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Header from "./Header";

const ContactLast = () => {
  return (
    <div className="bg-gray-900 p-5 md:p-16 shadow-xl  ">
      <ContactUs />
      <div className="mb-9 md:mb-32  flex flex-col items-center justify-center">
        <div className="text-white  pt-5   flex items-center mb-3  ">
          <VscCallOutgoing className="text-3xl hover:animate-ping" />
          <h1 className="ml-2 text-lg ">9528865610</h1>
        </div>
        <div className="flex items-center text-white mb-2">
          <VscMail className="text-3xl hover:animate-ping" />
          <h1 className="ml-2  text-lg">jiteshbhatt60@gmail.com</h1>
        </div>
        <h1 className=" text-sm  text-white md:mb-2">
          Bametha Bangar kheema , Halduchaur
        </h1>
        <h1 className="text-sm text-white md:mb-2 ">Haldwani , Nainital</h1>
        <h1 className="text-sm text-white">Uttarakhand , 263139</h1>
      </div>
      <Footer />
    </div>
  );
};

export default ContactLast;
