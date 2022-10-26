import React from 'react';
// import Loading from '../../components/Loading';
// import AskQuestion from './AskQuestion';
// import Review from './Review';
// import Slider from './Slider';
// import Tools from './Tools';
// import WebSection from './WebSection';

const Slider = React.lazy(() => import('./Slider'));
const Tools = React.lazy(() => import('./Tools'));
const WebSection = React.lazy(() => import('./WebSection'));
const Review = React.lazy(() => import('./Review'));
const AskQuestion = React.lazy(() => import('./AskQuestion'));
const Loading = React.lazy(() => import('../../components/Loading'));

const Home = () => {
    return (
        <div>
            <React.Suspense fallback={<Loading/>}>
            <Slider></Slider>
            <Tools></Tools>
            <WebSection></WebSection>
            <Review></Review>
            <AskQuestion/>
            </React.Suspense>
        </div>
    );
};

export default Home;