import React, { useEffect, useState } from "react";
import bgProducts from "../../assets/img/bgProducts.webp";
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
       data-default-width="450"
       height="100"
       width='100%'
       data-default-height="100"
        style={{ backgroundImage: `url(${bgProducts})` }}
        className=" relative  px-5 py-5"
      >
          <h1 className="pt-5 text-cyan-900 text-center text-5xl py-5 font-bold">Our Products</h1>
        <div className="grid md:grid-cols-2  grid-cols-1 lg:grid-cols-3 gap-5 lg:px-40 px-5 lg:py-10">

            {
                tools.map((tool,index)=><Tool key={tool._id} index={index} tool={tool}></Tool>)
            }
        </div>
      </div>
    </>
  );
};

export default Tools;
