import React, { useEffect, useState } from "react";
import bgProducts from "../../assets/img/bgProducts.jpg";
import Tool from "./Tool";
const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://frozen-badlands-14934.herokuapp.com/tools")
    // fetch("http://localhost:5000/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgProducts})` }}
        className=" relative w-screen px-5 py-5"
      >
          <h1 className="pt-5 text-[#002341] text-center text-5xl py-5 font-bold">Our Products</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 lg:px-40 px-5 lg:py-10">

            {
                tools.map((tool,index)=><Tool key={tool._id} index={index} tool={tool}></Tool>)
            }
        </div>
      </div>
    </>
  );
};

export default Tools;
