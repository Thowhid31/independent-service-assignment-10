import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

import navImage from '../../../images/HeadBanner/travel-guid.png'

const Header = () => {
    return (
        <>
            <Navbar className='nav-class' bg="" variant="">
                <Container >
                    <Navbar.Brand className='nav-img' href="#home"><img src={navImage} alt="" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className='nav-link-color' href="#home">Home</Nav.Link>
                        <Nav.Link className='nav-link-color' href="#features">Features</Nav.Link>
                        <Nav.Link className='nav-link-color' href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;