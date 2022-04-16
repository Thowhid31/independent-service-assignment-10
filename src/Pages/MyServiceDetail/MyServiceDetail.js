import React from 'react';
import { useParams } from 'react-router-dom';

const MyServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h1>My service: {serviceId}</h1>
        </div>
    );
};

export default MyServiceDetail;