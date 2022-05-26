import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  // console.log(admin);
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}

          <Outlet />
          {/* <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label> */}
        </div>
        <div className="drawer-side ">
          <label for="my-drawer-2" className="drawer-overlay "></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-200 ">
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
                  <NavLink to="/dashboard/allOrders">Manage All Orders</NavLink>
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


      {/* colups */}
      {/* <div class="collapse">
  <input type="checkbox" class="peer" /> 
  <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
    Click me to show/hide content
  </div>
  <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
    <p>tabindex="0" attribute is necessary to make the div focusable</p>
  </div>
</div> */}
    </>
  );
};

export default Dashboard;
