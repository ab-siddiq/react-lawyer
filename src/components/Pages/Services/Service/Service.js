import React from 'react';
import { useNavigate } from 'react-router-dom';


const Service = ({ service }) => {
    const { id, serviceName, serviceDescription } = service;
    const navigate = useNavigate('');
    const handleGetService = id => {
        console.log(id);
        navigate(`/getService/${id}`)
        
    }
    return (
        <div className='border rounded p-5 h-100'>
            <h3>{serviceName}</h3>
            <p>{serviceDescription}</p>
            <button onClick={() => { handleGetService(id) }} className='btn btn-primary'>Get Service</button>
        </div>
    );
};

export default Service;