import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <Link href={`/products/${product._id}`}>
            <div
                className='cursor-pointer border border-gray-200 overflow-hidden'
            >
                <Image className='w-full md:h-[250px] hover:scale-105 transition-all duration-300 lg:h-[350px]' src={product.image} alt={product.name} width={400} height={350}></Image>
                <div className='bg-slate-300 p-4 text-slate-800'>
                    <h2 className='font-medium'>{product.name}</h2>
                    <p>${product.price}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;