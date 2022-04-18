import React from 'react';
import can1 from "../../../img/cancer-1.jpg";
import can2 from "../../../img/cancer-2.jpg";
import can3 from "../../../img/cancer-3.jpg";
import Service from '../Home/Service/Service';
const Services = () => {
    const services = [
        { id: 1, name: "Brain Cancer", price: 35000, img: can1, description: "I have extensive experience with brain cancer. By which I can heal you In sha Al-lah." },
        { id: 2, name: "Breast Cancer", price: 25000, img: can2, description: "I have been working on breast cancer for a long time. I hope I can help you with your recovery. In sha Al-lah." },
        { id: 3, name: "Screen Cancer", price: 20000, img: can3, description: "Here is the latest technology that will help you to fully understand and heal your disease. In sha Al-lah." }
    ];
    return (
        <div>
            <h1 className='text-success text-center fw-bold my-5'>SERVICES</h1>
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