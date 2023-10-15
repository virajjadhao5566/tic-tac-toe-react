import React, { useState } from 'react'
import Board from './Board'
import './styles.css'

const Game = () => {
    const [isXnext,setisXnext] = useState(true)
    const [currMove,setCurrMove] = useState(0)
    const [history,setHistory] = useState([Array(9).fill(null)])

    const currSquares = history[currMove]
    const onPlay = (arr) =>{
        const nextHistory = [...history.slice(0,currMove+1),arr]
        setHistory(nextHistory)
        setisXnext((isXnext)=>(!isXnext))
        setCurrMove(nextHistory.length-1)
    }
    const jump = (index) =>{
        setCurrMove(index)
        setisXnext(index%2 === 0)
    }
    const moves = history.map((squares,move)=>{
        let desc;
        if(move > 0){
            desc = "Go to move # "+move
        }else{
            desc = "Go to start"
        }
        return(
            <div className='list'>
                <li key={move}>
                    <button onClick={()=>jump(move)}>{desc}</button>
                </li>
            </div>
        )
    })
    return (
        <>
        <div>
            <Board isXnext={isXnext} squares={currSquares} onPlay={onPlay}/>
        </div>
        <div>
            <ol>{moves}</ol>
        </div>
        </>
    )
}

export default Game
