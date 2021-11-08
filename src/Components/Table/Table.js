import React from 'react'
import './table.scss'

const Table = ({id, symbol, pps, Qt, eQv}) => {
    return (
        <div className = 'table-row'>
            <h4> { id }</h4>
            <h4 className = 'sym'> {symbol }</h4>
            <h4 className = 'pps'> {pps }</h4>
            <h4> {Qt} </h4>
            <h4 className = 'eqv'> {eQv} </h4>
        </div>
    )
}

export default Table
