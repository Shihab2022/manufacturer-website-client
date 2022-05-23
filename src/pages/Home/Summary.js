import React from "react";
import sliderTwo from '../../assets/img/sliderTwo.jpg'
import manIcon from '../../assets/icon/manIcon.png'
import { FaFlag } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
const Summary = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${sliderTwo})` }}className=" flex flex-col justify-center items-center  w-screen" >
<div className="flex flex-col justify-center text-white items-center pt-5">
    <h1 className="text-4xl font-bold  ">MILLION COMPANY TRUST US</h1>
    <p className="my-3">TRY TO UNDERSTAND YOUR EXPECTATION</p>
</div>


<div className="grid grid-cols-3 py-10 text-white px-32 gap-80">
    <div className="flex flex-col justify-center items-center">
  <span className="text-5xl ">  <FaFlag /></span>
        <p className="text-xl font-semibold">76</p>
        <p className="text-xl font-bold">Countries</p>
       
    </div>
    <div className="flex flex-col justify-center items-center">
    <span className="text-5xl ">  <FcManager /></span>
        <p className="text-xl font-semibold">76</p>
        <p className="text-xl font-bold">Countries</p>
        
    </div>
    <div className="flex flex-col justify-center items-center">
    <span className="text-5xl ">  <FaFlag /></span>
        <p className="text-xl font-semibold">76</p>
        <p className="text-xl font-bold">Countries</p>
        
    </div>
</div>
</div>
    </>
  );
};

export default Summary;
