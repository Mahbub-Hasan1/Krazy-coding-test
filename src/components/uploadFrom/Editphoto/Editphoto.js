import React, { useState } from 'react';
import Draggable from 'react-draggable';


const Editphoto = ({ files }) => {

    const [text, setText] = useState(null);
    const inputText = (e) => {
        const text = e.target.value;
        setText(text)
    }

    return (
        <div>
            {files.map(files =>
                <>
                    <div>
                        <img style={{ width: '20%' }} src={files} alt={"img"} />
                        <Draggable>
                            <h1>{text}</h1>
                        </Draggable>
                        
                        <Draggable>
                            <div>
                                <input onChange={inputText} placeholder="Add Text..."></input>
                            </div>
                        </Draggable>
                    </div>
                    <br />
                </>
            )}
        </div>
    );
};

export default Editphoto;