import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const services = [
        { id: 1, serviceName: 'Bank And Financial', serviceDescription: 'We provide efficient bank and financial service.', img: 'https://a6e8z9v6.stackpathcdn.com/lawyerbase/wp-co…1/photodune-448186-old-law-building-m-400x300.jpg' },
        { id: 2, serviceName: 'Car Accident', serviceDescription: 'We provide support for car accident', img: 'https://a6e8z9v6.stackpathcdn.com/lawyerbase/wp-co…12/photodune-824920-bodywork-damage-m-400x300.jpg' },
        { id: 3, serviceName: 'Personal Injury', serviceDescription: 'We help you to support if you are personally injured.', img: 'https://a6e8z9v6.stackpathcdn.com/lawyerbase/wp-co…lia_39975530_Subscription_Monthly_XXL-400x300.jpg' },
        { id: 4, serviceName: 'Family Law', serviceDescription: 'If you are suffering in your internal family matter. We are here to help you.', img: 'https://a6e8z9v6.stackpathcdn.com/lawyerbase/wp-co…itting-on-sofa-with-parents-arguing-m-400x300.jpg' },
        { id: 5, serviceName: 'Employment Law', serviceDescription: 'Are you ignored in you company" We are the right place to get your justice.', img: 'https://a6e8z9v6.stackpathcdn.com/lawyerbase/wp-co…cierges-holding-the-cart-and-posing-m-400x300.jpg' },
        { id: 6, serviceName: 'Corporate Law', serviceDescription: 'Are thinking about you corporate rules. Nothing to worry! Come to us.', img: 'https://a6e8z9v6.stackpathcdn.com/lawyerbase/wp-co…olia_3104144_Subscription_Monthly_XXL-400x300.jpg' },

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