import React from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';
import Link from 'next/link';
import { getProducts } from '@/services/getProducts';

const OurProducts = async () => {
    const { products } = await getProducts()
    return (
        <div className='my-20 mx-auto container px-2 lg:px-0'>
            <div className='text-center w-full mb-8'>
                <h2 className='text-5xl font-semibold text-slate-800'>Our Products</h2>
                <p className='text-xl text-slate-800 mt-4'>Discover our expertly crafted furniture designed to <br /> suit every style and space.</p>
            </div>
            <div className='space-y-4 md:space-y-0 md:grid grid-cols-3 gap-12'>
                <div
                    className='col-span-1 h-full overflow-hidden relative'>
                    <div className='absolute m-12 z-10'>
                        <h2 className='text-white text-4xl'>BE A <br /> <span className='text-yellow-200 font-bold text-5xl'>TREND</span> <br /> YOURSELF <br />  IN WORLD FULL <br /> OF TREND</h2>
                    </div>
                    <Image
                        className='h-screen hover:scale-105 transition-all duration-500' src="/assests/product banner.jpg" alt='banner' width={500} height={400}></Image>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center justify-center col-span-2'>
                    {/* card */}
                    {
                        products?.slice(0, 6).map((product) => (
                            <ProductCard key={product.id} product={product}></ProductCard>
                        ))
                    }
                </div>
            </div>

            <div className='text-center w-full mt-8'>
                <Link href="/products">
                    <button className='border px-4 py-3 font-semibold shadow-md hover:shadow-2xl duration-200 hover:scale-105'>
                        See More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default OurProducts;