import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
const AllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://frozen-badlands-14934.herokuapp.com/order").then((res) =>
      res.json()
    )
  );
  // const { data:orders, isLoading, refetch } = useQuery('orders', () =>fetch('http://localhost:5000/order').then(res =>res.json()))

  const handleShift = (id) => {
    const url = `'https://frozen-badlands-14934.herokuapp.com/order_shift/${id}`;

    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          refetch();
        }
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="md:px-20 md:p-0 p-3 lg:pt-10">
      <div className="overflow-x-auto">
        <h1 className="text-center mb-5 text-3xl font-bold  uppercase">
          All order
        </h1>
        <div className=" hidden md:block">
          <table className="table w-[100%]">
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
                <tr
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  key={index}
                >
                  <th>{index + 1}</th>
                  <td>{order?.name}</td>
                  <td>{order?.product}</td>
                  <td>{order?.quantity}</td>
                  <td>{order?.cost}</td>

                  <td>
                    {order?.status === "pending" ? (
                      <button
                        onClick={() => handleShift(order?._id)}
                        className="btn btn-xs bg-amber-700"
                      >
                        shift
                      </button>
                    ) : (
                      <button className="btn btn-xs loading">Pending</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          {/* for mobile device */}

          <div className="block md:hidden">
            {orders?.map((order, index) => (
              <div
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                key={index}
                className="card   my-5 rounded-md bg-zinc-100 shadow-lg shadow-amber-50"
              >
                <div className="card-body ">
                  <div className="flex justify-between">
                    <p className="text-amber-800">#{index + 1}</p>
                    <p className="font-bold">Quantity : {order?.quantity}</p>
                    {order?.status === "pending" ? (
                      <button
                        onClick={() => handleShift(order?._id)}
                        className="btn btn-xs bg-amber-700"
                      >
                        shift
                      </button>
                    ) : (
                      <button className="btn btn-xs loading">Pending</button>
                    )}
                  </div>
                  <p className="text-xl">{order?.product}</p>
                  <p className="font-bold">${order?.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
