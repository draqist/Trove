import React from 'react'
import DashContent from '../../Components/SideBar Content/SideBarContent'
import Sidebar from '../../Components/SIdeBar/Sidebar'
import './Dashboard.scss'

const DashboardPage = () => {
    return (
            <div className = 'dashboard'>
                <div className = 'sidebar_desk'>
                    <Sidebar/>
                </div>
            <div className='main-info'>
                <DashContent/>
            </div>
        </div>

    )
}

export default DashboardPage
