import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

// import { useQuery } from 'react-query';
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const Swal = require("sweetalert2");
  useEffect(() => {
    // const url = `https://frozen-badlands-14934.herokuapp.com/order/${user?.email}`;
    const url = `http://localhost:5000/order/${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
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
        const url = `http://localhost:5000/order/${_id}`;
        // const url = `https://frozen-badlands-14934.herokuapp.com/order/${_id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              toast.success(`${name} is deleted successfully `);
              const remaining = orders.filter((order) => order._id !== _id);
              setOrders(remaining);
            } else {
              toast.error("Something wrong please try again .");
            }
          });
      }
    });
  };
console.log(orders)
console.log(orders?.transactionId)
  return (
    <div className="px-20 pt-10">
      <div className="overflow-x-auto">
        <h1 className="text-center mb-5 text-3xl font-bold  uppercase">
          <span className="text-amber-400">{user?.displayName}</span> your order
        </h1>
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>product</th>
              <th>quantity</th>
              <th>Cost</th>
              <th>delete</th>
              <th>payment</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {orders.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.cost}</td>
           
                <td>
             
                {  <button onClick={() => handleDelete(order._id, order.product)} disabled={order?.paid} className="btn btn-xs bg-red-700">
                    delete
                  </button>}
                </td>
                <td>
                  {!order?.paid ?<Link to={`/dashboard/payment/${order?._id}`}  className="btn btn-xs bg-amber-700">
                    payment
                  </Link> :<p className="text-sm ">{order?.transactionId}</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
