import React from "react";
import "./TicTacToe.css";
import {useState, useEffect}  from "react"
import circle from "../assets/circle.jpeg";
import cross from "../assets/cross.png";

let data = ["","","","","","","","","",];
const Tictactoe = () => {
    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let [title,setTitle] = useState();
    let [display,setDisplay] = useState("visibility");
    let [winner,setWinner] = useState(false);
    const toggle = (e,num) =>{
        if(lock){
            return 0;
        }
        if(count%2 === 0){
            e.target.innerHTML = `<img src= ${circle}>`;
            data[num] = "o";
            setCount(++count);
            if(count === 9){
                setLock(true);
                setTitle("Game Draw");
                setDisplay("none");
            }
        }
        else{
            e.target.innerHTML = `<img src= ${cross}>`;  
            data[num] = "x";
            setCount(++count);
            if(count === 9){
                setLock(true);
                setTitle("Game Draw");
                setDisplay("none");
            }
        }
    }
    const checkWin = () =>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!== ""){
            console.log("0....1....2");
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!== ""){
            won(data[5]);
        }
        else if(data[7]===data[6] && data[7]===data[8] && data[8]!== ""){
            won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!== ""){
            won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!== ""){
            won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!== ""){
            won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[4]!== ""){
            won(data[4]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!== ""){
            won(data[6]);
        }
    }
    const won  = (winner) =>{
        setLock(true);
        setDisplay("none")
        console.log("Winner");
        if(winner === "o"){
            setTitle(`Congratulations player 1`);
        }
        else{
            setTitle(`Congratulations player 2`);
        }
        setWinner(true);
    }

    useEffect(() =>{
        checkWin();
    },[count])
    
    const reset = () =>{
        window.location.reload();
    }
    return (
        <div className="container">
           {lock ? 
           (<div className="title">
            {title} {" "}
            {title.includes("1") ? (
                <img src={circle} alt="Player 1" />
            ) : title.includes("2") ? (
                <img src={cross} alt="Player 2" />
            ) : null}
        </div>):   
           (<div className="title">
                <p>Tic Tac Toe Game</p><span>React</span>
            </div>)}
                <div className="board" style={{display: display}}>
                    <div className="row1">
                        <div className="boxes" onClick={(e) =>toggle(e,0)}></div>
                        <div className="boxes" onClick={(e) =>toggle(e,1)}></div>
                        <div className="boxes" onClick={(e) =>toggle(e,2)}></div>
                    </div>
                    <div className="row2">
                        <div className="boxes" onClick={(e) =>toggle(e,3)}></div>
                        <div className="boxes" onClick={(e) =>toggle(e,4)}></div>
                        <div className="boxes" onClick={(e) =>toggle(e,5)}></div>
                    </div>
                    <div className="row3">
                        <div className="boxes" onClick={(e) =>toggle(e,6)}></div>
                        <div className="boxes" onClick={(e) =>toggle(e,7)}></div>
                        <div className="boxes" onClick={(e) =>toggle(e,8)}></div>
                    </div>
                </div>
            <button className="reset" onClick={() =>reset()}>{winner?"PlayAgain":"Restart"}</button>
        </div>
    );
}

export default Tictactoe;