import React from 'react';
import Review from './Review';
import Slider from './Slider';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Tools></Tools>
            <Summary></Summary>
            <Review></Review>
        </div>
    );
};

export default Home;