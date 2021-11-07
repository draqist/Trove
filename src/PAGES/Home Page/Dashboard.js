import React, { useState } from 'react'
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
                
                {nav &&
                        <div className = 'm_nav'>
                    <div className='wnl'>
                        <Sidebar nav={nav} setNav={ setNav }/>
                            </div>
                        </div>
                }
                <div className = 'btn-small'>
                            <button className="toggle-button" onClick = {()=> setNav(!nav)}>
                                <div className="toggle-button__line"></div>
                                <div className="toggle-button__line"></div>
                                <div className="toggle-button__line"></div>
                            </button>
                        </div>
                <DashContent/>
            </div>
        </div>

    )
}

export default DashboardPage
