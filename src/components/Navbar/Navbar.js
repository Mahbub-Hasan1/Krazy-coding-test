import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#FBD062' }} className="navbar navbar-expand-lg navbar-light">
            <Link to="/"><h1>Krazy-test</h1></Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/Home" className="nav-link mr-5 font-weight-bold" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/T-shirt"> <button type="button" className=" mr-5 font-weight-bold btn btn-secondary btn-lg">T-shirt</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;