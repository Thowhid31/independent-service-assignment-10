import React from 'react';
import './SocialLogin.css'
import googleLogo from '../../../../images/HeadBanner/googlelogo.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../SharedPages/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElementOwner;
    if(error){
        errorElementOwner = 
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
    }
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
            <div style={{height: '1px'}} className='bg-secondary w-50'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{height: '1px'}} className='bg-secondary w-50'></div>
        </div>
        {errorElementOwner}
            <div>
                
                <button 
                onClick={()=> signInWithGoogle()}
                className='btn btn-danger google-button'>
                    <img className='goole-logo-back' style={{width: '35px'}} src={googleLogo} alt="" />
                    Sign In with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;