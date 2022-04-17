import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

import navImage from '../../../images/HeadBanner/travel-guid.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] =useAuthState(auth);
  const handleSinout = () => {
    signOut(auth)
  }
    return (
        <>
            

<Navbar sticky='top' collapseOnSelect expand="lg" bg="danger" variant="dark">
  <Container>
  <Navbar.Brand className='nav-img' as={Link} to="/"><img src={navImage} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link href="home#blog">Blog</Nav.Link>
      {/* <Nav.Link href="/checkout">Checkout</Nav.Link> */}
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      { user? <button className='btn btn-link text-white text-decoration-none' onClick={handleSinout}>Sign Out</button> :
        <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;