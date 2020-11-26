import React from 'react';
import Draggable from 'react-draggable';


const Editphoto = ({ files }) => {
    return (
        <div>
            {files.map(files =>
                <>
                    <div>
                        <img style={{ width: '20%' }} src={files} alt={""} />
                        <Draggable>
                            <div>
                                <input placeholder="Add Text..."></input>
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