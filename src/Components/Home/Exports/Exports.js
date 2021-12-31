import React from 'react';
import imgs1 from '../../../image/mala.jpg';
import imgs2 from '../../../image/13000.jpg';
import imgs3 from '../../../image/16000.jpg';


import Export from '../Export/Export';
import './Exports.css';

const experts = [
    {
        img: imgs1,

    },
    {
        img: imgs2,

    },
    {
        img: imgs3,

    },
    
]


const Exports = () => {
    return (
        <div className='img ' id="experts ">
            <h1>Motors Cycle offers</h1>

            <div className='service-container mb-5'>
                {
                    experts.map(expet => <Export
                        key={experts.name}
                        expet={expet}
                        ></Export>)
                }
            </div>
        </div>
    );
};

export default Exports;