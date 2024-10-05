'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {

    const navItems = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Products',
            path: '/products'
        },
        {
            title: 'Contacts',
            path: '/contacts'
        },
    ]

    const session = useSession()
    console.log(session)

    return (
        <div className='bg-slate-800 shadow-sm shadow-black w-full'>
            <div className="navbar bg-transparent md:py-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn text-black btn-ghost lg:hidden">
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
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-30">
                            {
                                navItems.map((item, index) => (
                                    <Link
                                        className='font-semibold text-black hover:text-red-400 duration-100'
                                        href={item.path} key={index}>
                                        {item.title}
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                    <Link href='/'>
                        <Image src="/assests/icon/favicon.png" alt='logo' height={60} width={120}></Image>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex items-center gap-20'>
                        {
                            navItems.map((item, index) => (
                                <Link
                                    className={`text-white hover:line-through duration-100`}
                                    href={item.path} key={index}>
                                    {item.title}
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className="navbar-end">
                    {
                        session.data ?
                            <div>
                                <div className="dropdown dropdown-end z-10">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <Image src="/" alt='profile photo' width={40} height={40}></Image>
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <li><a>Settings</a></li>
                                        <li><button
                                            className="text-black border border-white px-4 py-2 cursor-pointer hover:bg-slate-800 hover:text-white duration-150 rounded-md"
                                            onClick={() => signOut()}>Logout</button></li>
                                    </ul>
                                </div>

                            </div>
                            :
                            <Link href="/login" className="text-white border border-white px-4 py-2 cursor-pointer hover:bg-slate-800 hover:text-white duration-150 rounded-md">
                                Login
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;