import React from 'react';
import Image from 'next/image';

const getProducts = async() =>{
    const res = await fetch('http://localhost:3000/products/api/get-all')
    const products = res.json()
    return products
}

const page = async() => {

    const {products} = await getProducts()

    return (
        <div className='mx-auto container p-12'>
            <div className='text-center w-full mb-8'>
                <h2 className='text-5xl font-semibold text-slate-800'>Our Products</h2>
                <p className='text-xl text-slate-800 mt-4'>Discover our expertly crafted furniture designed to <br /> suit every style and space.</p>
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
    );
};

export default page;