import React from "react";
import slider1 from "../../assets/img/slider1.jpg";
import slide2 from "../../assets/img/slide2.png";
import bg1 from "../../assets/img/bg1.jpg";
import image1 from "../../assets/img/image1.jpg";
import image2 from "../../assets/img/image2.jpg";
import image3 from "../../assets/img/image3.jpg";


const Slider = () => {

  

  return (
    <>
      <div
        style={{ backgroundImage: `url(${slider1})` }}
        className="h-[95vh] relative w-screen"
      >
        <div  className="flex lg:flex-row flex-col justify-around items-center">
          <div data-aos="fade-down" className="lg:mt-0 mt-14">
            <h1 className="text-xl font-bold text-white">Products</h1>
            <h1 className="lg:text-9xl text-5xl font-bold ml-0 text-white">
              DPB-600
            </h1>
            <h1 className="lg:text-xl text-sm font-bold mt-3 text-white">
              BETTER BLOWER QUIENTLY CLEARS WAY
            </h1>
          </div>
          <div>
            <img data-aos="fade-up" className="mt-8 h-[80%]" src={slide2} alt="" />
          </div>
        </div>
      </div>

      <div
      data-aos="fade-up"
        style={{ backgroundImage: `url(${bg1})` }}
        className="h-[70vh] w-screen lg:block hidden"
      >
        <div className="absolute mt-[-150px] lg:ml-40">
          <div className="flex lg:flex-row flex-col justify-center h-[90%]   items-center">
            <div  data-aos="fade-down-right" className="lg-w-[600px] relative ">
            <img 
            className=" lg:h-[500px] w-full" 
           src={image1} alt="" />
          <h1 
      data-aos="fade-right"   
       className="text-7xl  absolute left-10 mt-10  top-0 text-[#62c72d]  font-extrabold">
         Power Beyond Bellef</h1>
            <h1
              data-aos="fade-right"   
              className="text-3xl  absolute left-10 mt-24 top-28 text-white font-bold">
                Performance of gas without the noise, <br />  fuss & fumes </h1>
        
            </div>
            
            <div className="">
             <div  
             className="relative">
             <img 
             data-aos="fade-up-left" 
             data-aos-duration="1500"
             className=" lg:h-[250px]"
              src={image2} alt="" />
         
             <h1  
      
               data-aos="fade-left" 
                className="text-7xl  absolute left-10 mt-10  top-0 text-[#ffdc18] font-extrabold"> Hepa</h1>
            <h1 
        
             data-aos="fade-left"
              className="text-3xl  absolute left-10 mt-4 top-28 text-white font-bold">Dust extractors </h1>
            
             </div>
             <div  data-aos="fade-up-left" className="relative">
             <img
              className=" lg:h-[250px]" 
              src={image3} alt="" />
              <h1 
                 data-aos="fade-left"  
                 className="text-4xl  absolute  left-60 mt-14  top-0 text-[#ffdc18] font-extrabold">
                    Festool Installers Set</h1>
            <h1
               data-aos="fade-left"
                className="text-3xl  absolute left-60 mt-4 top-28 text-white font-bold">
                  Save Up To 50% Off 
                  </h1>
             </div>
            
            </div>
          </div>
          <h1 className="text-white font-bold mt-10 text-5xl">
            Shop by Category
          </h1>
        </div>
      </div>
    </>
  );
};

export default Slider;
