'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { IoCartOutline } from "react-icons/io5";
import CartModal from '../CartModal';
import { toast } from 'react-toastify';
import { useCart } from '@/services/CartContext';
const Navbar = () => {
    const pathName = usePathname();
    const session = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const { cartItems, fetchCartItems, removeFromCart } = useCart();

    useEffect(() => {
        if (session?.data?.user?.email) {
            fetchCartItems(session.data.user.email);
        }
    }, [session]);

    useEffect(()=>{

    },[cartItems])

    const handleDelete = async (id) => {
        const success = await removeFromCart(id);
        if (success) {
            toast.success('Deleted successfully');
        } else {
            toast.error('Failed to delete item');
        }
    };

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
            path: '/contact'
        },
    ]
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
                                        className={`font-semibold text-black hover:bg-red-400 duration-100 mb-2 p-2 ${pathName === item.path && 'font-semibold bg-red-400 duration-100'}`}
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
                                    className={`text-white hover:line-through duration-100 ${pathName === item.path && 'text-white underline duration-100'}`}
                                    href={item.path} key={index}>
                                    {item.title}
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className="navbar-end mb-4">
                    {session?.status === "loading" &&
                        <span className="loading loading-spinner loading-lg"></span>}
                    {session?.status === "authenticated" &&
                        <div className="flex items-center gap-2 md:gap-6">
                            <div className="text-white">
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="btn">
                                    <IoCartOutline className="text-2xl"></IoCartOutline>
                                    <div className="badge bg-slate-400">{cartItems.length}</div>
                                </button>
                                <CartModal
                                    cartItems={cartItems}
                                    handleDelete={handleDelete}
                                    isOpen={isOpen} setIsOpen={setIsOpen}
                                ></CartModal>
                            </div>
                            <div className="dropdown dropdown-end z-10">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-12 rounded-full">
                                        <Image src={session?.data?.user?.image} alt={session?.data?.user?.name} width={48} height={48}></Image>
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li className="text-black border border-white px-4 py-2 cursor-pointer hover:bg-slate-800 hover:text-white duration-150 rounded-md">{session?.data?.user?.name}</li>
                                    <li><button
                                        className="text-black border border-white px-4 py-2 cursor-pointer hover:bg-red-500 hover:text-white duration-150 rounded-md"
                                        onClick={() => signOut()}>Logout</button></li>
                                </ul>
                            </div>

                        </div>}
                    {session?.status === "unauthenticated" &&
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