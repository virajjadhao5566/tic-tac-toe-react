import React, { useState } from "react";
import Square from "./Square";
import './styles.css'
const Board = () =>{
    const [squares,setSquares] = useState(Array(9).fill(null))
    const changeSquares = (index) =>{
        const arr = squares.slice()
        arr[index] = "X"
        setSquares(arr)
    }
    return(
        <div className="grid">
            <div className="row">
                <Square value={squares[0]} onSquareClick={()=>changeSquares(0)}/>
                <Square value={squares[1]} onSquareClick={()=>changeSquares(1)}/>
                <Square value={squares[2]} onSquareClick={()=>changeSquares(2)}/>
            </div>
            <div className="row">
                <Square value={squares[3]} onSquareClick={()=>changeSquares(3)}/>
                <Square value={squares[4]} onSquareClick={()=>changeSquares(4)}/>
                <Square value={squares[5]} onSquareClick={()=>changeSquares(5)}/>
            </div>
            <div className="row">
                <Square value={squares[6]} onSquareClick={()=>changeSquares(6)}/>
                <Square value={squares[7]} onSquareClick={()=>changeSquares(7)}/>
                <Square value={squares[8]} onSquareClick={()=>changeSquares(8)}/>
            </div>
        </div>
    )
}

export default Board