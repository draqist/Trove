import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import {signOut} from 'firebase/auth'
import './Sidebar.scss'

const Sidebar = () => {
    const handleSignOut = async () => {
        await signOut(auth, )
    }
    return (
        <div className = 'sidebar_container-main'>
            <section className='dashboardlogo_notifications'>
                <img src='https://i.ibb.co/6Ftk5F6/dashboardlogo.png' alt='' className = 'logo' />
                <div className = 'not'/>
            </section>
            <section className='user_info-avatar'>
                <div className='user_avatar' />
                <div className='user_details'>
                    <h3> User Name </h3>
                </div>
            </section>
            <section className='side_bar-navigations'>
                <ul>
                    <div className='side_nav'>
                        <div  className = 'not1'/>
                        <li>Dashboard</li>
                    </div>
                    <div className='side_nav'>
                        <div className = 'not2'/>
                        <li> Wallet</li>
                    </div>
                    <div className='side_nav'>
                        <div className = 'not3'/>
                        <li>Loans</li>
                    </div>
                    <div className='side_nav'>
                        <div className = 'not'/>
                        <li>Loans</li>
                    </div>
                    <div className='side_nav'>
                        <div className = 'not'/>
                        <li>Loans</li>
                    </div>
                    <div className='side_nav'>

                    </div>
                    <div className='side_nav'>

                    </div>
                    <div className='side_nav'>

                    </div>
                    <div className='side_nav'>

                    </div>
                </ul>

                <p style={{ display : 'flex'}}>
                    <div className='not_end' />
                    <Link to = '/'>
                        <button onClick = {handleSignOut}>
                            Sign Out
                        </button>
                    </Link>
                </p>
            </section>
        </div>
    )
}

export default Sidebar
