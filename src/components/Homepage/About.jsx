import React from 'react';
import { Lobster } from "@next/font/google"

const lobster = Lobster({
    subsets: ['latin'],
    weight: ['400']
})

const About = () => {
    return (
        <div 
        style={{ backgroundImage: `linear-gradient(45deg,rgba(0,0,0,0.2), rgba(0,0,0,0.2)) ,url(/assests/aboutUs.jpg)` }}
        className='my-12 bg-cover bg-center h-[500px] md:h-[600px] flex items-center justify-center'>
            <div className='text-center w-full'>
                <h2 className={`${lobster.className} text-5xl md:text-7xl text-white`}>About Us</h2>
                <p className='text-white mt-4 md:text-xl'> we offer high-quality, stylish furniture to elevate your living spaces. <br /> From modern designs to timeless classics, our curated collection suits every taste and lifestyle. <br /> We focus on craftsmanship, comfort, and a seamless shopping experience. Browse our selection <br /> and transform your home with ease!</p>
            </div>
        </div>
    );
};

export default About;