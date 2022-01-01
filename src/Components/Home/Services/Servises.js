import React, { useEffect, useState } from 'react';
import Servic from '../Servic/Servic';
import './Services.css'


const Servises = () => {
    const [state, setState] = useState ([]);
    useEffect(() => {
        fetch('https://fast-caverns-89494.herokuapp.com/motorCollection')
        .then(res => res.json())
        .then(data => setState(data));
    }, [ ]);


return (
    <div className='mt-4' id="services">
    <h2 className='mt-4'>MotorCycle Services</h2>
    <div className='service-container'>
    {
        state?.map(service => <Servic
            key={service._id}
            service={service}
        ></Servic>)  
    }
    </div>
    </div>
    )
};

export default Servises;