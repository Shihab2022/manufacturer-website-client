import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
// import { useForm } from "react-hook-form";

const ToolModal = ({tool}) => {
  const [user]=useAuthState(auth)
  const {aviQuantity,name,price,miniQuantity}=tool
const [quantity,setQuantity]=useState('')
const [userError,setUserError]=useState('')
const navigate=useNavigate()

useEffect(()=>{
  if(parseInt(quantity) < parseInt(miniQuantity)){
    setUserError(`Your order must be minimum ${miniQuantity}`)
  }
  else if(parseInt(quantity) >  parseInt(aviQuantity)){
    setUserError(`Your order must be maximum ${aviQuantity}`)
  }
  else{
    setUserError('')
  }
},[quantity])

const pay=`${parseInt(quantity) * parseInt(price)}`
const handelSubmit=e=>{
  const userOrder={
    name:e.target.name.value,
    email:e.target.email.value,
    address:e.target.address.value,
    phone:e.target.number.value,
    product:name,
    cost:pay,
    quantity:e.target.quantity.value
  }

  // fetch('https://frozen-badlands-14934.herokuapp.com/order', {
  fetch('http://localhost:5000/order', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userOrder),
  })
  .then(response => response.json())
  .then(data => {
    navigate('/payment')

    toast.success(`Please payment $ ${pay}`)
    // console.log('Success:', data);
  })


// console.log(userInfo)
e.preventDefault();
}
// console.log(`${parseFloat(quantity)*parseFloat(price)}`)
    return (
        <div>
<input type="checkbox" id="tool-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="tool-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <form onSubmit={handelSubmit}>
  <div class="hero  ">
    <div class="card flex-shrink-0 w-full max-w-sm ">
      <div class="card-body">
        <div class="form-control">
         
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input value={user?.email} name='email' disabled type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" name='name' value={user?.displayName} disabled placeholder="password" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Address</span>
          </label>
          <input type="text" name='address' required placeholder="Your Address" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Phone Number</span>
          </label>
          <input type="number" name='number' required placeholder="Your Phone Number" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Quantity</span>
          </label>
          <input type="number" name='quantity' required onBlur={e=>setQuantity(e.target.value)} placeholder="Product Quantity" class="input input-bordered" />
          {userError && <p className='text-sm text-red-500'>{userError}</p>}
        </div>
        <div class="form-control mt-6">
          <button disabled={parseInt(quantity) >  parseInt(aviQuantity) ||parseInt(quantity) < parseInt(miniQuantity)} class="btn btn-primary uppercase">Perches</button>
      
      </div>
    </div>
  </div>
</div>
  </form>

   




  </div>
</div>
        </div>
    );
};

export default ToolModal;