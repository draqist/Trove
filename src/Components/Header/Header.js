import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className = 'header-nav'>
            <div className='logo_image'>
                <span> <img src='https://troveapp.co/assets/images/logo.png' alt='' /></span>
            </div>
            <div>
                <nav className = 'nav_options'>
                    <ul>
                        <Link to = '/' className = 'li'>Home</Link>
                        <Link to = '/blog' className = 'li'>Blog</Link>
                        <Link to = '/FAQ' className = 'li'>FAQ's</Link>
                        <Link to = '/Fees' className = 'li'>Fees</Link>
                    </ul>
                    <div className='btn-group'>
                        <Link to='/' className='secondary'>
                            <a href>
                                Login
                            </a> 
                        </Link>
                        <Link to='/signup' className='primary'>
                            <a href>
                                Sign up
                            </a>
                        </Link>
                    </div>
               </nav>
            </div>
                
        </div>
    )
}

export default Header
