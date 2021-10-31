import React from 'react'
import './stockcard.scss'

const StockCard = ({image, name, price,  percChange, prevClose, symbol}) => {
    return (
        <div className = 's-card'>
            <div className='stock_title'>
                <h4> {name}</h4>
                <h5> { symbol }</h5>
            </div>
            <div className = 'stockimage_desk'>
                 <img src = {image} alt = '' className = 'stocklogo'/>
           </div>
            <div className='prices'>
                <h5 > $ {price} </h5>
                <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0'}}>
                    <h5> {(price - prevClose).toFixed(2)}</h5>
                    <h5>({ percChange })  </h5>
                </div>
            </div>
        </div>
    )
}

export default StockCard
