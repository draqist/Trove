import React, { useState } from 'react'
import './assets.scss'
import StockCard from '../../Components/StockCard/StockCard'
import Newscard from '../../Components/NewsCard/Newscard'
import { data } from '../../portfolio'
import Sidebar from '../../Components/SIdeBar/Sidebar'
import { NavLink } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Assetpage = () => {
    const [nav, setNav] = useState(false)
    AOS.init()
    return (
        <div className = 'assets'>
            <div className='sidebar_desk'>
                <Sidebar/>
            </div>
            <div className='asset_content'>
                <div className = 'btn-small'>
                            <button className="toggle-button" onClick = {()=> setNav(!nav)}>
                                <div className="toggle-button__line"></div>
                                <div className="toggle-button__line"></div>
                                <div className="toggle-button__line"></div>
                            </button>
                </div>
                {nav &&
                    <div div className = 'm_nav'>
                    <div className='wnl'>
                        <NavLink activeClassName = 'selected'  to='/dashboard' onClick = {() => setNav(!nav)}>
                        <h4> Dashboard</h4>
                    </NavLink>
                    <NavLink activeClassName = 'selected'  to = '/portfolio' onClick = {() => setNav(!nav)}>
                       <h4> Portfolio</h4>
                    </NavLink>
                    <NavLink activeClassName = 'selected' to='/assets' onClick = {() => setNav(!nav)}>
                        <h4> Assets</h4>
                    </NavLink>
                    <NavLink activeClassName = 'selected'  to='/loans' onClick = {() => setNav(!nav)}>
                        <h4> Loans </h4>
                    </NavLink>
                    <NavLink activeClassName = 'selected'to='/settings' onClick = {() => setNav(!nav)} >
                        <h4> Settings </h4>
                    </NavLink>
                        </div>
                    </div>
                }

                <div className = 'main_content'>
                    <div className='trending_stocks'>
                        <h2> Trending</h2>
                        <div className='t_stocks' data-aos = 'zoom-in' data-aos-duration = '1700'>
                            {
                                data.trending.map((trends) =>
                                    <StockCard 
                                        key={trends._id}
                                        name={trends.name}
                                        price={trends.price}
                                        percChange={trends.percent_change} prevClose={trends.prev_close} symbol={trends.symbol}
                                        image={trends.image_url} />)
                            }
                        </div>
                    </div>
                </div>
                <div className = 'main_content'>
                    <div className='trending_stocks'>
                        <h2> Top Gainers </h2>
                        <div className='t_stocks' >
                            {
                                data.top_gainers.map((trends) => <StockCard
                                    key={trends._id}
                                    name={trends.name}
                                    price={trends.price}
                                    percChange={trends.percent_change} prevClose={trends.prev_close}
                                    symbol={trends.symbol}
                                    image={trends.image_url} />)
                            }
                        </div>
                    </div>
                </div>
                <div className = 'main_content'>
                    <div className='trending_stocks'>
                        <h2> Top Losers </h2>
                        <div className='t_stocks'>
                            {
                                data.top_losers.map((trends) =>
                                    <StockCard
                                        key={trends._id}
                                        name={trends.name}
                                        price={trends.price}
                                        percChange={trends.percent_change} prevClose={trends.prev_close} symbol={trends.symbol}
                                        image={trends.image_url} />)
                            }
                        </div>
                    </div>
                </div>
                <div className = 'main_content'>
                     <div className='market_news'>
                            <h2> Market News </h2>
                        <div className = 'm-news'>
                            {
                                data.market_news.map((m_news) =>
                                    <Newscard
                                        key={m_news.date.toString()} imageThumb={m_news.image_url} headline={m_news.title}
                                        newsUrl={m_news.news_url} />)
                            }
                        </div>
                    </div>
                   </div>
            </div>
    </div>
    )
}

export default Assetpage
