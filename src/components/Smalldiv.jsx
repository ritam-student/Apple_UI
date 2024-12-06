/* eslint-disable react/prop-types */


function SmallDiv(props) {
    return (
        <>
            <div className="w-full md:w-[49.2%] md:mt-2  h-[500px] relative  text-pink-600" >
                <div className="absolute left-[50%] translate-x-[-50%] flex flex-col justify-center items-center text-center w-[50%] bg-green-600 ">
                    <h2>{props.h}</h2>
                    <p className=" text-center">{props.text}</p>
                    <div>
                        <button>Learn more</button>
                        {
                            props.buy? <button>Buy</button> : ""
                        }  
                    </div>
                </div>
            </div>
        </>
    )
}


export default SmallDiv;