import React from 'react';
import { Lobster } from "@next/font/google"
import Image from 'next/image';

const lobster = Lobster({
    subsets: ['latin'],
    weight: ['400']
})

const Elegence = () => {
    return (
        <div className='mx-auto flex flex-col md:flex-row items-center justify-evenly container my-12 gap-4 px-2 lg:px-0'>
            <div className='space-y-4'>
                <h2 className={`${lobster.className} text-6xl text-gray-300`}>
                    Colors
                </h2>
                <h3 className='text-6xl uppercase font-medium'>
                    shades of <br /> elegance
                </h3>
                <p>embodies shades of elegance, where every hue harmonizes to <br /> create a tranquil retreat, inviting you to unwind in style.</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-4'>
                <Image src="/assests/ele2.jpg" alt='ele2' width={400} height={200}></Image>
                <div className='flex items-center justify-center'>
                    <Image
                        className='h-[400px]'
                        src="/assests/ele1.jpg" alt='ele1' width={400} height={200}></Image>
                </div>
            </div>
        </div>
    );
};

export default Elegence;