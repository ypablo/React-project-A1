import React from "react";
import style from "./style.css";

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    render() {
        return (
            <div className="main">
                <hi1>Counter: {this.state.count}</hi1>
                <button className="main-button" onClick={this.handleClick}>Change!</button>
            </div >
        );
    }
}


export default Main;