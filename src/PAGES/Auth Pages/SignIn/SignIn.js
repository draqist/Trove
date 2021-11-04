import React, {useState} from 'react'
import './SignIn.scss'
import { Link, useHistory } from "react-router-dom";
import { handleGoogleSignIn, handleSignIn } from '../../../Helpers/Functions';
import AOS from 'aos'
import 'aos/dist/aos.css'


const SignIn = () => {
    const [loginemail, setLoginEmail] = useState('')
    const [loginpassword, setLoginPassword] = useState('')
    const [error, setError] = useState('')
    const history = useHistory()
    AOS.init()

    const redirect = () => {
        history.replace('/dashboard')
        console.log('hello')
    }

    
    return (
            <div className='sign-in' >
            <main>
                    <div className='form_logo-desk'>
                        <div className = 'form_container'>
                            <div className = 'form'>
                                <div className='form_header-container'>
                                    <img src='https://troveapp.co/assets/images/logo.png' alt='' />
                                <p className='form-header-info'> START INVESTING WITH TROVE</p>
                                <p className = 'sign_in-title'>
                                    Sign in here
                                </p>
                            </div>
                                <div className='signin_form-container'>
                                    <div className="">
                                        {error && (
                                            <div className = 'error' > {error} </div>
                                        )}
                                    <p className="signin_form-input-label">Email</p>
                                    <div className="signin_input">
                                        <div className="form-input-1">
                                            <input
                                                data-test="input"
                                                type="email"
                                                className="input_field"
                                                id="email"
                                                placeholder="Email"
                                                value={loginemail}
                                                onChange={(e) => setLoginEmail(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-input-2">
                                    <p className="signin_form-input-label">
                                        Password
                                    </p>
                                    <div className="signin_input">
                                        <div className="form-input-1">
                                            <input
                                                data-test="input"
                                                type="password"
                                                className="input_field"
                                                id="password"
                                                placeholder="Password"
                                                value={loginpassword}
                                                onChange={(p) => setLoginPassword(p.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type='submit'
                                        className='btn_signin btn_main'
                                        onClick={() =>{ handleSignIn(loginemail, loginpassword, redirect)}}>
                                        Log In
                                    </button>
                                    <button
                                        type='submit'
                                        className='btn_signin btn_secondary'
                                        onClick={() => handleGoogleSignIn(setError, redirect)}>
                                        <div className = 'google'/>
                                        Sign In with Google
                                    </button>
                                    <p className="sign_in_in">
                                        <Link to="/signup">
                                            <span className="sign_in_in font-weight-bold"><span>Don't have an account?</span>  Sign up here
                                            </span>
                                        </Link>
                                    </p>
                                    <p className="signin_rights">
                                        © Copyright 2019 - <span> Trove Technologies Limited</span> | All Rights Reserved
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div style = {{display: 'flex', width: '100%'}}>

                        </div>
                    </div>
                </main>
            </div>
    )
}
export default SignIn
