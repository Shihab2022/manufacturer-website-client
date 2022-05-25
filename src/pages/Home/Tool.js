import React from "react";
import { FaShoppingBasket, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  const { name, img, price ,_id} = tool;
//   const [data,setData]=useState('')
//   const navigate=useNavigate()
  return (
    <div className="relative">
      <img src={img} className="h-[350px] w-[340px] rounded shadow-lg" alt="" />
      <p className="absolute top-3 left-2 text-xl font-semibold text-[#002341]">{name}</p>
      <div className="absolute top-72">
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
        <Link to={`/home/${_id}`}  className="ml-24  border-zinc-400 hover:text-white hover:bg-amber-600 text-zinc-600 rounded-full p-2 border-2 text-3xl">
          <FaShoppingBasket />
        </Link>
      </div>

      </div>
      
    </div>
  
  );
};

export default Tool;
