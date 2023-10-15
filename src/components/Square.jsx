import React, { useState } from 'react'
import './styles.css'
const Square = ({value,onSquareClick}) => {
    return (
        <div>
            <button onClick={onSquareClick} className='square btn'>{value}</button>
        </div>
    )
}

export default Square
