

function SDiv4(){
    return (
        <>
            <a href="#" className="w-full md:w-[49.2%] md:mt-2 h-[600px] bg-black relative overflow-hidden object-cover">
                <div className="absolute left-[50%] w-[400px] translate-x-[-50%] bottom-[8%] translate-y-[-8%]  z-30 text-center flex flex-col justify-center items-center ">
                    <h1 className="text-4xl text-white font-semibold">AirPods 4</h1>
                    <p className="relative text-white text-xl mt-[8px] ">Iconic. Now supersonic.</p>
                    <p className="relative text-white text-xl ">Available with Active Noise Cancellation.<span className="absolute top-[-16%] right-[-2%] text-white text-[13px] font-semibold ">3</span></p>
                    <div className="flex justify-center items-center gap-3 mt-3" >
                        <button className="text-white font-normal text-sm bg-blue-600 hover:bg-blue-500  md:py-2 py-1 px-4  w-[110px] rounded-full ">Learn more</button>
                        <button className="text-blue-500 hover:text-white hover:bg-blue-500 font-normal text-sm   py-1  md:py-2 px-2  w-[70px] text-center rounded-3xl border-[1px]  border-blue-600 ">Buy</button>
                    </div>
                </div>



                <img src="
https://www.apple.com/v/home/bv/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_medium.jpg" className="h-full w-full" alt="" />
            </a>
        </>
    )
}


export default SDiv4;