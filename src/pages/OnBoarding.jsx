import { David, Solidity } from "../assets";
import {Link} from "react-router-dom";
import {Twitter, Github} from "lucide-react";

const OnBoarding = () => {
    return(
        <div className="flex flex-col items-center justify-center text-center pt-[200px] relative">
            <div className="flex flex-col text-center z-[999px] relative">
            <h1 className="md:text-[90px] text-white text-[35px] font-bold">Get your customized Social banner.</h1>
            <p className="md:text-[70px] text-transparent text-white font-800 text-[30px]">for Software Developers & Designers.</p>
            </div>

            <Link to={"/get-started"}>
            <button className="bg-white text-purple-700 text-[20px] mt-[50px] w-[300px] p-[10px] rounded-[15px] font-semibold">get started! 👩‍🍳</button>
            </Link>
            <div>
                <img className="rounded-[10px] mt-[100px] w-[1000px] md:px-[0px] px-[20px]" src={David} alt="david" />
                
            </div>
            <div className="mt-[50px] flex gap-4">
                <div className="bg-purple-400 md:p-[10px] rounded-[10px] cursor-pointer p-[8px]">
                <Twitter className="md:w-[25px] text-white w-[20px]" />
                </div>
                <div className="bg-purple-400 md:p-[10px] rounded-[10px] cursor-pointer p-[8px]">
                <Github className="md:w-[25px] text-white w-[20px]" />
                </div>
            </div>
        </div>
    )
}

export default OnBoarding;