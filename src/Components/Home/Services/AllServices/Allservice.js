import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AllService = ({service}) => {
    const {_id, name , price, img,description} = service;
    return (
    <div >
        <div>
            <img className='imgs pb-3'  src={img} alt=""/>
            <h4>name : {name}</h4>
            <h4>description : {description}</h4>
            <h5>price {price}</h5>
            
            <Link to={`/booking/${_id}`}><Button>Booking now</Button></Link>
        </div>
    </div>
    );
};

export default AllService;