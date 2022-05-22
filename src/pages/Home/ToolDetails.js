import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    const { name, img, price ,about} = tool;
    return (
        <div className='grid grid-cols-2 px-32 justify-center items-center'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <h2>{price}</h2>
                <h2>{about}</h2>
                <h2>{name}</h2>
            </div>
            
        </div>
    );
};

export default ToolDetails;