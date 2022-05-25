import React from "react";
import bgProducts from "../../assets/img/bgProducts.jpg";
const AddProduct = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{ backgroundImage: `url(${bgProducts})` }}
    >
      <div class="container flex justify-center items-center h-screen mx-auto ">
        <form
          action="#"
          class="w-1/2 shadow-lg shadow-yellow-600 rounded-md py-5 px-4"
        >
          <h1 class="text-3xl text-center uppercase font-bold my-3">
            add <span className="text-amber-600">new </span> product
          </h1>
          <div class="p-3">
            <input
              class="input input-bordered input-warning w-full "
              type="text"
              placeholder="Product Name"
              required
            />
          </div>

          <div class="p-3">
            <textarea
              class="textarea  input-warning w-full"
              placeholder="Write some description for this product ..."
            ></textarea>
          </div>
          <div class="p-3">
            <input
              class="input input-bordered input-warning w-[48%]  "
              type="number"
              placeholder="Minimum Quantity"
              required
            />

            <input
              class="input input-bordered input-warning w-[48%] ml-[4%] "
              type="number"
              placeholder="Available  Quantity"
              required
            />
          </div>
          <div class="p-3">
            <input
              class="input input-bordered input-warning w-[48%]  "
              type="file"
              required
            />

            <input
              class="input input-bordered input-warning w-[48%] ml-[4%] "
              type="number"
              placeholder="Product Price"
              required
            />
          </div>

          <div className="flex justify-center">
            <button class="w-1/2 bg-[#002341] uppercase text-white text-xl rounded-md  py-3">
              add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
