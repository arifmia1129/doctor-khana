import React from 'react';
import can1 from "../../../img/cancer-1.jpg";
import can2 from "../../../img/cancer-2.jpg";
import can3 from "../../../img/cancer-3.jpg";
import Service from '../Home/Service/Service';
const Services = () => {
    const services = [
        { id: 1, name: "Brain Cancer", price: 15000, img: can1 },
        { id: 2, name: "Breast Cancer", price: 15000, img: can2 },
        { id: 1, name: "Screen Cancer", price: 15000, img: can3 }
    ];
    return (
        <div>
            <h1 className='text-success text-center'>Services</h1>
            <div className='container d-md-flex justify-content-around my-5'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;