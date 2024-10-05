'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {

    const handleSignUp = async (e) => {
        e.preventDefault();
        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        const res = await fetch("http://localhost:3000/signup/api", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json"
            }
        })
        if (res.status === 200) {
            toast.success("Signed Up Successfully")
            e.target.reset()
        }
    }

    return (
        <div className='flex items-center justify-center mx-auto container py-16'>
            <div className="flex w-full lg:w-1/2 justify-center items-center bg-white p-8">
                <div className="max-w-md w-full">
                    <Image className='text-center mx-auto' src="/assests/icon/logo.png" alt='logo' height={60} width={120}></Image>
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center">Welcome To Our Website</h2>
                    <p className="text-center text-gray-600 mt-2 mb-6">Please sign Up</p>

                    <form
                        onSubmit={handleSignUp}
                        className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <ToastContainer />
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">Already have an account?{" "}
                            <Link className="font-medium text-slate-800 hover:text-slate-500" href="/login">
                                Sign In here
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;