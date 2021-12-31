import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>this is notfound</h2>
            <Link to="/">
            <Button>Go Back</Button>
            </Link>
        </div>
    );
};

export default NotFound;