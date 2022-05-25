import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}

          <Outlet />
          <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 ">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to="/dashboard/myProfile">My Profile</NavLink>
            </li>
           { !admin&& <>
              <li>
                <NavLink to="/dashboard/myOrders">My Orders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addReview">Add Review</NavLink>
              </li>
            </>}

            {admin && (
              <>
                <li>
                  <NavLink to="/dashboard/allOrders">All Orders</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addProduct">Add Product</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/makeAdmin">Make Admin</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageProducts">
                    Manage Products
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
