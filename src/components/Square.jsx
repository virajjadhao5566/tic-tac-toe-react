import React, { useState } from 'react'
import './styles.css'
const Square = () => {
    const [variable,setVariable] = useState("")
    const changeVariable = () =>{
        setVariable("X")
    }
    return (
        <div>
            <button onClick={changeVariable} className='square btn'>{variable}</button>
        </div>
    )
}

export default Square
