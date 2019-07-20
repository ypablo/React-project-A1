import React from "react";
import style from "./style.css";

class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
        return (
            <div className="footer">
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        )
    }
}


export default Footer;