import React from 'react'
import Sidebar from '../../Components/SIdeBar/Sidebar'
import './Homepage.scss'

const DashboardPage = () => {
    return (
        <div className = 'dashboard'>
            <div className='sidebar_container'>
                <Sidebar/>
            </div>
            <div className='main-info'>
                
            </div>
        </div>
    )
}

export default DashboardPage
