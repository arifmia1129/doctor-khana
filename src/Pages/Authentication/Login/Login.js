import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleSignin from './GoogleSignin/GoogleSignin';
import "./Login.css";
const Login = () => {
    return (
        <div className='mx-auto my-5 form p-2'>
            <h2 className='text-center text-success'>Please Login</h2>
            <div className='border p-3 rounded-3'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Agree with our terms and conditions." />
                    </Form.Group>
                    <Button className='w-50 mx-auto d-block' variant="success" type="submit">
                        Login
                    </Button>
                    <p className='text-center my-4'>You have not an account? <Link to="/register" className='text-primary sign-up fw-bold'>Register now!</Link></p>
                    <GoogleSignin></GoogleSignin>
                </Form>
            </div>
        </div>
    );
};

export default Login;