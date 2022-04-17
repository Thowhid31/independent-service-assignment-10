import React from 'react';
import './About.css';
import myImage from '../../images/others/Md. Thowhiduzzaman.jpg'

const About = () => {
    return (
        <div>
            <div className='container'>
            <div>
                <h1 className='mt-3' style={{ color: 'tomato' }}>All About Me</h1>
            </div>
            <div className=' about-me-division'>
                {/* <img className='confirm-photo' src={confirmPhoto} alt="" /> */}
                <img className='confirm-photo' src={myImage}  alt="" />
                <div className='mt-3'>
                    <h3>MD. THOWHIDUZZAMAN</h3>
                    <p className='para-class-of-about'>My goal is very easy. I want to be a web developer with is wonderful journey. But it is not easy to gain. Web Development is a very complicated and long term concept. I knew at first, it is tough but not impossible. My JavaScript journey started with JM Bhai. He is a wonderful man I had ever know. His motives motivated me as well as. I try to maintain his advice throughout the Course. And I struggle even now to gain final goal.</p>
                </div>

            </div>
        </div>

        </div>
    );
};

export default About;