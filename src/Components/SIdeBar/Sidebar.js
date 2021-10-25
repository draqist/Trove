import React from 'react'
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <div className = 'sidebar_container-main'>
            <section className='dashboardlogo_notifications'>
                <img src='https://i.ibb.co/6Ftk5F6/dashboardlogo.png' alt='' className = 'logo' />
                <div src = '../../bg-images/notifications_white_24dp.svg' alt = '' className = 'not'/>
            </section>
            <section className='user_info-avatar'>
                <div className='user_avatar' />
                <div className='user_details'>
                    <h3> User Name </h3>
                </div>
            </section>
           <section className = 'side_bar-navigations'></section> 
        </div>
    )
}

export default Sidebar
