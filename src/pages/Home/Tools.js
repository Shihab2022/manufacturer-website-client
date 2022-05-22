import React, { useEffect, useState } from "react";
import bgProducts from "../../assets/img/bgProducts.jpg";
import Tool from "./Tool";
const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgProducts})` }}
        className=" relative w-screen"
      >
          <h1 className="pt-5 text-[#002341] text-center text-5xl font-bold">Our Products</h1>
        <div className="grid grid-cols-3 gap-5 px-40 py-10">

            {
                tools.map(tool=><Tool key={tool._id} tool={tool}></Tool>)
            }
        </div>
      </div>
    </>
  );
};

export default Tools;
