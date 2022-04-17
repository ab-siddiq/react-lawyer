import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const services = [
        { id: 1, serviceName: 'Income Tax', serviceDescription: 'we provide' },
        { id: 2, serviceName: 'Income Tax', serviceDescription: 'we provide' },
        { id: 3, serviceName: 'Income Tax', serviceDescription: 'we provide' },
        { id: 4, serviceName: 'Income Tax', serviceDescription: 'we provide' },
    ]
    return (
        <div>
            <h2>Our Services</h2>
            <Row>
                {services.map(service =>

                    <Col className="" lg={4}>
                        <Service key={service.id} service={service}></Service>
                    </Col>

                )}
            </Row>
        </div>
    );
};

export default Services;