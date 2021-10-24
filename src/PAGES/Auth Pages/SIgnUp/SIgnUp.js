import React from 'react'
import './SignUp.scss'
import lozad from 'lozad'

const SIgnUp = () => {
    const observer = lozad();
    observer.observe()
    return (
        <>
            <div className='sign-up lozad'>
                <main>
                    <div className='form_logo-desk'>
                        <img src='https://troveapp.co/assets/images/logo.png' alt='' />
                        <p> START INVESTING WITH TROVE</p>
                    </div>
                </main>
            </div>
        </>
    )
}

export default SIgnUp
