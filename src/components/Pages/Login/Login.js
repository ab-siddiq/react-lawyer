import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('');
    const [signInWithEmailAndPassword,   user  ] = useSignInWithEmailAndPassword(auth);

  
    
    const handleLogin = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        navigate('/profile');
    }
    if (user) {
        console.log('login success')
    }
    return (
        <div className='container w-50 mt-5 p-5 border'>
            <h3 className='text-center'>Please Login</h3>
            <Form onSubmit={handleLogin}>
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
                <Form.Group className="" controlId="formBasicCheckbox">
                    <span>New to Law Academy? <Link to='/register'>Please register.</Link></span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Link to='/resetpassword'>Forgot password?</Link>
                </Form.Group>
                <Button className='' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;