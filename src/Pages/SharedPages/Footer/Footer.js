import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='mt-5 footer-class'>
            <p><small><span dangerouslySetInnerHTML={{ "__html": "&copy;"} }/> 
                 Copyright: {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;