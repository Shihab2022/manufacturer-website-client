import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
// import Loading from '../../components/Loading';
// import ToolModal from '../Modal/ToolModal'
const ToolModal = React.lazy(() => import('../Modal/ToolModal'));
const Loading = React.lazy(() => import('../../components/Loading'));

const ToolDetails = () => {
    const {toolId}=useParams()
    const [tool,setTool]=useState({})
    useEffect(()=>{
        const url=`https://allegro-server-production-4215.up.railway.app/tools/${toolId}`
        // const url=`http://localhost:5000/tools/${toolId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTool(data))

    },[toolId])
 
    const { name, img, price ,about,aviQuantity,miniQuantity} = tool;
  
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 px-5 py-5 lg:px-32 justify-center items-center'>
            <div data-aos="fade-down-right">
                <img src={img} alt="" />
            </div>
            <div data-aos="fade-down-left">
                <h2 className='text-3xl font-bold text-[#002341]'>{name}</h2>
               
                <p className='text-2xl '>Minimum Order : <span className='font-semibold text-amber-600'>{miniQuantity}</span></p>
                <p className='text-2xl '>Avilable Stock : <span className='font-semibold text-amber-600'>{aviQuantity}</span></p>
                <h2 className='text-sm text-zinc-400'>{about}</h2>
                <h2 className='text-2xl my-3'>  <span className='font-semibold text-amber-600'>${price}</span></h2>
                <label  for="tool-modal"  className='btn bg-[#002341] px-10'>Order</label>
            </div>
            <React.Suspense  fallback={<Loading/>}>
            <ToolModal tool={tool}></ToolModal>
            </React.Suspense>
        </div>
    );
};

export default ToolDetails;