import React from 'react';
import Navbar from '../Navbar/Navbar';
import TShirt from '../T-shirt/TShirt';
import UploadFrom from '../uploadFrom/UploadFrom';

const Home = () => {
    return (
        <div>
            <h5>You can Text and inputs  be moveable with drag-drop and some arrow And you can upload a lot of images</h5>
            <UploadFrom></UploadFrom>
            <TShirt></TShirt>
        </div>
    );
};

export default Home;