import React from 'react';
import Image from 'next/image';

const getProducts = async () => {
    const res = await fetch('http://localhost:3000/products/api/get-all')
    const products = res.json()
    return products
}

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
                        products?.map((product, idx) => (
                            <div
                                className='hover:scale-105 transition-all duration-200 cursor-pointer border border-gray-200'
                                key={idx}>
                                <Image className='w-full md:h-[250px] lg:h-[350px]' src={product.image} alt={product.name} width={400} height={350}></Image>
                                <div className='bg-slate-300 p-4 text-slate-800'>
                                    <h2 className='font-medium'>{product.name}</h2>
                                    <p>${product.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
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