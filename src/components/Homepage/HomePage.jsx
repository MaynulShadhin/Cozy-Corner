import React from 'react';
import Banner from './Banner';
import About from './About';
import ShopByChoice from './ShopByChoice';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <ShopByChoice></ShopByChoice>
            <About></About>
        </div>
    );
};

export default HomePage;