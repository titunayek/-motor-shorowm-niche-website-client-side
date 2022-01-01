
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Booking = () => {
    const {serviceId} =useParams();
    
    return (
        <div>
        
            <h2> You are booking {serviceId}</h2>
            <Link to='/'><Button>Go Back</Button></Link>
        </div>
    );
};

export default Booking;