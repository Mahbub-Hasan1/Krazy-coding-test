import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div>
            <h1>This page not Found 404 error !!!!</h1>
            <Link to='/Home'><button>Home</button></Link>
        </div>
    );
};

export default NoMatch;