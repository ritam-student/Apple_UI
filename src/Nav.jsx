import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav () {

    return (
        <div className="md:h-[90px] h-[130px] ">
            <div className="w-full md:h-[6vh] bg-[#F5F5F7] bg-opacity-90  fixed top-0 left-0 z-50 text-[13px]  h-[6.8vh] px-[3vw] md:px-[10vw]  lg:px-[17vw] flex justify-between items-center ">
                <FaApple className="lg:h-[17px] h-[23px] w-[23px] lg:w-[17px] opacity-85 hover:opacity-100 " />
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
                        <CiSearch className="lg:h-[17px] h-[23px] w-[23px] lg:w-[17px] opacity-75 hover:opacity-100" />
                        <IoBagOutline className="lg:h-[17px] h-[23px] w-[23px] lg:w-[17px] opacity-75 hover:opacity-100" />
                        <GiHamburgerMenu className="lg:h-[17px] h-[23px] w-[23px] lg:w-[17px] opacity-75 hover:opacity-100 block lg:hidden" />
                    </div>
                
            </div>
            
            <p className="text-black absolute text-center top-[55px] text-[14px] left-[50%] translate-x-[-50%] md:w-full ">We’re donating $5 to the Global Fund for every purchase made with Apple Pay at Apple. Through 12/8. <span className="text-blue-500"> Shop   </span></p>
            
        </div>
    )
}


export default Nav;