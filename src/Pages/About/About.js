import React from 'react';
import pic from "../../img/ab.jpg";
const About = () => {
    return (
        <div className='container my-5 d-md-flex justify-content-center align-items-center'>
            <div className='text-center'>
                <img className='border border-3 rounded-3' width={200} height={250} src={pic} alt="" />
                <h3 className='border-bottom border-3 fw-bold'>Md. Arif Mia</h3>
            </div>

            <div className='ms-md-5 fw-bold border-start border-5 ps-2'>
                <p>My main goal is to become a fullstack web developer. But for now, my goal is to get a job as a junior web developer in a software company.</p>
                <br />
                <p>
                    I know I have to work hard to reach a goal. I'm trying to learn the basics of development. I'm trying to get myself into a place where I can master development related issues.
                </p>
                <h4 className='fw-bold'>"Maybe I don't know everything, but if I need to I can learn and work."</h4>
            </div>
        </div>
    );
};

export default About;