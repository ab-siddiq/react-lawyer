import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='container text-center mt-5'>
            <img style={{height:'80px', width: '80px', borderRadius:'50%',backgroundColor:'gray'}} src="" alt="" />
            <h2>{user.displayName}</h2>
            <p>{user.email}</p>
            <p>{user.phoneNumber}</p>
        </div>
    );
};

export default Profile;