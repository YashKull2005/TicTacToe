import { useEffect, useState } from "react"
import Square from "./Square"
function App() {
  const [isDraw, setIsDraw] = useState(false);
  const [turn,setTurn]=useState("X");
  const [value,setValue]=useState(Array(9).fill(null));
  const[winner,setWinner]=useState(null);
  const[combination,setCombination]=useState([]);
  function reset(){
    setIsDraw(false);
    setTurn("X");
    setValue(Array(9).fill(null));
    setWinner(null);
    setCombination([]);

  }
  function checkWinner(values){
    const pattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i=0;i<pattern.length;i++){
      const [a,b,c]=pattern[i];
      if(values[a]!==null && values[a]==values[b] && values[a]==values[c]){
        setCombination([a,b,c]);
        return values[a];
      }
    }
    return null;
  }
  function handleClick(index){
    if(winner || isDraw || value[index]!==null){
      return;
    }
    else
    {
      console.log(index);
      const updatedValue=[...value];
      updatedValue[index]=turn;
      setValue(updatedValue);
      const win=checkWinner(updatedValue);
      if(win){
        setWinner(win);
      }
      else if(!updatedValue.includes(null)){
        setIsDraw(true);
      }
      else{
        setTurn(turn==="X"?"O":"X");
      }
  }}
  
  return (
    <>
    <h1>Tic-Tac-Toe</h1>
    <p className={`chance ${winner? "game":""}`}>Player <span className="turn">{turn}</span> it's your turn.</p>
    <div className={`container ${winner ? "blur" : "" }`}>
      <Square value={value[0]} onClick={()=>handleClick(0)} winnerCell={combination.includes(0)}/>
    <Square value={value[1]} onClick={()=>handleClick(1)} winnerCell={combination.includes(1)}/>
    <Square value={value[2]} onClick={()=>handleClick(2)} winnerCell={combination.includes(2)}/>
    <Square value={value[3]} onClick={()=>handleClick(3)} winnerCell={combination.includes(3)}/>
    <Square value={value[4]} onClick={()=>handleClick(4)} winnerCell={combination.includes(4)}/>
    <Square value={value[5]} onClick={()=>handleClick(5)} winnerCell={combination.includes(5)} />
    <Square value={value[6]} onClick={()=>handleClick(6)} winnerCell={combination.includes(6)}/>
    <Square value={value[7]} onClick={()=>handleClick(7)} winnerCell={combination.includes(7)}/>
    <Square value={value[8]} onClick={()=>handleClick(8)} winnerCell={combination.includes(8)}/>
    </div>
    <div> <p className={`game ${winner ? "win" : ""}`}> Winner {winner}</p>
    <p className={`game ${isDraw ? "win" : ""}`}>It's a Draw</p>
    <button className={`game ${winner || isDraw ? "Reset" : ""}`} onClick={reset}>Reset</button>
    </div>
    
    
    </>
  )
}

export default App
