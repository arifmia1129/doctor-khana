import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import GoogleSignin from '../Login/GoogleSignin/GoogleSignin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [terms, setTerms] = useState(false);
    const navigate = useNavigate();
    const handleToSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(email, password);


    }
    if (error) {
        toast(error.message);
    }
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return navigate("/");
    }

    return (
        <div>
            <div className='mx-auto my-5 form p-2'>
                <h2 className='text-center text-success'>Please Register</h2>
                <div className='border p-3 rounded-3'>
                    <Form onSubmit={handleToSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={() => setTerms(!terms)} type="checkbox" label="Agree with our terms and conditions." />
                        </Form.Group>
                        <Button disabled={!terms} className='w-50 mx-auto d-block' variant="success" type="submit">
                            Login
                        </Button>
                        <p className='text-center my-4'>You have already an account? <Link to="/login" className='text-primary sign-up fw-bold'>Login now!</Link></p>
                        <GoogleSignin></GoogleSignin>

                    </Form>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;