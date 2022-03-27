import react from "react";

function ContactUs() {
    return (
        <div className=" flex justify-between p-16 bg-gray-100">
            <h1 className="text-3xl font-bold text-red-500 flex flex-col">Don't Worry about Contact
                <span>i'm available</span>
            </h1>
            <div className='  rounded-lg hover:bg-red-900 text-white font-medium  bg-red-500 p-5'>
                <h1 className="text-xl ">Contact me now</h1>
                </div>
        </div>

    );
}

export default ContactUs;