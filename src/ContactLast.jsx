import react from "react";
import { VscCallOutgoing, VscMail } from "react-icons/vsc";
import Card from "./Card";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Header from "./Header";

const ContactLast = () => {
  return (
    <div>
      <div className="pb-5 shadow-xl ">
        <ContactUs />
        <div className="flex flex-col p-10">
          <div>
            <h1 className="flex flex-col mb-4 font-mono text-3xl text-center item-center md:flex md:flex-col lg:flex lg:flex-col lg:text-left ">
              Let Work Together.
              <span>Drop Me A Line.</span>
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row md:items-center md:justify-between lg:items-center lg:justify-between lg:p-10 md:p-5 ">
            <Card>
              <div className="px-5 lg:px-20 md:px-8">
                <h1 className="font-mono text-2xl">Email Address</h1>
                <h1 className="font-thin text-md hover:text-red-500">
                  jiteshbhatt60@gmail.com
                </h1>
              </div>
            </Card>
            <Card>
              <div className="px-5 lg:px-20 md:px-8">
                <h1 className="font-mono text-2xl">Phone Number</h1>
                <h1 className="font-thin text-md hover:text-red-500">
                  9528865610
                </h1>
              </div>
            </Card>
            <Card>
              <div className="px-5 lg:px-20 md:px-8">
                <h1 className="font-mono text-2xl">My Address</h1>
                <h1 className="font-thin text-md hover:text-red-500">
                  Haldwani, Uttarakhand
                </h1>
              </div>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactLast;
