import React from "react";
import style from "./style.css";


function Joke(props){
    return (
        <div className="joke">
            <p style={{borderBottom: "1px solid #555", marginBottom:"10px", padding: "30px"}}>Question: {props.joke.question}</p>
            <p>Punch line: {props.joke.punchline}</p>
        </div>
    )
}

export default Joke