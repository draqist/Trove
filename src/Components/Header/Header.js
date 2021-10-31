import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className = 'header-nav'>
            <div className='logo_image'>
                <span>
                    <img src='https://troveapp.co/assets/images/logo.png' alt='' />
                </span>
            </div>
            <div>
                <div style = {{display: 'flex'}}>
                    <nav className = 'nav_options'>
                        <ul>
                            <Link to = '/' className = 'li'>Home</Link>
                            <a href = "https://troveapp.co/blog" target='blank' rel='noreferrer' className='li'>
                                Blog
                            </a>
                            <Link to = '/FAQ' className = 'li'>FAQ's</Link>
                            <Link to = '/Fees' className = 'li'>Fees</Link>
                        </ul>
                        <div className='btn-group'>
                            <Link to='/login' className='secondary'>
                                <button>
                                        Login 
                                </button>
                            </Link>
                            <Link to='/signup' className='primary-1'>
                                <button>
                                        Sign up
                                </button>
                            </Link>
                        </div>
                    </nav>
                     
                </div>
            </div>
                
        </div>
    )
}

export default Header
