import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import HeadBanner1 from '../../../../images/HeadBanner/female-guid.jpg'
import HeadBanner2 from '../../../../images/HeadBanner/go-for-adventure.jpg'
import HeadBanner3 from '../../../../images/HeadBanner/the-journey-is-on.jpg'


const HeadBanner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeadBanner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Tour?</h3>
          <p>Let's do with me. I guides you everywhere.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeadBanner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Do you Like Adventure?</h3>
          <p>Start your day with booking me as an exclusive guide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeadBanner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Journey is Always On.</h3>
          <p>
            I am always with you throughout your journey.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default HeadBanner;