import React from 'react';
import ProductCard from '@/components/Homepage/Our Products/ProductCard';
import { getProducts } from '@/services/getProducts';

const page = async () => {

    const { products } = await getProducts()

    return (
        <div className='mx-auto container p-12'>
            <div className='text-center w-full mb-12'>
                <h2 className='text-5xl font-semibold text-slate-800'>Our Products</h2>
                <p className='text-xl text-slate-800 mt-4'>Discover our expertly crafted furniture designed to <br /> suit every style and space.</p>
            </div>
            {/* search input */}
            <form class=" border bg-geen rounded-md border-slate-300 items-center flex divide-x divide-slate-300 shadow-md mb-8 md:w-1/2">
                <select class="rounded-l-md  py-3 bg-green">
                    <option selected="selected">All Category</option>
                    <option>Living Room</option>
                    <option>Dinning</option>
                    <option>Bedroom</option>
                    <option>Kids Room</option>
                </select>
                <input class="py-3 px-2 appearance-none block w-full  focus:outline-none focus:bg-slate-50 placeholder-gray-500 placeholder-opacity-25" name="search" placeholder="Search Products ....." type="search" />
                <button class="py-3 px-2 rounded-r-md bg-slate-500 hover:bg-slate-500 border border-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-8 text-gray-50 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </form>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-center col-span-2'>
                {/* card */}
                {
                    products?.map((product) => (
                        <ProductCard key={product.id} product={product}></ProductCard>
                    ))
                }
            </div>
        </div>
    );
};

export default page;