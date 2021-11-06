import React, {useState} from 'react'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '@mui/material'

const Header = () => {
    const [nav, setNav] = useState(false)
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
                            <Button variant='outlined' style={{ border: '2px solid #5AD882', marginRight: '1rem' }}>
                                <NavLink style={{
                                    color: '#0D0D21', fontSize: '1em', fontFamily: 'Montserrat'
                                }}  to='/login' className='secondary'>
                                    Login
                                </NavLink>
                            </Button>
                            <Button style={{ backgroundColor: '#5AD882', color: 'white' }} variant='contained'>
                                <NavLink style={{
                                    color: 'white', fontSize: '1em', fontFamily: 'Montserrat'
                                }} to='/signup' >
                                    Sign up
                                </NavLink>
                            </Button>
                        </div>
                    </nav>
                        <div className = 'btn-small'>
                            <button className="toggle-button" onClick = {()=> setNav(!nav)}>
                                <div className="toggle-button__line"></div>
                                <div className="toggle-button__line"></div>
                                <div className="toggle-button__line"></div>
                            </button>
                        </div>
                    {nav &&
                        <div className = 'm_nav'>
                            <Link to = '/'> Home</Link>
                             <a href = "https://troveapp.co/blog" target='blank' rel='noreferrer'> Blog </a>
                        <Link to = '#'> Fees</Link>
                        <Link to = '/login' style = {{display: 'block', fontWeight: '500', }}> Login </Link>
                        <Link to = '/signup'> Sign up </Link>
                        </div>
                    }
                </div>
            </div>
                
        </div>
    )
}

export default Header
