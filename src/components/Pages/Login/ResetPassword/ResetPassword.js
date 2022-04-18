import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';

const ResetPassword = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    
    const handleResetPassword = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email)
    }

    return (
        <div className='container w-50 mt-5 p-5 border'>
            <h3 className='text-center'>Please Login</h3>
            <Form onSubmit={handleResetPassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="" controlId="formBasicCheckbox">
                    <span>Want to login? <Link to='/login'>Login.</Link></span>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Link to='/login'>Forgot password?</Link>
                </Form.Group> */}
                <Button className='' variant="primary" type="submit">
                    Reset Password
                </Button>
            </Form>
        </div>
    );
};

export default ResetPassword;