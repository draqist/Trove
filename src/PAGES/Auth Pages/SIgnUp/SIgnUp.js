import React from 'react'
import './SignUp.scss'
import lozad from 'lozad'

const SIgnUp = () => {
    const observer = lozad();
    observer.observe()
    return (
            <div className='sign-up lozad'>
                <main>
                    <div className='form_logo-desk'>
                        <div className = 'form_container'>
                            <div className = 'form'>
                                <div className='form_header-container'>
                                    <img src='https://troveapp.co/assets/images/logo.png' alt='' />
                                <p className='form-header-info'> START INVESTING WITH TROVE</p>
                                <p className = 'sign_up-title'>
                                    Sign up here
                                </p>
                            </div>
                            <div className='signup_form-container'>
                                <div className="">
                                    <p className="signup_form-input-label">Email</p>
                                    <div className="signin_input">
                                        <div class="form-input-1">
                                            <input data-test="input" type="email" className="input_field    " id="email" placeholder="Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-input-2">
                                    <p className="signup_form-input-label">
                                        Password
                                    </p>
                                    <div className="signin_input">
                                        <div className="form-input-1">
                                            <input data-test="input" type="password" className="input_field" id="password" placeholder="Password" />
                                        </div>
                                    </div>
                                    <small>**Password should contain atleast one uppercase, lowercase, digit, symbol and minimum of 8 characters**</small>
                                </div>
                                <p className="referral_link">Have a referral code? Click here.</p>
                                <div>
                                    <button className = 'btn_signup btn_main'>
                                        Sign Up
                                    </button>
                                    <p className="sign_up_in">
                                        <a href="/signin">
                                            <span className="sign_up_in font-weight-bold">Have an account?   Sign in here
                                            </span>
                                        </a>
                                    </p>
                                    <p className="sign_up_in">
                                        <span className="sign_up_in terms_text">
                                            By creating an account, you agree to have read and accepted our
                                            <a className="terms_link" href="https://troveapp.co/terms" target="_blank" rel="noopener noreferrer">terms
                                            </a> and
                                            <a className="terms_link" href="https://troveapp.co/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy
                                            </a>
                                        </span>
                                    </p>
                                    <p class="signin_rights">
                                        © Copyright 2019 - Trove Technologies Limited | All Rights Reserved
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

export default SIgnUp
