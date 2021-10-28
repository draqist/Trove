import React from 'react'
import './stockcard.scss'

const StockCard = ({name, price, percChange, prevClose, symbol}) => {
    return (
        <div className = 's-card'>
            <div className='stock_title'>
                <h4> {name}</h4>
                <h5> { symbol }</h5>
            </div>
            <div className = 'stocklogo'/>
            <div className='prices'>
                <h5> {price} </h5>
                <div>
                    <span> {price - prevClose}</span>
                    <h5> { percChange } </h5>
                </div>
            </div>
        </div>
    )
}

export default StockCard
