import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const GetService = () => {
    const nameRef = useRef('');
    const phoneRef = useRef('');
    const emailRef = useRef('');
    const detailsRef = useRef('');
    const { serviceId } = useParams('');
    return (
        <div className='container mt-5'>
            <h2 className='text-center'>Thank you for choosing our service {serviceId}.</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" name='name' placeholder="Your Name" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control ref={phoneRef} type="text" name='phone' placeholder="Your Mobile Number" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Details</Form.Label>
                    <Form.Control ref={detailsRef} type="password" name='password' placeholder="Password" />
                </Form.Group>
                
                <Button
                    className='' variant="primary" type="submit">
                    Book service
                </Button>
            </Form>
        </div>
    );
};

export default GetService;