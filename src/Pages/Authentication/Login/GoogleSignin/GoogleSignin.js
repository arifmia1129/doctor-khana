import React from 'react';
import auth from "../../../../firebase.init";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from "../../../Shared/Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';

const GoogleSignin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        toast(error.message);
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='d-flex justity-content-center align-items-center'>
                <div className='w-100 bg-success' style={{ height: "1px" }}></div>
                <div className='px-2 fw-bold'>OR</div>
                <div className='w-100 bg-success' style={{ height: "1px" }}></div>
            </div>

            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-success d-flex justify-content-center align-items-center my-5 mx-auto w-100'>
                    <img style={{ borderRadius: "50%" }} className='bg-white p-1' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    <p className='pt-3 ps-3 fw-bold'>Sign in With Google</p>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default GoogleSignin;