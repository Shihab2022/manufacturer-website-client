import React from "react";
import slider1 from "../../assets/img/slider1.webp";
import slide2 from "../../assets/img/slide2.webp";
import bg1 from "../../assets/img/bg1.webp";
import image1 from "../../assets/img/image1.webp";
import image2 from "../../assets/img/image2.webp";
import image3 from "../../assets/img/image3.webp";

const Slider = () => {
  return (
    <>
      <div
        data-default-width="450"
        height="100"
        width="550"
        data-default-height="100"
        style={{ backgroundImage: `url(${slider1})` }}
        className="lg:h-screen h-4/6 relative w-screen "
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
          <img
            data-default-width="450"
            height="100"
            width="550"
            data-default-height="100"
            className="mt-8  "
            src={slide2}
            alt="slider "
          />
        </div>
      </div>

      <div
        style={{ backgroundImage: `url('${bg1}')` }}
        className="h-[70vh] w-screen lg:block hidden"
      >
        <div className="absolute mt-[-150px] lg:ml-40">
          <div className="flex lg:flex-row flex-col justify-center h-[90%]   items-center">
            <div data-aos="fade-down-right" className="lg-w-[600px] relative ">
              <img
                data-default-width="450"
                height="100"
                width="480"
                data-default-height="100"
                className="w-full"
                src={image1}
                alt="power beyond bellef"
              />
              <h1
                data-aos="fade-right"
                className="text-7xl  absolute left-10 mt-10  top-0 text-green-400  font-extrabold"
              >
                Power Beyond Bellef
              </h1>
              <h1
                data-aos="fade-right"
                className="text-3xl  absolute left-10 mt-24  top-28 text-white font-bold"
              >
                Performance of gas without the noise, <br /> fuss & fumes{" "}
              </h1>
            </div>

            <div className="">
              <div className="relative">
                <img
                  data-aos="fade-up-left"
                  data-aos-duration="1500"
                  className=" lg:h-64"
                  data-default-width="450"
                  height="280"
                  width="620"
                  data-default-height="100"
                  src={image2}
                  alt="hepa"
                />

                <h1
                  data-aos="fade-left"
                  className="text-7xl  absolute left-10 mt-10  top-0 text-yellow-400 font-extrabold"
                >
                  {" "}
                  Hepa
                </h1>
                <h1
                  data-aos="fade-left"
                  className="text-3xl  absolute left-10 mt-4 top-28 text-white font-bold"
                >
                  Dust extractors{" "}
                </h1>
              </div>
              <div data-aos="fade-up-left" className="relative">
                <img
                  data-default-width="450"
                  height="280"
                  width="620"
                  data-default-height="100"
                  className=" lg:h-64"
                  src={image3}
                  alt="festool set"
                />
                <h1
                  data-aos="fade-left"
                  className="text-4xl  absolute  left-60 mt-14  top-0 text-yellow-400 font-extrabold"
                >
                  Festool Installers Set
                </h1>
                <h1
                  data-aos="fade-left"
                  className="text-3xl  absolute left-60 mt-4 top-28 text-white font-bold"
                >
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
