'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter()

    const handleLogin = async(e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const res = await signIn('credentials',{
            email,password,
            redirect: false
        });
        console.log(res)
        if(res.status === 200){
            router.push('/')
        }
    }

    return (
        <div className='flex items-center justify-center mx-auto container py-28'>
            <div className="flex w-full lg:w-1/2 justify-center items-center bg-white p-8">
                <div className="max-w-md w-full">
                    <Image className='text-center mx-auto' src="/assests/icon/logo.png" alt='logo' height={60} width={120}></Image>
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center">Welcome Back!</h2>
                    <p className="text-center text-gray-600 mt-2 mb-6">Please sign in to your account</p>

                    <form 
                    onSubmit={handleLogin}
                    className="space-y-6">
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
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">Don’t have an account?{" "}
                            <Link className="font-medium text-slate-800 hover:text-slate-500" href="/signup">
                                Sign up here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;