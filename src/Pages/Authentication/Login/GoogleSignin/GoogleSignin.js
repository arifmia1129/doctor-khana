import React from 'react';

const GoogleSignin = () => {
    return (
        <div>
            <div className='d-flex justity-content-center align-items-center'>
                <div className='w-100 bg-success' style={{ height: "1px" }}></div>
                <div className='px-2 fw-bold'>OR</div>
                <div className='w-100 bg-success' style={{ height: "1px" }}></div>
            </div>

            <div>
                <button className='btn btn-outline-success d-flex justify-content-center align-items-center my-5 mx-auto w-100'>
                    <img style={{ borderRadius: "50%" }} className='bg-white p-1' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    <p className='pt-3 ps-3'>Sign in With Google</p>
                </button>
            </div>
        </div>
    );
};

export default GoogleSignin;