import React from "react";
import th from "../../assets/icon/th.webp";
import th1 from "../../assets/icon/th1.webp";
import like from "../../assets/icon/like.webp";
import mark from "../../assets/icon/mark.webp";
const Summary = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center  w-screen">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center  items-center pt-10"
        >
          <h1 className="lg:text-4xl text-2xl font-bold  ">
            MILLION <span className="text-amber-600"> COMPANY</span> TRUST US
          </h1>
          <p className="my-3">TRY TO UNDERSTAND YOUR EXPECTATION</p>
        </div>

        <div
          data-aos="fade-up"
          className="grid lg:grid-cols-4 grid-cols-1 text-2xl py-14 gap-5 px-5  w-full  lg:px-32 "
        >
          <div className="flex flex-col  justify-center items-center">
            <img
              data-default-width="450"
              height="100"
              width="150"
              data-default-height="100"
              src={th}
              alt=""
            />

            <p className=" font-bold mt-3">76</p>
            <p className=" font-extrabold  text-sky-900">Countries</p>
          </div>
          <div
            data-aos="fade-down"
            className="flex  flex-col justify-center items-center"
          >
            <img
              data-default-width="450"
              height="100"
              width="150"
              data-default-height="100"
              src={th1}
              alt=""
            />

            <p className="font-bold mt-3">353+</p>
            <p className="font-extrabold  text-sky-900">Happy Clients</p>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-center"
          >
            <img
              data-default-width="450"
              height="100"
              width="150"
              data-default-height="100"
              src={mark}
              alt=""
            />

            <p className="font-bold mt-3">543+</p>
            <p className="font-extrabold  text-sky-900">Complete Order</p>
          </div>
          <div
            data-aos="fade-down"
            className="flex flex-col justify-center items-center"
          >
            <img
              data-default-width="450"
              height="100"
              width="150"
              data-default-height="100"
              src={like}
              alt=""
            />

            <p className="font-bold mt-3">483+</p>
            <p className="font-extrabold  text-sky-900">Feedback</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
