/* eslint-disable no-unused-vars */
import imgs from "./images";
import './App.css'
import Nav from "./Nav";

function App() {

  return (
    <>
      <Nav/>

      {/**    div 1    */}
      <a href="#"><div className="bg-black bg-cover bg-center relative
      bg-[url('https://www.apple.com/v/home/bv/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_small.jpg')] 
      md:bg-[url('https://www.apple.com/v/home/bv/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_mediumtall.jpg')] 
      w-full h-[500px] md:h-[600px] mt-24 object-cover bg-no-repeat text-white">
        <div className="absolute  left-[50%] translate-x-[-50%] md:top-8 bottom-[25px] w-full ">
        <div id="content1" className=" flex flex-col justify-center items-center w-full ">
        <h1 className="text-white  font-semibold text-5xl tracking-tighter leading-[50px] ">iPhone 16 Pro</h1>
        <p className=" font-normal text-white  text-2xl tracking-tight  mt-[4px] leading-[40px]">Hello, Apple Intelligence.</p>
        <div className="flex justify-between items-center gap-4 mt-4" >
          <button className="text-white font-normal text-sm bg-blue-600 hover:bg-blue-500 md:text-lg md:py-2 py-1 px-2 md:w-[140px] w-[95px] rounded-full ">Learn more</button>
          <button className="text-blue-500 hover:text-white hover:bg-blue-500 font-normal text-sm md:text-lg  py-1  md:py-2 px-2 md:w-[90px] w-[70px] text-center rounded-3xl border-[1px]  border-blue-600 ">Buy</button>
        </div>
        </div>
        </div>
      </div></a>

      {/**    div 2    */}

      <a href="#">
        <div className="w-full h-[500px] md:h-[600px] bg-gradient-to-b from-blue-950 to-blue-50">
        <div className=" bg-cover bg-center relative 
      bg-[url('https://www.apple.com/v/home/bv/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_small.jpg')] 
      md:bg-[url('https://www.apple.com/v/home/bv/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_mediumtall.jpg')] 
      w-full h-full mt-3 object-cover bg-no-repeat text-white">
        <div className="md:h-[38%]   w-full flex justify-center pt-6 ">
        <div id="content1" className=" flex flex-col justify-center items-center w-full ">
          <h1 className="text-white  font-semibold text-5xl tracking-tighter leading-[50px] ">iPhone 16</h1>
          <p className=" font-normal text-white text-2xl tracking-tight  mt-2 leading-[40px]">Hello, Apple Intelligence.</p>
          <div className="flex justify-between items-center gap-4 mt-4 " >
            <button className="text-black font-normal text-sm bg-white md:text-lg md:py-2 py-1 px-2 md:w-[140px] w-[95px] rounded-full ">Learn more</button>
            <button className=" hover:text-black hover:bg-white font-normal text-sm md:text-lg  py-1  md:py-2 px-2 md:w-[90px] w-[70px] text-center rounded-3xl border-[1px]  border-white ">Buy</button>
          </div>
        </div>
        </div>
      </div>
        </div>
      </a>

      {/**    div 3    */}


      <a href="#">
        <div className="w-full h-[500px] md:h-[650px] bg-blue-50 mt-3">
        <div className=" bg-center md:bg-[length:1200px_653px] lg:bg-[length:2560px_653px] bg-[length:590px_500px] relative 
      bg-[url('https://www.apple.com/v/home/bv/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_small.jpg')] 
      md:bg-[url('https://www.apple.com/v/home/bv/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_mediumtall.jpg')] 
      w-full h-full  object-cover bg-no-repeat text-white">
        <div className="md:h-[38%] w-full flex justify-center  pt-6">
        <div id="content1" className=" flex flex-col justify-center items-center w-full ">
          <img src="https://www.apple.com/v/home/bv/images/logos/ipad-air/hero_logo_ipad_air__ejixj9pic0uq_medium.png" alt="" />
          <p className=" font-normal text-black text-xl md:text-3xl tracking-tight  mt-2">Two sizes. Faster chip. Does it all.</p>
          <div className="flex justify-between items-center gap-4 mt-4" >
            <button className="text-white font-normal text-sm bg-blue-600 hover:bg-blue-500 md:text-lg md:py-2 py-1 px-2 md:w-[140px] w-[95px] rounded-full ">Learn more</button>
            <button className="text-blue-500 hover:text-white hover:bg-blue-500 font-normal md:text-lg text-sm py-1  md:py-2 px-2 md:w-[90px] w-[70px] text-center rounded-3xl border-[1px]  border-blue-600 ">Buy</button>
          </div>
        </div>
        </div>
      </div>
      </div>
      </a>


      {/**     div 4   */}
    
    </>
  )
}

export default App
