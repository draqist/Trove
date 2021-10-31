import React from 'react'
import Header from '../../Components/Header/Header'
import './Onboarding.scss'
import lozad from 'lozad'
import { Link } from 'react-router-dom'

const OnboardingPage = () => {
    const observer = lozad();
    observer.observe()
    return (
        <div className='onboarding-desk'>
            <div className = 'onboarding-header'>
                <Header/>
            </div>
            <main className='hero-section'>
                <div className='hero-content'>
                    <h1> Investing Simplified </h1>
                    <p>
                        <> Forget high account opnening fees. Become a global investor with the tap of a button. Invest in American, Chineese and Nigerian stocks, Bonds, ETFs and more with as little as <span></span> 1000 </>
                    </p>
                    <div className = 'btn-desk'>
                        <Link to = '/signup'>
                            <button className='get-st'>
                                Get started
                            </button>
                        </Link>
                    </div>

                </div>
                <div className='hero-image'>
                    <img className = 'hero_image lozad' loading = 'lazy' src = 'https://troveapp.co/assets/images/banner-image.png' alt = ''/>
                </div>

            </main>
        </div>
    )
}

export default OnboardingPage
