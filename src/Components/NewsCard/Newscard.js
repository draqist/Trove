import React from 'react'
import './newscard.scss'

const Newscard = ({imageThumb, newsUrl, headline}) => {
    return (
        <div className = 'news-card'>
            <img src={ imageThumb } alt='' className='news_thumbnail' />
            <a href ={ newsUrl}>
                <h4> { headline }</h4>
            </a>
        </div>
    )
}

export default Newscard
