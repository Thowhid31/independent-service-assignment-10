import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Signup = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleSignup = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);

    }

    if(user){
        navigate('/checkout')
    }
    return (
        <div className='signup-form'>
            <h2 className='signup-header mb-3 mt-4'>Please Signup</h2>
            <form onSubmit={handleSignup}>
                <input type="text" name="" id="" placeholder='Your Name'/>
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="submit" value='Signup'/>
            </form>
            <p>Already in My site? <Link to='/login' className='signup-toggle text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Signup;