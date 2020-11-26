import React, { useState } from 'react';
import Draggable from 'react-draggable';

const TShirt = () => {
    const [text, setText] = useState(null);
    const inputText = (e) => {
        const text = e.target.value;
        setText(text)
    }

    return (
        <div>
            <img style={{ width: '30%' }} src="https://pngimg.com/uploads/tshirt/tshirt_PNG5429.png" alt="T-Shirt" />
            <Draggable>
                <h5>{text}</h5>
            </Draggable>
            <div>
                <Draggable>
                    <input onChange={inputText} placeholder="Add Text..."></input>
                </Draggable>
            </div>

        </div>
    );
};

export default TShirt;