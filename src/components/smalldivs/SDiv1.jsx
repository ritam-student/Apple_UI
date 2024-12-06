

function SDiv1(){
    return (
        <>
            <a href="#" className="w-full md:w-[49.2%] md:mt-2 h-[600px] bg-black relative overflow-hidden object-cover">
                <div className="absolute left-[50%] translate-x-[-50%] bottom-[8%]  translate-y-[-8%]  z-30 text-center ">
                    <h1 className="text-4xl text-white font-semibold">AirPods Pro 2</h1>
                    <p className="relative text-white text-xl mt-[8px] ">Now with a Hearing Aid <span className="relative"> feature. <span className="absolute top-[-16%] right-[-12%] text-white text-[13px] font-semibold ">2</span></span></p>
                    <div className="flex justify-center items-center gap-3 mt-3" >
                        <button className="text-white font-normal text-sm bg-blue-600 hover:bg-blue-500  md:py-2 py-1 px-4  w-[110px] rounded-full ">Learn more</button>
                        <button className="text-blue-500 hover:text-white hover:bg-blue-500 font-normal text-sm   py-1  md:py-2 px-2  w-[70px] text-center rounded-3xl border-[1px]  border-blue-600 ">Buy</button>
                    </div>
                </div>
                <img src="https://www.apple.com/v/home/bv/images/promos/airpods-pro-2/promo_airpods_pro_2_avail__vkitqi3okwie_medium.jpg" className="h-full w-full -z-40" alt="" />
            </a>
        </>
    )
}


export default SDiv1;