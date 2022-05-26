import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L3UMIDXj41unhG3dxLzae0QBjbwLay6NBwKLsMeG3IidSUeIYf01NjLcl6VLn9vMSWkLVgEnjJkuNZoyuKq4uTo00dhWenOv3');

const Payment = () => {
    const {orderId}=useParams()
    // const url=`http://localhost:5000/paymentOrder/${orderId}`
    const url=`https://frozen-badlands-14934.herokuapp.com/paymentOrder/${orderId}`
    const {data:order,isLoading}=useQuery(['order',orderId],()=>fetch(url,{
        method:'GET',
        headers:{
            'content-type':'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    // console.log(order)
    return (
       
        <div class="hero-content h-screen flex-col lg:flex-row-reverse">
          <div class="text-center w-1/2 lg:ml-20 lg:text-left">
              <h2 className='text-3xl font-bold text-cyan-600 font-mono'>Your purchase product </h2>
            <h1 class="text-3xl  mt-5 font-bold">Your Product : <span className='text-amber-600'>{order?.product}</span></h1>
            <h1 class="text-2xl my-3 font-bold"> Product Quantity: <span className='text-amber-600'>{order?.quantity}</span></h1>
           
            <h1 class="text-2xl  font-bold"> Cost : <span className='text-amber-600'>{order?.cost}</span></h1>
           
          </div>
          <div class="card flex-shrink-0 w-1/2 max-w-md shadow-xl shadow-cyan-700 py-10 px-8  bg-base-100">
          <Elements stripe={stripePromise}>
    <CheckoutForm order={order} />
  </Elements>
            
          </div>
        </div>
    
    );
};

export default Payment;