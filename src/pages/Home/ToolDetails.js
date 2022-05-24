import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ToolModal from '../Modal/ToolModal'
const ToolDetails = () => {
    const {toolId}=useParams()
    // console.log(toolId)
    const [tool,setTool]=useState({})
    useEffect(()=>{
        const url=`http://localhost:5000/tools/${toolId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTool(data))

    },[toolId])
 
    const { name, img, price ,about,aviQuantity,miniQuantity} = tool;
  
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 px-5 py-5 lg:px-32 justify-center items-center'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className='text-3xl font-bold text-[#002341]'>{name}</h2>
               
                <p className='text-2xl '>Minimum Order : <span className='font-semibold text-amber-600'>{miniQuantity}</span></p>
                <p className='text-2xl '>Avilable Stock : <span className='font-semibold text-amber-600'>{aviQuantity}</span></p>
                <h2 className='text-sm text-zinc-400'>{about}</h2>
                <h2 className='text-2xl my-3'>  <span className='font-semibold text-amber-600'>${price}</span></h2>
                <label  for="tool-modal"  className='btn bg-[#002341] px-10'>Order</label>
                <Link to='/getReview'   className='btn bg-[#002341] px-10 ml-3'>Review</Link>
                {/* <label for="tool-modal"  className="btn modal-button">open modal</label> */}
            </div>
            <ToolModal tool={tool}></ToolModal>
        </div>
    );
};

export default ToolDetails;