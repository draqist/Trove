import React, { useState } from 'react'
import './sidebarcontent.scss'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'
import StockCard from '../StockCard/StockCard'
import { } from 'flutterwave-react-v3'
import { data } from '../../portfolio'
import Newscard from '../NewsCard/Newscard'
const portValue = '10,000'

const SideBarContent = () => {
    const [userName, setUserName] = useState('')
    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (user.displayName === null) {
                setUserName('Stranger')
            }else
            setUserName(user.displayName)
        }
    })
    return (
        <>
            <section className='dashboard_content'>
                <div style = {{borderBottom: '2px solid rgba(0,0,0,.25)', marginBottom: '2rem', borderRadius: '8px', backgroundColor: 'white'}}>
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
                <div style = {{backgroundColor: 'white', borderRadius: '8px', paddingLeft: '8px'}}>
                    <div className='trending_stocks'>
                        <h2> Trending</h2>
                        <div className='t_stocks'>
                            {
                                data.trending.map((trends) => <StockCard key={trends._id} name={ trends.name} price={ trends.price } percChange={ trends.percent_change} prevClose={ trends.prev_close } symbol={ trends.symbol } image = {trends.image_url} />)
                            }
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'white', borderRadius: '8px', paddingLeft: '8px' }}>
                
                    <div className='market_news'>
                            <h2> Market News </h2>
                        <div className = 'm-news'>
                            {
                                data.market_news.map((m_news) => <Newscard key={m_news.date.toString()} imageThumb={m_news.image_url} headline={m_news.title} newsUrl={m_news.news_url} />)
                            }
                        </div>
                    </div>
                
                </div>
                <div className='text_dummy'>

                </div>
            </section>
            <section className = 'wallet_content'>
                <div></div>
            </section>
         <section></section>   
         <section></section>   
         <section></section>   
         <section></section>   
         <section></section>   
        </>
    )
}

export default SideBarContent
