import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading'
const AllOrders = () => {
    const { data:orders, isLoading, refetch } = useQuery('orders', () =>fetch('http://localhost:5000/order').then(res =>res.json()))
if(isLoading){
    return <Loading></Loading>
}
const handleDelete=()=>{}
  console.log(orders)
    return (
        <div className="px-20 pt-10">
      <div className="overflow-x-auto">
        <h1 className="text-center mb-5 text-3xl font-bold  uppercase">
          All  order
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
                <td>{order.email}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.cost}</td>
                <td>
                  <button
                    onClick={() => handleDelete(order._id, order.product)}
                    className="btn btn-xs bg-red-700"
                  >
                    delete
                  </button>
                </td>
                <td>
                  <button  className="btn btn-xs bg-amber-700">
                    payment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllOrders;