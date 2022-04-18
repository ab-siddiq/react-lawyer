import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, {replace:true});
    }
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger'>Error: {error.message}</p>
    }
    const handleGoogleSignIn = ()  => {
        signInWithGoogle();
    }
    return (
        <div className="social-login row justify-content-center">
            {errorMessage}
                <div className="col-12 text-center w-50">
                <p onClick={handleGoogleSignIn} className="btn btn-outline-primary">Google Sign In</p>
                </div>
            </div>
    );
};

export default SocialLogin;