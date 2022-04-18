import React from 'react';

const Footer = () => {
    return (
        <div className='text-center bg-black text-white py-3 mt-5'>
            <p className='m-0'>all right reserve Insaf Law </p>
            <p className='m-0'>&copy; {new Date().getUTCFullYear()} </p>
            <p className='m-0'>Developed by Abu Bakkar Siddiq</p>
        </div>
    );
};

export default Footer;