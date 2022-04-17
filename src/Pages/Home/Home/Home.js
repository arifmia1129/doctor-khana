import React from 'react';
import img from "../../../img/doctor.jpg";
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>

            <div className='container d-md-flex justify-content-center align-items-center my-md-5 p-3'>
                <div className=''>
                    <h1 className='text-success fw-bold'>DOCTOR KHANA</h1>
                    <p>Assalamu Alaikum, I am AB Arif. I am a doctor by profession. I'm working on cancer. I work with different types of cancer. Such as: Brain Cancer, Breast Cancer, Screen Cancer etc. I want you, me and you all to be healthy in sha Allah. I would be personally happy if I could help you or someone you know. Contact me if you or someone you know has cancer or its symptoms.</p>
                </div>
                <div className='px-md-5'>
                    <img className='rounded-3 img-fluid' src={img} alt="" />
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;