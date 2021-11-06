import React, { useEffect, useState } from 'react'
import './sidebarcontent.scss'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'
import StockCard from '../StockCard/StockCard'
import { data } from '../../portfolio'
import Newscard from '../NewsCard/Newscard'
import AOS from 'aos'
import 'aos/dist/aos.css'

const portValue = '10,000'

const DashContent = () => {
    AOS.init()
    const [userName, setUserName] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUserName(user.displayName)
        }
    })
    }, [])
    return (
        <>
            <section className='dashboard_content'>
                <div className = 'header-cust'>
                    <div className='Header_section'>
                        <div className='Header_title '>
                                <h3> Hello { userName }</h3>
                                <span> Happy trading!!</span>
                            </div>
                            <div className='Header_portfolio shadow-4dp'>
                                <h4> Total Portfolio Value : { portValue }</h4>
                                <h4> Wallet Balance : { portValue }</h4>
                                <h4>  Loan Balance : { portValue }</h4>
                            </div>
                        </div>
                </div>
                <div className = 'trend-cust' >
                    <div className='trending_stocks'>
                        <h2> Trending</h2>
                        <div className='t_stocks' data-aos = 'fade-in-down' data-aos-duration = '1500' >
                            {
                                data.trending.map((trends) => (
                                    <StockCard
                                        key={trends._id}
                                        name={trends.name}
                                        price={trends.price}
                                        percChange={trends.percent_change} prevClose={trends.prev_close} symbol={trends.symbol}
                                        image={trends.image_url} />
                                )
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className = 'trend-cust'>
                    <div className='market_news'>
                            <h2> Market News </h2>
                        <div className = 'm-news' >
                            {
                                data.market_news.map((m_news) =>
                                    <Newscard
                                        key={m_news.date.toString()} imageThumb={m_news.image_url} headline={m_news.title}
                                        newsUrl={m_news.news_url} />)
                            }
                        </div>
                    </div>
                
                </div>
            </section>  
        </>
    )
}

export default DashContent
