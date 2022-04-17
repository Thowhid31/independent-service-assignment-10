import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';


const Signup = () => {
    const [termsAgree, setTermsAgree] = useState(false)

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
        

        if(termsAgree){
            createUserWithEmailAndPassword(email, password);
        }

        

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
                <input onClick={()=> setTermsAgree(!termsAgree)} className='mx-2' type="checkbox" name="terms" id="terms" />
                <label className={termsAgree ? 'text-dark' : 'text-danger'} htmlFor="terms">Accept all cost and conditions! </label>
                <input disabled={!termsAgree} className='btn btn-info mt-2 mb-2' type="submit" value='Signup'/>
            </form>
            <p>Already in My site? <Link to='/login' className='signup-toggle text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;