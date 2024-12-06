import SDiv1 from "./smalldivs/SDiv1"
import SDiv2 from "./smalldivs/SDiv2"
import SDiv3 from "./smalldivs/SDiv3"
import SDiv4 from "./smalldivs/SDiv4"
import SDiv5 from "./smalldivs/SDiv5"
import SDiv6 from "./smalldivs/SDiv6"


function Div4(){
    return (
        <>
            <div className="flex flex-wrap justify-around items-center md:gap-0 gap-2">
                <SDiv1/>
                <SDiv2/>
                <SDiv3/>
                <SDiv4/>
                <SDiv5/>
                <SDiv6/>
            </div>
        </>
    )
    
}


export default Div4