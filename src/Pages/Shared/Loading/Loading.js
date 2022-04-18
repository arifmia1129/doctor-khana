import React from 'react';

const Loading = () => {
    return (
        <div style={{ height: "400px" }} className='d-flex justify-content-center align-items-center'>
            <div className="spinner-border text-success" role="status">
                <span style={{ height: "400px" }} className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;