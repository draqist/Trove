import React, { useState }from 'react'
import Sidebar from '../../Components/SIdeBar/Sidebar'
import Table from '../../Components/Table/Table'
import './portfolio.scss'
import { portfolioValue } from '../../Helpers/Functions'
import { topAsset } from '../../Helpers/Functions'
import { totalAsset} from '../../Helpers/Functions'
import { Portfolio } from '../../portfolio'
import {NavLink} from 'react-router-dom'

const Portfoliopage = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className = 'portfolio-page'>
            <div className='sidebar_desk'>
                <Sidebar />
            </div>
            <div className='portfolio_content'>
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
                    <NavLink activeClassName = 'selected' to = '/portfolio' onClick = {() => setNav(!nav)}>
                       <h4> Portfolio</h4>
                    </NavLink>
                    <NavLink activeClassName = 'selected' to='/assets' onClick = {() => setNav(!nav)}>
                        <h4> Assets</h4>
                    </NavLink>
                    <NavLink activeClassName = 'selected'to='/loans' onClick = {() => setNav(!nav)}>
                        <h4> Loans </h4>
                    </NavLink>
                    <NavLink activeClassName = 'selected'  to='/settings' onClick = {() => setNav(!nav)} >
                        <h4> Settings </h4>
                    </NavLink>
                            </div>
                        </div>
                }
                <div className='portfolio-header'>
                    <div style = {{borderBottom: '2px solid rgb(221, 218, 218)', borderRadius: '10px', paddingBottom: '1rem'}}>
                        <h2>My Portfolio</h2>
                    <span> All in One-place </span>
                    </div>
                    <div className='portfolio-cards'>
                        <div className='p_value'>
                            <div className = 'p_content-header'>
                                <h4> Total Portfolio Value</h4>
                                <div className = 'balance'>
                                    <h1> NGN {portfolioValue}  </h1>
                                </div>
                                
                            </div>
                        </div>
                        <div className='asset_value'>
                            <div className = 'p_content-header'>
                                <h4> Total Asset  </h4>
                                <div className = 'balance'>
                                    <h1> {totalAsset}  </h1>
                                </div>
                            </div>
                        </div>
                        <div className='p_value'>
                            <div className = 'p_content-header'>
                                <h4> Top Assets </h4>
                                <div className = 'balance'>
                                    <h1> {topAsset}  </h1>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='asset-header'>
                    <div style = {{borderBottom: '2px solid rgb(221, 218, 218)', borderRadius: '10px', paddingBottom: '1rem'}}>
                        <h2> My Assets </h2>
                    <span> All in One-place </span>
                    </div>
                    <div className='portfolio-cards'>
                        <div className='table_container'>
                            <div className='table-head'>
                                <h4> s/n </h4>
                                <h4> symbol</h4>
                                <h4> price-per-share</h4>
                                <h4> total quantity</h4>
                                <h4> equity value </h4>
                            </div>
                            <div className='table-body'>
                                {Portfolio.map((e) => <Table key = {e.id} id = {e.id} symbol = {e.symbol} pps = {e.pricePerShare} Qt = {e.totalQuantity.toFixed(1)} eQv = {e.equityValue} /> )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfoliopage
