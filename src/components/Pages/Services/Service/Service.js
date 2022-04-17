import React from 'react';


const Service = ({ service }) => {
    const { serviceName, serviceDescription } = service;
    return (
        <div>
          
            <h3>{serviceName}</h3>
            <p>{ serviceDescription}</p>
        k
            
        </div>
    );
};

export default Service;