import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading'
const AllOrders = () => {
    const { data:orders, isLoading, refetch } = useQuery('orders', () =>fetch('https://frozen-badlands-14934.herokuapp.com/order').then(res =>res.json()))
    // const { data:orders, isLoading, refetch } = useQuery('orders', () =>fetch('http://localhost:5000/order').then(res =>res.json()))

    const handleShift=(id)=>{
      const url =`'https://frozen-badlands-14934.herokuapp.com/order_shift/${id}`

      fetch(url,{
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  })
.then(res=>res.json())
.then(data=>{
    if(data?.acknowledged){
      refetch()
    }
})

    }
if(isLoading){
    return <Loading></Loading>
}
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
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {orders?.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{order?.name}</td>
                <td>{order?.product}</td>
                <td>{order?.quantity}</td>
                <td>{order?.cost}</td>
               
                <td>
            {order?.status==='pending'?<button onClick={()=>handleShift(order?._id)}  className="btn btn-xs bg-amber-700">
                    shift
                  </button> :<button className="btn btn-xs loading">Pending</button>}
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