import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    return (
        <div className='container'>
            <h1 className='booking-info-h1'>Give Me Your Booking Info</h1>
            <Form className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control className='mb-2' type="name" placeholder="Enter Your Name" />
                    <Form.Control className='mb-2' type="text" placeholder="Enter Your Address" />
                    <Form.Control className='mb-2' type="number" placeholder="Enter Your Mobile" />
                    <Form.Control className='mb-2' type="text" placeholder="Write Your Tour Spot" />
                    <Form.Control className='mb-2' type="text" placeholder="Enter Your Payment Transaction No." />

                    <Form.Text className="text-muted">
                        I'll never share your Information anyone else.
                    </Form.Text>
                </Form.Group>

                <Button className='w-100 booking-info-btn' as={Link} to='./thank' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;