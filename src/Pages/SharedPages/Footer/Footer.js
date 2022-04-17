// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
import fb from '../../../images/HeadBanner/Facebook_Logo.png'
import li from '../../../images/HeadBanner/linkedIn.png'
import tr from '../../../images/HeadBanner/twitter-thumbnail.png'
import yt from '../../../images/HeadBanner/y.png'


const Footer = () => {
    return (
        <footer className='mt-5 footer-class'>
            <div>
                <h5>Connect with Me</h5>
                {/* <p><FontAwesomeIcon icon="fa-brands fa-facebook" /></p> */}
                <div>
                    <p className='social-icon-class'>
                        <a href="https://www.facebook.com/thowhid.antor/"><img src={fb} alt="" /></a>
                        <a href="https://www.linkedin.com/in/thowhidantor/"><img src={li} alt="" /></a>
                        <a href="https://twitter.com/home"><img src={tr} alt="" /></a>
                        <a href="https://www.youtube.com/"><img src={yt} alt="" /></a>
                    </p>
                </div>
            <p><small><span dangerouslySetInnerHTML={{ "__html": "&copy;"} }/> 
                 Copyright: {new Date().getFullYear()}</small></p>
            </div>
        </footer>
    );
};

export default Footer;