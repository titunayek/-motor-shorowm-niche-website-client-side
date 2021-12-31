import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Herder = () => {
    const {users ,logOut} = useAuth();

    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand href="#home">Motor Showroom</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
        <Nav.Link as={HashLink} to="home#services">Motor</Nav.Link>
        <Nav.Link as={Link} to="/allServices">AllMotors</Nav.Link>
        <Nav.Link as={HashLink} to="/motors">Motors Offers </Nav.Link>
        <Nav.Link as={HashLink} to="/footer">Showroom details
        </Nav.Link>
        <Nav.Link as={Link} to="/addOrderService">OrderSubmit</Nav.Link>
        
        {
            users?.email ? 
            <Button onClick={logOut}>LogOut</Button> :
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
        }
        <Navbar.Text>
            Signed in as: <a href="#login">{users?.displayName}</a>
        </Navbar.Text>
        </Navbar.Collapse>
        
        </Container>
        </Navbar>
        </>
    );
};

export default Herder;