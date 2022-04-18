import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (
        <div style={{ width: "100%", height: "450px", position: "relative" }} className='border border-2 me-md-5 mb-3'>
            <img className='rounded-3 w-100' style={{ height: "200px" }} src={img} alt="" />
            <div className='text-center'>
                <div className='px-2'>
                    <h3 className='fw-bold my-1'>{name}</h3>
                    <p className='fw-bold'>{price}৳</p>
                    <p>{description}</p>
                </div>
                <Link to="checkout" >
                    <button style={{ position: "absolute", bottom: "0" }} className='btn btn-success fw-bold d-flex justify-content-center align-items-center w-100' >Continue</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;