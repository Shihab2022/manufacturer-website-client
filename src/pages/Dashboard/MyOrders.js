import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/order/${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);
    return (
        <div className='px-20 pt-10'>
         <div class="overflow-x-auto">
         <h1 className='text-center mb-5 text-3xl font-bold  uppercase'><span className='text-amber-400'>{user?.displayName}</span> your order</h1>
  <table class="table w-full">
  
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
        orders.map((order , index)=>
          <tr>
          <th>{index+1}</th>
          <td>{order.name}</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>)
      }
     
    
      
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default MyOrders;