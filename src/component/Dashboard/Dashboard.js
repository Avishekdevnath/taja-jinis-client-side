import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/home');
    }


    return (
        <div class="drawer drawer-mobile mt-20">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <Outlet></Outlet>
                {/* <label for="my-drawer" class="btn btn-primary drawer-button"> Open </label> */}
            </div>

            <div class="drawer-side ">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu  p-4 overflow-y-auto w-44 lg:w-80 bg-green-100 text-base-content">
                    <li> <NavLink to="/dashboard/myProfile">My Profile</NavLink> </li>
                    <li> <NavLink to="/dashboard/myOrder">My Order</NavLink> </li>
                    <li> <NavLink to="/dashboard/payment">Payment</NavLink> </li>
                    <li> <NavLink to="/dashboard/Review">Review</NavLink> </li>
                    <hr />
                    <li><button onClick={backToHome} class="btn btn-success mt-20 text-white">Back To Home</button></li>

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;