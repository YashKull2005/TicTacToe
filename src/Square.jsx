import { useState } from "react"

function Square({value,onClick,winnerCell}){
    return(
        <button className={`button ${winnerCell ? "buttons" : ""}`} onClick={onClick}>{value}</button>
    )
}
export default Square
