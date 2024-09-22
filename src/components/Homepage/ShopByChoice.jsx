import Image from 'next/image';
import React from 'react';
import {Lobster} from "@next/font/google"

const lobster = Lobster({
    subsets: ['latin'],
    weight: ['400']
    })

const ShopByChoice = () => {
    return (
        <div className='mx-3 lg:mx-auto container my-12'>
            <div className='text-center w-full space-y-4 mb-8'>
                <h2 className='text-4xl md:text-5xl font-semibold'>Shop Your Best Item</h2>
                <p className={`${lobster.className} text-6xl text-slate-300`}>Collection</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-12'>
                {/* office collection */}
                <div className='px-4 flex items-center justify-center gap-4 bg-gray-50 h-[300px] rounded-md'>
                    <div>
                        <h2 className='font-medium text-3xl text-slate-800'>Office Room <br /> Collection</h2>
                    </div>
                    <div className='w-[300px]'>
                        <Image src="/assests/office.png" alt='office' width={300} height={200}></Image>
                    </div>
                </div>

                {/* kids collection */}
                <div className='px-4 flex items-center justify-center gap-4 bg-gray-50 h-[300px] rounded-md'>
                    <div>
                        <h2 className='font-medium text-3xl text-slate-800'>Kids Room <br /> Collection</h2>
                    </div>
                    <div className='w-[300px]'>
                        <Image src="/assests/kids.png" alt='office' width={300} height={200}></Image>
                    </div>
                </div>

                {/* Living Room Collection */}
                <div className='px-4 flex items-center justify-center gap-4 bg-gray-50 h-[300px] rounded-md'>
                    <div>
                        <h2 className='font-medium text-3xl text-slate-800'>Living Room <br /> Collection</h2>
                    </div>
                    <div className='w-[300px]'>
                        <Image src="/assests/living.png" alt='office' width={300} height={200}></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByChoice;