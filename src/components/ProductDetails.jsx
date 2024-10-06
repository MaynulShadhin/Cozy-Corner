'use client'
import React from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import axios from 'axios';

const ProductDetails = ({ product }) => {
    const { name, image, price, _id } = product;
    const { data: session } = useSession()
    console.log(session)

    const handleAddToCart = async () => {

        if (!session) {
            toast.error("Please Login To add items to cart")
            return
        }
        const userName = session?.user?.name;
        const userEmail = session?.user?.email;
        const cartData = {
            productName: product.name,
            productId: product._id,
            userName,
            userEmail
        }
        try {
            const res = await axios.post('http://localhost:3000/cart/api/newCart', cartData);
            console.log(res)
            // if(res.data.success ==='true'){
            //     toast.success('Added to Cart')
            // }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
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
                    <button
                        onClick={handleAddToCart}
                        className="bg-slate-800 text-white font-semibold py-2 px-4 rounded hover:bg-slate-500 transition duration-200">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;