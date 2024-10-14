'use client'
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Lobster } from "@next/font/google"
import axios from 'axios';

const lobster = Lobster({
    subsets: ['latin'],
    weight: ['400']
})

const Peek = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [ref, inView] = useInView({ triggerOnce: true });
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);

    const getUsers = async () => {
        const res = await axios.get('http://localhost:3000/users/api/get-all-users')
        setUsers(res.data.users);
    }
    useEffect(() => {
        getUsers()
    }, [])

    const getProducts = async () => {
        const res = await axios.get('http://localhost:3000/products/api/get-all')
        setProducts(res.data.products);
    }
    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);
    return (
        <div style={{ backgroundImage: `linear-gradient(45deg,rgba(0,0,0,0.4), rgba(0,0,0,0.4)) ,url(/assests/peek.jpg)` }}
            className='my-20 bg-cover bg-center h-full md:h-[400px] flex items-center justify-center'>
            <div className="top-10 h-[400px]  md:flex  flex-col lg:flex-row items-center justify-center p-10">
                <div className="flex flex-col items-center lg:items-start text-white space-y-5">
                    <h1 className={`${lobster.className} text-xl lg:text-3xl uppercase text-center`}>made with love
                        and dedication</h1>
                    <h1 className="text-sm text-center lg:text-start lg:text-base w-4/5">Explore our diverse range of living spaces—thoughtfully designed products for every lifestyle, fostering a vibrant community with various members.</h1>
                    <button className='border-2 text-white p-3 hover:shadow-md hover:shadow-white cursor-pointer hover:-translate-y-1 duration-300 transition-all'>Explore</button>
                </div>
                <div className="flex my-5 justify-center text-white md:gap-10 gap-5  w-3/4 lg:w-full lg:my-10 mx-auto  font-bold  ">
                    <div className=" m-0 text-center">
                        <div className="text-xl md:text-2xl lg:text-7xl" ref={ref}> {isVisible && <CountUp end={20} duration={2.5} />}+</div>
                        <h2 className="text-xs font-light lg:font-bold lg:text-xl">Years of Reputation</h2>
                    </div>
                    <div className=" m-0 text-center">
                        <p className="text-xl md:text-2xl lg:text-7xl" ref={ref}>{isVisible && <CountUp end={users.length} duration={2.5} />}</p>
                        <h2 className="text-xs font-light lg:font-bold lg:text-xl">Total Number Of Customers</h2>
                    </div>
                    <div className="m-0 text-center">
                        <p className="text-xl md:text-2xl lg:text-7xl" ref={ref}>{isVisible && <CountUp end={3} duration={2.5} />}</p>
                        <h2 className="text-xs font-light lg:font-bold lg:text-xl">Total Shops</h2>
                    </div>
                    <div className="m-0 text-center">
                        <p className="text-xl md:text-2xl lg:text-7xl" ref={ref}>{isVisible && <CountUp end={products.length} duration={2.5} />}</p>
                        <h2 className="text-xs font-light lg:font-bold lg:text-xl">Total Available Products</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Peek;