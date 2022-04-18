import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const About = () => {
    const nameRef = useRef('');
    const phoneRef = useRef('');
    const emailRef = useRef('');
    const yourQuestionRef = useRef('');
    return (
        <div className='container'>
            <h2 className='text-center my-3'>About Us</h2>
            <div className="row g-5">
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <Form >
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

                        

                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Your question</Form.Label>
                            <Form.Control ref={yourQuestionRef} type="text" name='details' placeholder="Your question" />
                        </Form.Group>
                      
                        <Button
                            className='' variant="primary" type="submit">
                            Contact Us
                        </Button>
                    </Form>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <div className="">
                    <p className="m-0 fs-2 text-secondary">T-27, Said Nagar, Farabari, Dhaka</p>
                    <p className="m-0 fs-2 text-secondary">Email: insaf.law@insaf.com</p>
                    <p className="m-0 fs-2 text-secondary">Phone: +880 124585695</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default About;