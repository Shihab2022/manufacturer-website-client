import React from 'react';
import erorPage from '../assets/img/erorPage.webp'
const NotFound = () => {
    return (
        <div>
            <img data-default-width="450"
                 height="260"
                 width='100%'
                 data-default-height="100" src={erorPage} className='bg-white w-full  py-10' alt="" />
        </div>
    );
};

export default NotFound;