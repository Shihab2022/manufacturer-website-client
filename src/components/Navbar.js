import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/icon/logo.webp";
import auth from "../firebase.init";
import Loading from "./Loading";

const NewTest = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  const handleDashboard = () => {
    navigate("/dashboard/myProfile");
  };


  return (
    <nav className="bg-sky-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">

          { user && <div onClick={handleDashboard} className="md:hidden mr-10">
          <input  type="checkbox" class="peer hidden" />
           
           <label tabindex="0" for="my-drawer-2" class="btn btn-ghost btn-circle">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               class="h-8 w-8 mt-2"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 stroke-width="2"
                 d="M4 6h16M4 12h16M4 18h7"
               />
             </svg>
           </label>
          </div>}

            
            <div>
              <NavLink to="/" href="#" className="flex items-center py-4 px-2">
                <img data-default-width="450"
                 height="260"
                 width='100%'
                 data-default-height="100" src={logo} alt="Logo" className="h-8 w-28 mr-2" />
              </NavLink>
            </div>

            <div className="hidden uppercase md:flex items-center space-x-1">
              <NavLink to="/" className="py-4 px-2 text-white   font-semibold ">
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
              >
                Blog
              </NavLink>
              <NavLink
                to="/portfolio"
                className="py-4 px-2 text-white  font-semibold hover:text-green-500 transition duration-300"
              >
                Portfolio
              </NavLink>
              {user && (
                <NavLink
                  to="/dashboard/myProfile"
                  className="py-4 px-2 text-white  font-semibold hover:text-green-500 transition duration-300"
                >
                  Dashboard
                </NavLink>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 ">
            {user ? (
              <button
                onClick={() => {
                  signOut(auth);
                  localStorage.removeItem("accessToken");
                }}
                className="text-white text-2xl uppercase "
              >
                Log out
              </button>
            ) : (
              <NavLink
                to="/login"
                className="py-2 px-2  font-semibold text-white rounded hover:bg-green-500 hover:text-white uppercase  transition duration-300"
              >
                Log In
              </NavLink>
            )}
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden flex items-center">
            <div className="flex justify-end">
              <div class="dropdown  dropdown-end">
                <label tabindex="0"  class=" m-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
                <ul
                  tabindex="0"
                  class="dropdown-content menu p-2 mt-4 mr-0 
                  rounded-sm shadow bg-[#134068] text-xl font-semibold  w-60"
                >
                  <li className="active">
                    <NavLink
                      to="/"
                      className="block  px-2 py-4 text-white  font-semibold"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog"
                      className="block mt-3  px-2 py-4
                       hover:bg-green-500 transition duration-300"
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/portfolio"
                      className="block mt-3 px-2 py-4
                       hover:bg-green-500 transition duration-300"
                    >
                      Portfolio
                    </NavLink>
                  </li>
           
                  <li>
                    {user ? (
                      <button
                        onClick={() => {
                          signOut(auth);
                          localStorage.removeItem("accessToken");
                        }}
                        className=" mt-3 px-2 py-4 
                        hover:bg-green-500 transition duration-300"
                      >
                        Log out
                      </button>
                    ) : (
                      <NavLink
                        to="/login"
                        className="block   px-2 py-4 
                        hover:bg-green-500 transition duration-300"
                      >
                        Log In
                      </NavLink>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NewTest;
