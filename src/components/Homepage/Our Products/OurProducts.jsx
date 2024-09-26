import React from 'react';
import { products } from '../../../lib/product'
import Image from 'next/image';

const OurProducts = () => {
    return (
        <div className='my-20 mx-auto container px-2 lg:px-0'>
            <div className='text-center w-full mb-8'>
                <h2 className='text-5xl font-semibold text-slate-800'>Our Products</h2>
                <p className='text-xl text-slate-800 mt-4'>Discover our expertly crafted furniture designed to <br /> suit every style and space.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-center'>
                {/* card */}
                {
                    products.map((product, idx) => (
                        <div key={idx}>
                            <Image className='w-full h-[400px]' src={product.image} alt={product.name} width={400} height={400}></Image>
                            <div className='bg-slate-300 p-4 text-slate-800'>
                                <h2 className='font-medium'>{product.name}</h2>
                                <p>${product.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='text-center w-full mt-8'>
                <button className='border px-4 py-3 font-semibold shadow-md hover:shadow-2xl duration-200 hover:scale-105'>
                    See More
                </button>
            </div>
        </div>
    );
};

export default OurProducts;