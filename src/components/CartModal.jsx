'use client'
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { IoCartOutline } from 'react-icons/io5';
import axios from 'axios';
import { toast } from 'react-toastify';
import { MdDeleteSweep } from 'react-icons/md';

const CartModal = ({ isOpen, setIsOpen, cartItems, handleDelete }) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('')
    const [localCartItems, setLocalCartItems] = useState([]);

    useEffect(() => {
        if (Array.isArray(cartItems)) {
            setLocalCartItems(cartItems);
        } else {
            console.error('cartItems is not an array:', cartItems);
            setLocalCartItems([]);
        }
    }, [cartItems]);

    const totalPrice = localCartItems.reduce((total, item) => total + (item?.price || 0), 0);

    const handleOrder = async () => {
        if (!phoneNumber || !location) {
            setError('Please Fill in all fields')
        } else {
            setError('')
        }
        const orderData = {
            phoneNumber,
            location,
            items: cartItems,
            orderDate: new Date()
        }
        try {
            const res = await axios.post('http://localhost:3000/order/api/orders', orderData)
            console.log(res)
            if (res.data.success) {
                toast.success('Order Successful. We will contact you soon')
                setTimeout(() => {
                    setIsOpen(false);
                }, 1000);
            }
            else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error('Something went wrong', error)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gradient-to-br from-slate-600 to-gray-200 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    >
                        <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                        <div className="relative z-10">
                            <div>
                                <IoCartOutline className="text-4xl"></IoCartOutline>
                            </div>
                            <h2 className="text-xl mt-2">Total Order: {cartItems.length}</h2>
                            <div className="overflow-x-auto p-4">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Email</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems?.length > 0 ? (
                                            cartItems.map((item, index) => (
                                                <tr key={item._id}>
                                                    <th>{index + 1}</th>
                                                    <td>{item.userEmail}</td>
                                                    <td>{item.productName}</td>
                                                    <td>${item.price}</td>
                                                    <td><MdDeleteSweep
                                                        onClick={() => handleDelete(item._id)}
                                                        className="text-xl text-gray-600 cursor-pointer"></MdDeleteSweep></td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="text-center">No items in the cart.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                                <div className="divider"></div>
                                <h2 className="text-end w-full my-2">Total Price: {cartItems ? totalPrice : '0'}</h2>
                                <div className="w-full flex flex-col md:flex-row items-center justify-center my-4 gap-2">
                                    <input
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="text-gray-700 px-4 py-2 rounded-sm focus:border-slate-700 outline-none"
                                        type="number" placeholder="Phone Number" />
                                    <input
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="text-gray-700 px-4 py-2 rounded-sm focus:border-slate-700 outline-none"
                                        type="text" placeholder="Location" />
                                </div>
                                <div className="mb-4 text-red-500">{error}</div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                                >
                                    Nah, go back
                                </button>
                                <button
                                    onClick={handleOrder}
                                    className="bg-white hover:bg-gray-100 transition-all text-slate-600 font-semibold w-full py-2 rounded"
                                >
                                    Order
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CartModal;