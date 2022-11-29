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
            <h1 className="flex flex-col font-mono text-3xl text-left ">
              Let Work Together.
              <span>Drop Me A Line.</span>
            </h1>
          </div>
          <div className="flex items-center justify-between p-10">
            <Card>
              <div className="px-20">
                <h1 className="font-mono text-2xl">Email Address</h1>
                <h1 className="font-thin text-md hover:text-red-500">
                  jiteshbhatt60@gmail.com
                </h1>
              </div>
            </Card>
            <Card>
              <div className="px-20">
                <h1 className="font-mono text-2xl">Phone Number</h1>
                <h1 className="font-thin text-md hover:text-red-500">
                  9528865610
                </h1>
              </div>
            </Card>
            <Card>
              <div className="px-20">
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
