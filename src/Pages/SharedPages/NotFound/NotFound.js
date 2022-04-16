import React from 'react';
import NotFoundPhoto from '../../../images/HeadBanner/404-error-with-portals-pana.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className='error-image' src={NotFoundPhoto} alt="" />
        </div>
    );
};

export default NotFound;