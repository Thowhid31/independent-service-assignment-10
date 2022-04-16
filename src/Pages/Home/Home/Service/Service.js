import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate()

    const navigateToMyServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='single-service'>
            <img src={img} alt="" />            
            <h3>{name} </h3>
            <p>Cost: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=> navigateToMyServiceDetail(id)} className='btn btn-primary service-button'>BOOK NOW: {name}</button>
        </div>
    );
};

export default Service;