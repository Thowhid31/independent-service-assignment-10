import React from 'react';
import thankYou from '../../../images/others/Thank_you_card_with_rose_flower_watercolor.jpg'
import './ThankYou.css'

const ThankYou = () => {
    return (
        <div>
            <h1 className='thank-h1'>CONGRATULATION!<br/> I accept Your Booking.</h1>
            <img className='thank-photo' src={thankYou} alt="" />
        </div>
    );
};

export default ThankYou;