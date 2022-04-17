import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, price, img } = service;
    return (
        <div className='border border-2'>
            <img className='rounded-3' width={200} height={200} src={img} alt="" />
            <div className='text-center'>
                <h3>{name}</h3>
                <p>{price}৳</p>
                <Link to="checkout" >
                    <button className='btn btn-success w-100 fw-bold' >Continue</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;