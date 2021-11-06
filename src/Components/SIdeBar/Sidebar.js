import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { auth } from '../../firebase'
import {signOut, onAuthStateChanged} from 'firebase/auth'
import './Sidebar.scss'
import logout from '../../bg-images/logout_black_24dp.svg'
import { UserDataHandler } from '../../Helpers/Functions'


const Sidebar = () => {
    // sets users name
    const [userName, setUserName] = useState('')
    //set user profile image
    const [userImage, setUserImage] = useState('')
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            if (user.displayName === null) {
                setUserName('Stranger')
            }else
            setUserImage(user.photoURL)
            setUserName(user.displayName)
            let User = (user.displayName)
            let UserEmail = (user.email)
            let UserImage = (user.photoURL)

            UserDataHandler(User, UserEmail, UserImage)
        }
    })
    }, [])
    const handleSignOut = async () => {
        await signOut(auth)
    }

    return (
        <div className = 'sidebar_container-main'>
            <section className='dashboardlogo_notifications'>
                <img src='https://i.ibb.co/6Ftk5F6/dashboardlogo.png' alt='' className = 'logo' />
                <div className = 'not'/>
            </section>
            <section className='user_info-avatar'>
                <img src = {userImage} alt = '' className='user_avatar' />
                <div className='user_details'>
                    <h4> {userName }</h4>
                </div>
            </section>
            <section className='side_bar-navigations'>
                <ul>
                    <NavLink activeClassName = 'selected' activeStyle={{
                        borderLeft: '3px solid white',
                        backgroundColor: '#1A1A4B',
                        display: 'flex',

                    }} to='/dashboard'>
                        <div className='side_nav'>
                            <div  className = 'not1'/>
                            <li>Dashboard</li>
                        </div>
                    </NavLink>
                    <NavLink activeClassName = 'selected' activeStyle={{
                        borderLeft: '3px solid white',
                        backgroundColor: '#1A1A4B',
                        display: 'flex',
                    }} to = '/portfolio'>
                        <div className='side_nav'>
                            <div className = 'not4'/>
                            <li>My Portfolio</li>
                        </div>
                    </NavLink>
                    <NavLink activeClassName = 'selected' activeStyle={{
                        borderLeft: '3px solid white',
                        backgroundColor: '#1A1A4B',
                        display: 'flex',
                    }} to='/assets'>
                        <div className='side_nav'>
                            <div className = 'not3-1'/>
                            <li>Assets</li>
                        </div>
                    </NavLink>
                    <NavLink activeClassName = 'selected' activeStyle={{
                        borderLeft: '3px solid white',
                        backgroundColor: '#1A1A4B',
                        display: 'flex',
                    }} to='/loans'>
                        <div className='side_nav'>
                            <div className = 'not3'/>
                            <li>Loans</li>
                        </div>
                    </NavLink>
                        <NavLink to='#' >
                            <div className='side_nav'>
                                <div className = 'not2'/>
                                <li> Wallet</li>
                            </div>
                        </NavLink>
                    
                    <NavLink activeClassName = 'selected' activeStyle={{
                        borderLeft: '3px solid white',
                        backgroundColor: '#1A1A4B',
                        display: 'flex',
                        padding: '0',
                        margin: '0',
                    }} to='/settings' >
                        <div className='side_nav'>
                            <div className = 'not5'/>
                            <li>Settings</li>
                        </div>
                    </NavLink>
                </ul>

                <p style={{ display: 'flex', margin: '12px 1.3rem 1rem', alignItems: 'center', marginTop: '3rem'}}>
                    <img src = {logout} className='not_end' alt = '' />
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
