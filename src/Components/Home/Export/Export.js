import React from 'react';
import './Export.css'

const Export = ({expet}) => {
    const { img } = expet;
    return (
        <div>
            <img className='img'  src={img} alt="" />
            
        </div>
    );
};

export default Export;