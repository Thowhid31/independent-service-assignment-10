import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElementOwner;

  const handleLoginButton = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password)
  }

  const navigatorSignup = event => {
    navigate('/signup')
  }

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const resetPassword = async() => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
  }

  if(error){
    errorElementOwner = 
        <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
}

 

  return (
    <div className='container w-50 mx-auto'>
      <h2 className='login-h1 mb-3 mt-4'>Login Here</h2>
      <Form onSubmit={handleLoginButton}>
        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">

          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">

        </Form.Group>
        <Button className='w-100 mx-auto mb-3' variant="info" type="submit">
          Login
        </Button>
      </Form>
      {errorElementOwner}
      <p>New to My site? <Link to='/signup' className='signup-toggle text-decoration-none' onClick={navigatorSignup}>Please Signup</Link></p>
      <p>Forgot Password? <Link to='/signup' className='signup-toggle text-decoration-none' onClick={resetPassword}>Reset Now</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;