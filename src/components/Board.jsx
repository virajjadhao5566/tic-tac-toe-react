import React, { useState } from "react";
import Square from "./Square";
import './styles.css'
const Board = ({isXnext,squares,onPlay}) =>{
    const changeSquares = (index) =>{
        if(squares[index] || calculateWinner(squares)){
            return;
        }
        const arr = squares.slice()
        if(isXnext){
            arr[index] = 'X'
        }else if(arr[index] === null){
            arr[index] = 'O'
        }
        onPlay(arr)
    }
    let status = ""
    const winner = calculateWinner(squares)
    if(winner){
        status = winner + " won the match"
    }else{
        status = "Next turn : " + (isXnext?'X':'O')
    }
    return(
    <>
        <div className="status">{status}</div>
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
        </>
    )
}

export default Board

const calculateWinner = (squares) =>{
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
}