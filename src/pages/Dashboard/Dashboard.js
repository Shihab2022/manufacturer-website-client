import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}

          <Outlet />
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 ">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to="/dashboard/myProfile">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myOrders">My Orders</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addReview">Add Review</NavLink>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
