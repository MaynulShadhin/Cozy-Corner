import React from 'react';
import Banner from './Banner';
import About from './About';
import ShopByChoice from './ShopByChoice';
import OurProducts from './Our Products/OurProducts';
import WhyChooseUs from './WhyChooseUs';
import Elegence from './Elegence';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <ShopByChoice></ShopByChoice>
            <About></About>
            <OurProducts></OurProducts>
            <WhyChooseUs></WhyChooseUs>
            <Elegence></Elegence>
        </div>
    );
};

export default HomePage;