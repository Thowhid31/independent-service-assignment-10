import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './MyServiceDetail.css'
import confirmPhoto from '../../images/others/confirm.jpg'

const MyServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div className='container col-lg-12 col-md-6'>
            <div>
                <h1 className='mt-3' style={{ color: 'tomato' }}>My service: Id — {serviceId}</h1>
                <p>(Read Condition and all Criteria which provide my service which is vary with my service id. So read properly.)</p>
            </div>
            <div className='confirm-element-div'>
                <img className='confirm-photo' src={confirmPhoto} alt="" />
                <div className='section-confirm container mt-3'>
                    <p>Conditions: If you confirm your Book, then refund policy should be maintain. You can cancel your booking, but in refund your booking amount fall day by day in front of Tour Day. </p>
                    <p>To know About me: Click 'About' menu.</p>
                    <h4>Are you Confirm to book now? Then Click button bellow!</h4>
                </div>

            </div>
            <div>
                <Link to='/checkout'>
                    <button className='btn btn-primary check-btn'>Confirm Book</button>
                </Link>
            </div>
        </div>
    );
};

export default MyServiceDetail;