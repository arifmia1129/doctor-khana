import React from 'react';
import { Form } from 'react-bootstrap';
import "./Checkout.css";
const Checkout = () => {
    return (
        <div className='px-2'>
            <Form className='mx-auto my-5 border border-5 p-2 rounded-3 checkout'>


                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control type="text" placeholder="Account Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Transaction ID</Form.Label>
                    <Form.Control type="text" placeholder="Transaction" />
                </Form.Group>
                <button className='btn btn-outline-success w-50 mx-auto d-block'>Checkout</button>
            </Form>
        </div>
    );
};

export default Checkout;