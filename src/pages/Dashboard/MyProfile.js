import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [users, setUsers] = useState({});
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user]);
//   console.log(users[0]?.email);
//   console.log(user);

  return (
    <div>
      <div class="hero py-5  lg:py-20">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center block w-[600px] lg:text-left">
        
            <div className="lg:pl-10 flex justify-center w-full items-center flex-col">
            <h2 className="text-2xl lg:text-4xl font-bold mb-8 lg:mb-16 uppercase text-cyan-600">Your Profile </h2>
              {users[0]?.img ? (
                <img src={users[0]?.img} alt="" />
              ) : (
                <p className="text-6xl font-bold text-white bg-amber-300 shadow-2xl w-[100px] h-[100px] rounded-full flex items-center justify-center">
                  {user?.displayName?.slice(0, 1)}
                </p>
              )}
              <p className="text-3xl font-bold mt-5 text-cyan-600">
                {user?.displayName}
              </p>
              <p class="py-4 text-xl">{users[0]?.email}</p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm ">
            <div class="card-body">
            <h2 className=" text-2xl lg:text-4xl font-bold mb-16 text-center text-cyan-600 uppercase">update your Profile </h2>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                />
              
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
