import React from "react";
import style from "./style.css";

function Header() {
    const name = "Bobby Brown"
    return (
        <div className="navbar">
            <p style={{color: "#FF8C00"}}>React project {`${name} whatever ${name}`}</p>
        </div>
    )
}



export default Header;