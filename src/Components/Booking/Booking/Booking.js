// import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Booking = () => {
    const {serviceId} =useParams();
    // const [ booking,  setBooking ] = useState([]);
    
    // useEffect( () =>{
    //     fetch(`http://localhost:5000/service/${serviceId}`)
    //     .then(res => res.json())
    //     .them(data => setBooking(data))
    // <h2> Details of : {booking.id}</h2>
    // }, [])

    return (
        <div>
        
            <h2> You are booking {serviceId}</h2>
            <Link to='/'><Button>Go Back</Button></Link>
        </div>
    );
};

export default Booking;