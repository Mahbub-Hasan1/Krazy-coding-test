import React, { useState } from 'react';
import Editphoto from './Editphoto/Editphoto';
import './UploadFrom.css'

const UploadFrom = () => {
    const [files, setFile] = useState([]);
    console.log(files)
    const fileHandler = event => {
        console.log(event.target.files[0]);
        let reader = new FileReader();
        reader.onload = function (e) {
            let img = (e.target.result);
            let allImg = [...files, img];
            setFile(allImg);
        };
        reader.readAsDataURL(event.target.files[0]);
    };


    return (
        <div>
            <input type="file" onChange={fileHandler} className="uploadInput" />

            <Editphoto files={files}></Editphoto>
        </div>
    );
};

export default UploadFrom;