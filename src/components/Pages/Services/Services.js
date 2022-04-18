import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Service from './Service/Service';
import service1 from '../../../images/serivice1.jpg';
import service2 from '../../../images/serivice2.jpg';
import service3 from '../../../images/serivice3.jpg';
import service4 from '../../../images/serivice4.jpg';
import service5 from '../../../images/serivice5.jpg';
import service6 from '../../../images/serivice6.jpg';

const Services = () => {
    const services = [
        { id: 1, serviceName: 'Bank And Financial',price: 3000, serviceDescription: 'We provide efficient bank and financial service.', img: service1 },
        { id: 2, serviceName: 'Car Accident',price:1200, serviceDescription: 'We provide support for car accident', img: service2 },
        { id: 3, serviceName: 'Personal Injury',price: 3000, serviceDescription: 'We help you to support if you are personally injured.', img: service3 },
        { id: 4, serviceName: 'Family Law',price:1400, serviceDescription: 'If you are suffering in your internal family matter. We are here to help you.', img: service4 },
        { id: 5, serviceName: 'Employment Law',price:500, serviceDescription: 'Are you ignored in you company" We are the right place to get your justice.', img: service5 },
        { id: 6, serviceName: 'Corporate Law',price:500, serviceDescription: 'Are thinking about you corporate rules. Nothing to worry! Come to us.', img: service6 },

    ]
    return (
        <div className='container'>
            <h2 className='text-center mt-5'>Our Services</h2>
            <Row className='g-3 mt-2'>
                {services.map(service =>

                    <Col className="" lg={4} md={4} sm={6}>
                        <Service key={service.id} service={service}></Service>
                    </Col>

                )}
            </Row>
        </div>
    );
};

export default Services;