

function SDiv2(){
    return (
        <>
            <a href="#" className="w-full md:w-[49.2%] md:mt-2 h-[600px] bg-blue-50 relative overflow-hidden object-cover border-none">
                <div className="absolute left-[50%] translate-x-[-50%] top-[10%] translate-y-[-10%]  z-30 text-center flex flex-col justify-center items-center border-none">
                    <img src="https://www.apple.com/v/home/bv/images/logos/apple-watch-series-10/promo_logo_apple_watch_series_10__qk5vaa89vnm2_medium.png"  alt="" />
                    <p className="relative text-black text-xl mt-[8px] ">Thinstant classic.</p>
                    <div className="flex justify-center items-center gap-3 mt-3 border-none" >
                        <button className="text-white font-normal text-sm bg-blue-600 hover:bg-blue-500  md:py-2 py-1 px-4  w-[110px] rounded-full ">Learn more</button>
                        <button className="text-blue-500 hover:text-white hover:bg-blue-500 font-normal text-sm   py-1  md:py-2 px-2  w-[70px] text-center rounded-3xl border-[1px]  border-blue-600 ">Buy</button>
                    </div>
                </div>
                <img src="https://www.apple.com/v/home/bv/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_medium.jpg" className="h-full w-full block md:hidden" alt="" />
                <img src="https://www.apple.com/v/home/bv/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_large.jpg" className="hidden md:block h-full  w-full scale-x-150 " alt="" />
            </a>
        </>
    )
}


export default SDiv2;