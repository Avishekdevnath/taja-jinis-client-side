import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const menuContent = <>
        <li><NavLink to="/home">হোম</NavLink></li>
        <li><NavLink to="/category">ক্যাটাগরি</NavLink></li>
        <li><NavLink to="/about">আমাদের সম্পর্কে</NavLink></li>
        <li><NavLink to="/contract">যোগাযোগ</NavLink></li>
        <li><NavLink to="/login">নিবন্ধন করুন</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar fixed top-0 z-50 bg-green-700 text-white font-bold">
                <div className="navbar-start">
                    <Link to="/home" className="btn btn-ghost normal-case text-xl">তাজা জিনিস</Link>
                </div>


            <div className='navbar-end'> 
                <div className="navbar hidden lg:flex ">
                    <ul className="menu menu-horizontal p-0 ">
                        {menuContent}
                        {/* <li tabIndex="0">
                            <Link>
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link>Submenu 1</Link></li>
                                <li><Link>Submenu 2</Link></li>
                            </ul>
                        </li> */}

                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex="0" className=" bg-green-700 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuContent}
                        {/* <li tabIndex="0">
                                <Link className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2">
                                    <li><Link>Submenu 1</Link></li>
                                    <li><Link>Submenu 2</Link></li>
                                </ul>
                            </li> */}
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;