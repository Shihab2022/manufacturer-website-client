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
        <div className="flex lg:flex-row flex-col justify-around items-center">
          <div className="lg:mt-0 mt-14">
            <h1 className="text-xl font-bold text-white">Products</h1>
            <h1 className="lg:text-9xl text-5xl font-bold ml-0 text-white">
              DPB-600
            </h1>
            <h1 className="lg:text-xl text-sm font-bold mt-3 text-white">
              BETTER BLOWER QUIENTLY CLEARS WAY
            </h1>
          </div>
          <div>
            <img className="mt-8 h-[80%]" src={slide2} alt="" />
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${bg1})` }}
        className="h-[70vh] w-screen lg:block hidden"
      >
        <div className="absolute mt-[-150px] lg:ml-40">
          <div className="flex lg:flex-row flex-col justify-center h-[90%]   items-center">
            <img className=" lg:h-[500px]" src={image1} alt="" />
            <div className="">
              <img className=" lg:h-[250px]" src={image2} alt="" />
              <img className=" lg:h-[250px]" src={image3} alt="" />
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
