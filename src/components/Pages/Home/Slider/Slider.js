import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import lawyer1 from '../../../../images/lawyer1.jpg';
import lawyer2 from '../../../../images/lawyer2.jpg';
import lawyer3 from '../../../../images/lawyer3.jpg';


const Slider = () => {
     const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div className=''>
            <Carousel className='header' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={lawyer1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Quality Service.</h3>
                        <p>We always maintain quality service.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 overlay"
                        src={lawyer2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>We are faithful.</h3>
                        <p>We are faithful across all our clients.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='overlay'> 
                    <img
                        className="d-block w-100 overlay"
                        src={lawyer3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Are you suffering?</h3>
                        <p>
                            We are here to help you with full of confidence.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;