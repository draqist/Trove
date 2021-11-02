import React from 'react'
import './newscard.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Newscard = ({ imageThumb, newsUrl, headline }) => {
    AOS.init()
    return (
        <div className = 'news-card' >
            <img src={ imageThumb } alt='' className='news_thumbnail' />
            <a href ={ newsUrl}>
                <h4> { headline }</h4>
            </a>
        </div>
    )
}

export default Newscard
