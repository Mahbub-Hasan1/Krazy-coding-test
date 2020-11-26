import React from 'react';
import Navbar from '../Navbar/Navbar';
import TShirt from '../T-shirt/TShirt';
import UploadFrom from '../uploadFrom/UploadFrom';

const Home = () => {
    return (
        <div>
            <UploadFrom></UploadFrom>
            <TShirt></TShirt>
        </div>
    );
};

export default Home;