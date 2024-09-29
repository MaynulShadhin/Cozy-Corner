import { getProductDetails } from '@/services/getProducts';
import Image from 'next/image';
import React from 'react';

const page = async ({ params }) => {
    const details= await getProductDetails(params.id)
    const {name,image,price} = details.product
    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col lg:flex-row items-center justify-center">
                {/* Left Side: Product Image */}
                <div className="flex-1 mb-6 lg:mb-0">
                    <Image
                        src={image}
                        alt={name}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Side: Product Details */}
                <div className="flex-1 lg:ml-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
                    <p className="text-lg text-gray-600 mb-4">Price: ${price}</p>
                    <p className="text-gray-500 mb-6">
                        This is a description of the product. It provides information about features, quality, and usage.
                    </p>

                    {/* Add to Cart Button */}
                    <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default page;