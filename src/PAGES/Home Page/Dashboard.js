import React from 'react'
import SideBarContent from '../../Components/SideBar Content/SideBarContent'
import Sidebar from '../../Components/SIdeBar/Sidebar'
import './Dashboard.scss'

const DashboardPage = () => {
    return (
            <div className = 'dashboard'>
                <Sidebar/>
            <div className='main-info'>
                <SideBarContent/>
            </div>
        </div>

    )
}

export default DashboardPage
