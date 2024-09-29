'use client'
import Link from 'next/link';
import React from 'react';

const LoginButton = () => {
    return (
        <div>
            <Link href="/login" className="text-black border border-black px-4 py-2 cursor-pointer hover:bg-slate-800 hover:text-white duration-150 rounded-md">
            Login
            </Link>
        </div>
    );
};

export default LoginButton;