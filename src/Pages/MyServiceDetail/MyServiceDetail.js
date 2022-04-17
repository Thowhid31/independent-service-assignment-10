import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './MyServiceDetail.css'

const MyServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div className='container'>
            <h1>My service: {serviceId}</h1>
            <div>


            <Link to='/checkout'>
                <button className='btn btn-primary check-btn'>Confirm Book</button>
            </Link>
            </div>
        </div>
    );
};

export default MyServiceDetail;