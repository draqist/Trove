import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DashContent from '../../Components/SideBar Content/SideBarContent'
import Sidebar from '../../Components/SIdeBar/Sidebar'
import './Dashboard.scss'

const DashboardPage = () => {
    const [nav, setNav] = useState(false)
    return (
            <div className = 'dashboard'>
                <div className = 'sidebar_desk'>
                    <Sidebar/>
                </div>
            <div className='main-info'>
                <div className = 'btn-small'>
                            <button className="toggle-button" onClick = {()=> setNav(!nav)}>
                                <div className="toggle-button__line"></div>
                                <div className="toggle-button__line"></div>
                                <div className="toggle-button__line"></div>
                            </button>
                        </div>
                {nav &&
                        <div className = 'm_nav'>
                            <div className = 'wnl'>
                                <NavLink activeClassName = 'selected'  to='/dashboard' onClick = {() => setNav(!nav)}>
                        <h4> Dashboard</h4>
                    </NavLink>
                    <NavLink activeClassName = 'selected' activeStyle={{
                        borderLeft: '3px solid white',
                        backgroundColor: '#1A1A4B',
                        display: 'flex',
                    }} to = '/portfolio' onClick = {() => setNav(!nav)}>
                       <h4> Portfolio</h4>
                    </NavLink>
                    <NavLink activeClassName = 'selected' activeStyle={{
                        borderLeft: '3px solid white',
                        backgroundColor: '#1A1A4B',
                        display: 'flex',
                    }} to='/assets' onClick = {() => setNav(!nav)}>
                        <h4> Assets</h4>
                    </NavLink>
                    <NavLink activeClassName = 'selected' activeStyle={{
                        borderLeft: '3px solid white',
                        backgroundColor: '#1A1A4B',
                        display: 'flex',
                    }} to='/loans' onClick = {() => setNav(!nav)}>
                        <h4> Loans </h4>
                    </NavLink>
                    <NavLink activeClassName = 'selected' activeStyle={{
                        borderLeft: '3px solid white',
                        backgroundColor: '#1A1A4B',
                        display: 'flex',
                        padding: '0',
                        margin: '0',
                    }} to='/settings' onClick = {() => setNav(!nav)} >
                        <h4> Settings </h4>
                    </NavLink>
                            </div>
                        </div>
                }
                <DashContent/>
            </div>
        </div>

    )
}

export default DashboardPage
