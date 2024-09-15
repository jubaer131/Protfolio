import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import 'animate.css';

const Navbar = () => {


    const navItems = [
        {
            title: "Home",
            path: "/",
        },

        {
            title: "Projects",
            path: "#projects",
        },
        {
            title: "Contact",
            path: "#Contact",
        },
        {
            title: "Skills",
            path: "#Skills",
        },
        {
            title: "About",
            path: "/about",
        },

    ]





    return (
        <div className='container mx-auto my-5 lg:my-7'>
            <div className="navbar bg-base-100">
                <div className="navbar-start lg:w-9/12">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow"
                        >
                            <div className='grid grid-cols-1 gap-1   menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow '>
                                {
                                    navItems.map(item => <Link className='font-semibold hover:text-[#3193ee] duration-300  text-white' href={item.path} key={item.path}>{item.title}</Link>)
                                }
                            </div>
                        </ul>
                    </div>

                    <div className='flex items-center justify-center gap-x-5 w-64'>
                        <Image className='rounded-3xl animate__animated animate__rotateIn' alt="logo" src="https://i.ibb.co.com/vcvSWjF/Animation-1726310406356.gif" height={45} width={45}></Image>

                        <h1 className=" text-white text-xl max-sm:text-2xl font-bold w-64">Jubaer ahmed</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <div className='flex  items-center space-x-6'>
                        {
                            navItems.map(item => <Link className='font-semibold hover:text-[#3193ee] duration-300 text-[18px]  text-white' href={item.path} key={item.path}>{item.title}</Link>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;