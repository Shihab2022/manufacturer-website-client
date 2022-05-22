import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ToolModal from '../Modal/ToolModal'
const ToolDetails = () => {
    const {toolId}=useParams()
    console.log(toolId)
    const [tool,setTool]=useState({})
    useEffect(()=>{
        const url=`http://localhost:5000/tools/${toolId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTool(data))

    },[toolId])
    console.log(tool)
    const { name, img, price ,about,aviQuantity,miniQuantity} = tool;
    return (
        <div className='grid grid-cols-2 px-32 justify-center items-center'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className='text-3xl font-bold text-[#002341]'>{name}</h2>
               
                <p className='text-2xl '>Minimum Order : <span className='font-semibold text-amber-600'>{miniQuantity}</span></p>
                <p className='text-2xl '>Avilable Stock : <span className='font-semibold text-amber-600'>{aviQuantity}</span></p>
                <h2 className='text-sm text-zinc-400'>{about}</h2>
                <h2 className='text-2xl'>  <span className='font-semibold text-amber-600'>{price}</span></h2>
                <button className='btn bg-[#002341] px-10'>Order</button>
                <label for="tool-modal"  class="btn modal-button">open modal</label>
            </div>
            <ToolModal></ToolModal>
        </div>
    );
};

export default ToolDetails;