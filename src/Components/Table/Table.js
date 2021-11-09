import React from 'react'
import './table.scss'

const Table = ({id, symbol, pps, Qt, eQv}) => {
    return (
        <div className = 'table-row'>
            <h4> { id }</h4>
            <h4 className = 'sym' style = {{marginLeft: '-4.5rem'}}> {symbol }</h4>
            <h4 className = 'pps' style = {{marginLeft: '-1.5rem'}}> {pps }</h4>
            <h4> {Qt} </h4>
            <h4 className = 'eqv' style = {{marginRight: '3rem'}}> {eQv} </h4>
        </div>
    )
}

export default Table
