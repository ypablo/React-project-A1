import React from "react";
//import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

            </div>
        )
    }
}

class Header extends React.Component {
    constructor() {
        super()
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            name: "Bobby",
            age: 23,
            isLoggedIn: false
        }
    }

    handleToggle() {
        this.setState(() => {
            return {
                isLoggedIn: !this.state.isLoggedIn
            }
        });
    }



    render(props) {
        let wordDisplay;
        this.state.isLoggedIn ? wordDisplay = "IN" : wordDisplay = "OFF";
        return (
            <div>
                <h1>Welcome, {this.props.username} </h1>
                <h1>My name is {this.state.name}.</h1>
                <h3>I am {this.state.age} yrs old.</h3>
                <h3 onClick={this.handleToggle}>You are currently {wordDisplay}</h3>
                <h3 onClick={this.handleToggle}>You are currently {this.state.isLoggedIn ? "Logged On" : "Logged Off"}. </h3>
            </div >
        )
    }
}

export default App;