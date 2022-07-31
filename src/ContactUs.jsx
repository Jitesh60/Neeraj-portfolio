import react from "react";

function ContactUs() {
  return (
    <div className=" flex justify-between items-center p-3 bg-gray-100 rounded-md shadow-xl">
      <h1 className="text-md md:text-3xl font-bold text-red-500 flex flex-col">
        Don't Worry about Contact
        <span>i'm available</span>
      </h1>
      <div className="  rounded-lg  hover:bg-red-900 text-white font-medium  bg-red-500 ">
        <h1 className=" text-xs md:text-xl p-3 cursor-not-allowed ">
          Contact me now
        </h1>
      </div>
    </div>
  );
}

export default ContactUs;
