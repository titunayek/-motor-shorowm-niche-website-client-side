import React, { useEffect, useState } from 'react';
import Allservice from './Allservice';




const AllServices = () => {
    const [state, setState] = useState ([]);
    useEffect(() => {
        fetch('https://fast-caverns-89494.herokuapp.com/AllmotorCollection')
        .then(res => res.json())
        .then(data => setState(data));
    }, [ ]);


return (
    <div id="services">
    <h2 className='mt-5'>All MotorCykel Services</h2>
    <div className='service-container'>
        {
            state?.map(service => <Allservice
                key={service._id}
                service={service}
            ></Allservice>)  
        }
        </div>
    </div>
    )
};

export default AllServices;