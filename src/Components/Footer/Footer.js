import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <h4 className='contain'>Lalmonirhat Showroom</h4>
            <Card className="text-center">

            <Card.Body className='rong'>
                <Card.Title>Special abrarar SHowroom</Card.Title>
                <Card.Text>
                Mishonnor, Lalmonirhat ,Rongpur.
                </Card.Text>
                
                <Link to='/'><Button variant="primary">Go back</Button></Link>
            </Card.Body>
            <Card.Footer className="text-muted">Next Updates 2 days ago</Card.Footer>
            </Card>
        </>
    );
};

export default Footer;