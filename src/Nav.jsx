import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav () {

    return (
        <div className=" h-auto ">
            <div className="w-full md:h-[6vh] py-4 bg-black text-white bg-opacity-90  fixed top-0 left-0 bottom-4 z-50 text-[13px]  h-[8vh] px-[3vw] md:px-[10vw]  lg:px-[17vw] flex justify-between items-center ">
                <FaApple className="lg:h-[17px] h-[23px] w-[23px] lg:w-[17px] opacity-85 hover:opacity-100 cursor-pointer" />
                <a href="" className="opacity-75 hover:opacity-100 hidden lg:block">Store</a>
                <a href="" className="opacity-75 hover:opacity-100 hidden lg:block">Mac</a>
                <a href="" className="opacity-75 hover:opacity-100 hidden lg:block">ipad</a>
                <a href="" className="opacity-75 hover:opacity-100 hidden lg:block">iphone</a>
                <a href="" className="opacity-75 hover:opacity-100 hidden mlg:block">watch</a>
                <a href="" className="opacity-75 hover:opacity-100 hidden mlg:block">vision</a>
                <a href="" className="opacity-75 hover:opacity-100 hidden lg:block">AirPods</a>
                <a href="" className="opacity-75 hover:opacity-100 hidden lg:block">TV & Home</a>
                <a href="" className="opacity-75 hover:opacity-100 hidden lg:block">Entertainment</a>
                <a href="" className="opacity-75 hover:opacity-100 hidden lg:block">Accessories</a>
                <a href="" className="opacity-75 hover:opacity-100 hidden lg:block">Support</a>
                   
                
                    <div className="flex items-center justify-between gap-[5vw]  lg:gap-[2.9vw]  ">
                        <CiSearch className="lg:h-[17px] h-[23px] w-[23px] lg:w-[17px] opacity-75 hover:opacity-100 cursor-pointer" />
                        <IoBagOutline className="lg:h-[17px] h-[23px] w-[23px] lg:w-[17px] opacity-75 hover:opacity-100 cursor-pointer" />
                        <GiHamburgerMenu className="lg:h-[17px] h-[23px] w-[23px] lg:w-[17px] opacity-75 hover:opacity-100 block lg:hidden cursor-pointer" />
                    </div>
                
            </div>
            
            
        </div>
    )
}


export default Nav;