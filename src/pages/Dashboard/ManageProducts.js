import React, { useEffect, useState } from 'react';
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
        <div className="overflow-x-auto lg:my-14  w-full">
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
                    <tr key={index}>
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
    );
};

export default ManageProducts;