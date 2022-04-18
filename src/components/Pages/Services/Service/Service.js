import React from 'react';
import { useNavigate } from 'react-router-dom';


const Service = ({ service }) => {
    const { id,img,price, serviceName, serviceDescription } = service;
    const navigate = useNavigate('');
    const handleGetService = id => {
        console.log(id);
        navigate(`/getService/${id}`)
        
    }
    return (
        <div className='border rounded p-2 h-100'>
            <img className='img-fluid rounded mb-2' src={img} alt="" />
            <h3>{serviceName}</h3>
            <p>&#2547;{price}</p>
            <p>{serviceDescription}</p>
            <button onClick={() => { handleGetService(id) }} className='btn btn-primary'>Get Service</button>
        </div>
    );
};

export default Service;