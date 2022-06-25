import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const ManageProducts = () => {
    const Swal = require("sweetalert2");

    const { data:products, isLoading, refetch } = useQuery('orders', () =>fetch('https://frozen-badlands-14934.herokuapp.com/tools').then(res =>res.json()))
    
    if(isLoading){
        return <Loading></Loading>
    }
    const handleDelete = (_id, name) => {
        Swal.fire({
          title: "Are you sure?",
          text: `YOU WANT TO  DELETE ${name} product .`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            // const url = `http://localhost:5000/tools/${_id}`;
            const url = `https://frozen-badlands-14934.herokuapp.com/tools/${_id}`;
            fetch(url, {
              method: "DELETE",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  toast.success(`${name} is deleted successfully `);
                refetch()
                } else {
                  toast.error("Something wrong please try again .");
                }
              });
          }
        });
      };
    
 
    return (
        <div className="overflow-x-auto lg:px-10   w-full">

<h1 className="text-center my-8 text-3xl font-bold  uppercase">
          All  Product
        </h1>
          {/* for lg device */}
        <div className='hidden md:block'>
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
              </th>
              <th>Photo</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Delete</th>
              <th>update</th>
              
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {
                products?.map((product,index)=>
                    <tr data-aos={index%2===0 ?"fade-right" : "fade-left" } key={index}>
                    <th>
                      {index+1}
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">                     
                      <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={product.img} alt="product img" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                    {product.name}
                    </td>
                    <td>{product.aviQuantity}</td>
                    <td>{product.price}</td>
                    <td><button onClick={()=>handleDelete(product._id,product.name)} className="btn bg-red-800 btn-xs">DELETE</button></td>
                    <td><button className="btn btn-xs">UPDATE</button></td>                  
                  </tr>                
                )}                            
          </tbody>               
        </table>
        </div>



{/* for mobile device */}
        <div className='block md:hidden px-2'>
{ products?.map((product,index)=>
<div data-aos={index%2===0 ?"fade-right" : "fade-left" } key={index} class="card   my-5 rounded-md bg-zinc-200 shadow-lg shadow-amber-50">
  <div class="card-body ">
  
 <div className='flex justify-between mb-3 items-center'>
 <div>
   <p className='text-xl'> {product.name}</p>
    <p className='font-bold'>${product.price}</p>
   </div>
   <div class="avatar">
  <div class="w-20 rounded-xl">
  <img src={product.img} alt="product img" />
  </div>
</div>
 </div>
    <div className='flex justify-between'>
     <p className='text-amber-800'>#{index + 1}</p>
     <p className='font-bold'>Quantity : {product.aviQuantity}</p>
     <button onClick={()=>handleDelete(product._id,product.name)} className="btn bg-red-800 btn-xs">DELETE</button> 
     <button className="btn ml-3 btn-xs">UPDATE</button>
   </div>
  </div>
</div>
)}

      </div>
      </div>
    );
};

export default ManageProducts;