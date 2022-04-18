import React from 'react';
import Services from '../Services/Services';
import Slider from './Slider/Slider';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;