import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p><small><span dangerouslySetInnerHTML={{ "__html": "&copy;"} }/> 
                 Copyright: {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;