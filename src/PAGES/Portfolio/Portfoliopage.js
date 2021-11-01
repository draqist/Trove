import React from 'react'
import Sidebar from '../../Components/SIdeBar/Sidebar'
import './portfolio.scss'

const Portfoliopage = () => {
    return (
        <div className = 'portfolio-page'>
            <Sidebar />
            <div className='portfolio_content'>
                <div className='portfolio-header'>
                    <div style = {{borderBottom: '2px solid rgb(221, 218, 218)', borderRadius: '10px', paddingBottom: '1rem'}}>
                        <h2>My Portfolio</h2>
                    <span> All in One-place </span>
                    </div>
                    <div className='portfolio-cards'>
                        <div className='p_value'>
                            <div className = 'p_content-header'>
                                <h4> Total Portfolio Value</h4>
                            </div>
                        </div>
                        <div className = 'p_value'>

                        </div>
                        <div className = 'p_value'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfoliopage
