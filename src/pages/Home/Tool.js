import React from "react";
import { FaShoppingBasket, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tool = ({ tool,index }) => {
  const { name, img, price ,_id} = tool;

  return (
    <div data-aos="fade-down"  className="relative">
      <img      src={img} 
                data-default-width="100"
                 height="350"
                 width='340'
                 data-default-height="100"
                  className=" rounded shadow-lg"
                   alt="" />
      <p className="absolute top-3 left-2 text-xl font-semibold text-[#002341]">{name}</p>
      <div className="absolute top-60 lg:top-64">
      <div className="grid grid-cols-2 justify-between items-center px-5 ">
        <div>
          <p>{price}</p>
          <div className="flex text-yellow-500 mt-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <Link to={`/home/${_id}`}  className="ml-20 lg:ml-24  border-zinc-400 hover:text-white hover:bg-amber-600 text-zinc-600 rounded-full  h-14 w-14 flex justify-center items-center border-2 text-3xl">
          <FaShoppingBasket />
        </Link>
      </div>

      </div>
      
    </div>
  
  );
};

export default Tool;
