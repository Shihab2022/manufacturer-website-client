import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    // fetch("http://localhost:5000/users",{
    fetch("https://frozen-badlands-14934.herokuapp.com/users",{
        method:'GET',
        headers:{
            'content-type':'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

//   console.log(users)
  const makeAdmin = (id) => {
    // const url = `http://localhost:5000/user/admin/${id}`;
    const url = `https://frozen-badlands-14934.herokuapp.com/user/admin/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Make admin successfully . ");
          refetch();
        }
      });
  };
  return (
    <div className="px-20 pt-10">
      <div className="overflow-x-auto">
        <h1 className="text-center mb-5 text-3xl font-bold  uppercase">
          All user
        </h1>
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>delete</th>
              <th>payment</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {users?.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user?.name} </td>
                <td>{user?.email} </td>
                <td>
                  <button
                    disabled={user?.role === "admin"}
                    onClick={() => makeAdmin(user?._id)}
                    className="btn btn-xs bg-yellow-700"
                  >
                    admin
                  </button>
                </td>
                <td>
                  <button className="btn btn-xs bg-red-700">delete</button>
                </td>
                <td>
                  <button className="btn btn-xs bg-amber-700">payment</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
