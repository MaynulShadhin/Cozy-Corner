'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LoginButton from '../LoginButton';

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

    return (
        <div className='bg-white z-50 shadow-lg'>
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
                        <Image src="/assests/icon/logo.png" alt='logo' height={60} width={120}></Image>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex items-center gap-20'>
                        {
                            navItems.map((item, index) => (
                                <Link
                                className={`text-black hover:line-through duration-100`} 
                                    href={item.path} key={index}>
                                    {item.title}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <LoginButton></LoginButton>
                </div>
            </div>
        </div>
    );
};

export default Navbar;