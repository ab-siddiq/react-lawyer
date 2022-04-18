import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('');
    const location = useLocation();
    const [signInWithEmailAndPassword,   user,        loading,        error,] = useSignInWithEmailAndPassword(auth);
    
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true });
    }
    const handleLoginSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password); 
        
       
    }
    let errorElement;
    
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
    } 
        const handleLogin = () => {
          
        }
   
    if (user) {
        console.log('login success')
    }

    return (
        <div className='container w-50 mt-5 p-5 border'>
            <h3 className='text-center'>Please Login</h3>
            <Form onSubmit={handleLoginSubmit}>
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
                {errorElement}
                <Button onClick={handleLogin} className='' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div className="d-flex justify-content-center align-items-center w-50 mx-auto">
                <div  className="line"></div>
                <span className='mb-1 mx-2'>or</span>
                <div className="line"></div>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;