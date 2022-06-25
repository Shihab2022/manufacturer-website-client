import React, { useState } from "react";
import { toast } from "react-toastify";
import bgProducts from "../../assets/img/bgProducts.jpg";
import Loading from "../../components/Loading";
const AddProduct = () => {
    const [loading,setLoading]=useState(null)
    const handleAddProduct=e=>{
       
        setLoading(true)
        e.preventDefault();
        //upload image in imagebb
        const imgStorageKey = "d92a7867dc5f803eaff37ac866069fb5";
        const image = e.target.photo.files[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`; 
        fetch(url, {
            method: "POST",
            body: formData, 
          })
            .then((res) => res.json())
            .then((result) => {
                // if img upload success then upload data in data base 
                if(result.success){
                    const image=result.data.url;
                    const product ={
                        name:e.target.name.value,
                        about:e.target.about.value,
                        miniQuantity:e.target.miniQuantity.value,
                        aviQuantity:e.target.aviQuantity.value,
                        img:image,
                        price:e.target.price.value,
                    }
                    
                    // fetch('http://localhost:5000/tools', {
                    fetch('https://frozen-badlands-14934.herokuapp.com/tools', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                           
                          },
                          body: JSON.stringify(product)
                    })
                    .then(response => response.json())
                    .then(data => {
                        if(data.acknowledged){
                            toast.success(`${product.name} is added ....`)
                            setLoading(false)
                            e.reset(); 
                        }
                    })
                }
                else{
                    setLoading(false)
                    toast.error('Please give your photo .')
                }
            })
    }
    if(loading){
        return <Loading></Loading>
    }
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bgProducts})` }}
    >
      <div className="container flex justify-center items-center lg:h-screen mx-auto ">
        <form
         data-aos="zoom-in"
          onSubmit={handleAddProduct}
          className="lg:w-1/2 mx-3 shadow-lg shadow-yellow-600 rounded-md py-5 px-4"
        >
          <h1 className="text-3xl text-center uppercase font-bold my-3">
            add <span className="text-amber-600">new </span> product
          </h1>
          <div className="p-3">
            <input
              className="input input-bordered input-warning w-full "
              type="text"
              name='name'
              placeholder="Product Name"
              required
            />
          </div>

          <div className="p-3">
            <textarea
              className="textarea  input-warning w-full"
              name='about'
              placeholder="Write some description for this product ..."
            ></textarea>
          </div>
          <div className="p-3">
            <input
              className="input input-bordered input-warning w-[48%]  "
              type="number"
              name='miniQuantity'
              placeholder="Minimum Quantity"
              required
            />

            <input
              className="input input-bordered input-warning w-[48%] ml-[4%] "
              type="number"
              name='aviQuantity'
              placeholder="Available  Quantity"
              required
            />
          </div>
          <div className="p-3">
            <input
              className="input input-bordered input-warning w-[48%]  "
              type="file"
              name='photo'
              required
            />

            <input
              className="input input-bordered input-warning w-[48%] ml-[4%] "
              type="number"
              name='price'
              placeholder="Product Price"
              required
            />
          </div>

          <div className="flex justify-center">
            <button className="w-1/2 bg-[#002341] uppercase text-white text-xl rounded-md  py-3">
              add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
