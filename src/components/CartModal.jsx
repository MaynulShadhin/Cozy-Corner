'use client'
import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { IoCartOutline } from 'react-icons/io5';

const CartModal = ({ isOpen, setIsOpen, cartItem }) => {
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
                                        {cartItem?.length > 0 ? (
                                            cartItem.map((item, index) => (
                                                <tr key={item._id}>
                                                    <th>{index + 1}</th>
                                                    <td>{item.userEmail}</td>
                                                    <td>{item.productName}</td>
                                                    <td>${item.price}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="text-center">No items in the cart.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                                >
                                    Nah, go back
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
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