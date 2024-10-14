'use client';
import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/Homepage/Our Products/ProductCard';
import { getProducts } from '@/services/getProducts';

const Page = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Category');
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch products using useEffect
    useEffect(() => {
        const fetchProducts = async () => {
            const { products } = await getProducts();
            setProducts(products);
        };

        fetchProducts();
    }, []);

    // Filter products based on category and search term
    const filteredProducts = products.filter((product) => {
        const matchesCategory =
            selectedCategory === 'All Category' || product.categories === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Handle category change
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        console.log(e.target.value)
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className='mx-auto container p-12'>
            <div className='text-center w-full mb-12'>
                <h2 className='text-5xl font-semibold text-slate-800'>Our Products</h2>
                <p className='text-xl text-slate-800 mt-4'>
                    Discover our expertly crafted furniture designed to <br /> suit every style and space.
                </p>
            </div>
            {/* search input */}
            <form className="border bg-green rounded-md border-slate-300 items-center flex divide-x divide-slate-300 shadow-md mb-8 md:w-1/2">
                <select
                    onChange={handleCategoryChange}
                    className="rounded-l-md py-3 bg-green"
                >
                    <option value="All Category">All Category</option>
                    <option value="living room">Living Room</option>
                    <option value="dining">Dining</option>
                    <option value="bedroom">Bedroom</option>
                    <option value="kidsroom">Kids Room</option>
                    <option value="office">Office</option>
                </select>
                <input
                    className="py-3 px-2 appearance-none block w-full focus:outline-none focus:bg-slate-50 placeholder-gray-500 placeholder-opacity-25"
                    name="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search Products ....."
                    type="search"
                />
            </form>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-center col-span-2'>
                {/* Render filtered products */}
                {
                    filteredProducts?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default Page;
