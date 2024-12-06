

function SDiv5(){
    return (
        <>
            <a href="#" className="w-full md:w-[49.2%] md:mt-2 h-[600px] bg-blue-50 relative overflow-hidden object-cover">

                <div className="absolute left-[50%] w-[400px] translate-x-[-50%] bottom-[8%] translate-y-[-8%]  z-30 text-center flex flex-col justify-center items-center ">
                    <h1 className="text-4xl text-black font-semibold">Carrier deals at Apple</h1>
                    <p className="relative text-black text-xl mt-[8px] ">Get up to $1000 on a new iphone.</p>
                    <p className="relative text-black text-xl ">Trade-in may be required.<span className="absolute top-[-16%] right-[-3%] text-black text-[13px] ">4</span></p>
                    <div className="flex justify-center items-center gap-3 mt-3" >
                        <button className="text-white font-normal text-sm bg-blue-600 hover:bg-blue-500  py-2  px-[6px]  w-[130px] rounded-full ">Find your deal</button>
                    </div>
                </div>


                <img src="
https://www.apple.com/v/home/bv/images/promos/carriers/promo_carrier__e0izvxwqosgi_medium.jpg" className="h-full w-full" alt="" />
            </a>
        </>
    )
}


export default SDiv5;