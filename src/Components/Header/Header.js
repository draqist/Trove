import React, {useState} from 'react'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import { CloseSharp } from '@mui/icons-material'

const Header = () => {
    const [nav, setNav] = useState(false)
    return (
        <div>
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
                </div>
            </div>
            <div className = 'btn-small1'>
                <button className="toggle-button" onClick = {()=> setNav(!nav)}>
                    <div className="toggle-button_line"></div>
                    <div className="toggle-button_line"></div>
                    <div className="toggle-button_line"></div>
                </button>
            </div>
        </div>
  {nav &&
      
      <div>
          <div className = 'm-nav'>
              <div style = {{position: 'absolute', top: '1rem', right: '1rem'}}>
              <CloseSharp onClick={ ()=> setNav(!nav) }/>
              </div>
          <Link to='/'> <h4> Home </h4></Link>
          <a href="https://troveapp.co/blog" target='blank' rel='noreferrer'> <h4> Blog</h4> </a>
          <Link to='#'> <h4> Fees </h4></Link>
          <Link to='/login' style={{ display: 'block', fontWeight: '500', }}> <h4> Login</h4> </Link>
          <Link to='/signup'> <h4> Sign up </h4> </Link>
      </div>
      </div>
  }
        </div>
    )
}

export default Header
