import React from 'react';
import Review from './Review';
import Slider from './Slider';
import Summary from './Summary';
import Tools from './Tools';
import WebSection from './WebSection';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Tools></Tools>
            <WebSection></WebSection>
            <Review></Review>
            <Summary></Summary>
        </div>
    );
};

export default Home;