'use client'
import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const fetchCartItems = async (email) => {
        try {
            const res = await axios.get(`http://localhost:3000/cart/api/${email}`)
            setCartItems(res.data.product);
        } catch (error) {
            console.log(error);
        }
    };
    const addToCart = async (cartData) => {
        try {
            const res = await axios.post('http://localhost:3000/cart/api/newCart', cartData);
            if (res.data.success) {
                setCartItems(prevItems => [...prevItems, res.data.product]);
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error adding to cart:', error);
            return false;
        }
    };
    const removeFromCart = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/cart/api/deleteCart/${id}`);
            if (res.data.response.deletedCount > 0) {
                setCartItems(prevItems => prevItems.filter(item => item._id !== id));
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error removing from cart:', error);
            return false;
        }
    };
    return (
        <CartContext.Provider value={{ cartItems, fetchCartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => useContext(CartContext);

