import React from 'react';
import Review from './Review';
import Slider from './Slider';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Tools></Tools>
            <Review></Review>
        </div>
    );
};

export default Home;