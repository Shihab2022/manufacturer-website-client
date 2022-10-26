import React from 'react';
import AskQuestion from './AskQuestion';
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
            {/* <Summary></Summary> */}
            <AskQuestion/>
        </div>
    );
};

export default Home;