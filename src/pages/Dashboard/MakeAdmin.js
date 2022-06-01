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
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
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
    <div className="md:px-20 pt-10">
      <div className="overflow-x-auto">
        <h1 className="text-center mb-5 text-3xl font-bold  uppercase">
          All User
        </h1>
     {/* for lg device */}
     <div className="hidden md:block">
     <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
            
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
               
              </tr>
            ))}
          </tbody>
        </table>
     </div>

     {/* for mobile device */}

     <div className='block md:hidden px-3'>
     {users?.map((user, index) => (


<div key={index} class="card   my-5 rounded-md bg-zinc-300 shadow-lg shadow-amber-50">
  <div class="card-body ">
   <div className='flex justify-between'>
     <p className='text-amber-800'>#{index + 1}</p>
     
     <button
                    disabled={user?.role === "admin"}
                    onClick={() => makeAdmin(user?._id)}
                    className="btn btn-xs bg-yellow-700"
                  >
                    admin
                  </button>
   </div>
    <p className='text-xl'>{user?.name} </p>
    <p className='font-bold'>{user?.email}</p>
  </div>
</div>

))}
</div>

      </div>
    </div>
  );
};

export default MakeAdmin;
