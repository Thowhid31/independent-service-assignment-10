import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div className='single-service'>
            <img src={img} alt="" />            
            <h3>{name} </h3>
            <p>Cost: {price}</p>
            <p><small>{description}</small></p>
            <button>BOOK NOW: {name}</button>
        </div>
    );
};

export default Service;