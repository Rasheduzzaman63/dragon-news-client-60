import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../Brand/Brand1.png';
import Brand2 from '../../../Brand/Brand2.png';

const FindCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={Brand1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={Brand2}alt="" />
            </Carousel.Item>
        </Carousel>
    );
};

export default FindCarousel;