import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();

  const handleLoginButton = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  }

  const navigatorSignup = event => {
    navigate('/signup')
  }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='login-h1 mb-3 mt-4'>Login Here</h2>
            <Form onSubmit={handleLoginButton}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
<p>New to My site? <Link to='/signup' className='signup-toggle text-decoration-none' onClick={navigatorSignup}>Please Signup</Link></p>
        </div>
    );
};

export default Login;