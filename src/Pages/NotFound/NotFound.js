import React from 'react';
import notFoundImg from "../../img/404-error-page-not-found.jpg";
const NotFound = () => {
    return (
        <div className='container mt-1'>
            <img style={{ height: "100vh", width: "100%" }} src={notFoundImg} alt="" />
        </div>
    );
};

export default NotFound;