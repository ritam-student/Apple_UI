

function SDiv3(){
    return (
        <>
            <a href="#" className="w-full md:w-[49.2%] md:mt-2 h-[600px] bg-blue-50 relative overflow-hidden object-cover">
                <div className="absolute left-[50%] translate-x-[-50%] top-[8%] translate-y-[-8%]  z-30 text-center ">
                    <h1 className="md:text-5xl text-4xl text-black font-semibold">MacBook Air</h1>
                    <p className="relative text-black text-2xl mt-[8px] ">Lean. Mean. M3 machine.</p>
                    <div className="flex justify-center items-center gap-3 mt-3" >
                        <button className="text-white font-normal text-sm bg-blue-600 hover:bg-blue-500  md:py-2 py-1 px-4  w-[110px] rounded-full ">Learn more</button>
                        <button className="text-blue-500 hover:text-white hover:bg-blue-500 font-normal text-sm   py-1  md:py-2 px-2  w-[70px] text-center rounded-3xl border-[1px]  border-blue-600 ">Buy</button>
                    </div>
                </div>
                <img src="
https://www.apple.com/v/home/bv/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_medium.jpg" className="h-full w-full" alt="" />
            </a>
        </>
    )
}


export default SDiv3;