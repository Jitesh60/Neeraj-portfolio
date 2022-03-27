import react from "react";
import { BsHeartFill, BsTwitter, BsFacebook, BsLinkedin, BsInstagram  } from "react-icons/bs";

function Footer() {
    return (
        <div className="flex items-center justify-between">
            <div className=" flex">
             <h1 className="  flex items-center text-slate-700" >Copyright ©2022 All rights reserved | This Portfolio is made with <span className="ml-2 mr-2 text-red-500"><BsHeartFill/></span> by <a href="https://codeyogi.io/" target="blank" className="text-red-500 ml-2">CodeYogi</a></h1>
            </div>
            <div className="  text-slate-500 hover:bg-text-white flex items-center">
                <h1 className="hover:text-white">Stay Connected</h1>
                <a className="ml-3 " href="https://twitter.com/home" target="blank"><span className="hover:text-white"><BsTwitter /></span></a>
                <a className="ml-3" href="https://m.facebook.com/100008920776995/" target="blank"><span className="hover:text-white"><BsFacebook /></span></a>
                <a className="ml-3 " href="https://www.linkedin.com/in/jitesh-bhatt-999422211" target="blank"><span className="hover:text-white"><BsLinkedin /></span></a>
                <a className="ml-3" href="https://instagram.com/_._jitesh_?utm_medium=copy_link" target="blank"><span className="hover:text-white"><BsInstagram/></span></a>
            </div>
        </div>
    );
}

export default Footer;