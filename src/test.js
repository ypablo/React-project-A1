import React from "reatc";
import ReactDOM from "react-dom";

class App extends React.Component {
    render () {
        return (
            <div>
                <Header username="Wacek"/>
                <Greetings/>
            </div>    
        )
    }
}

class Header extends React.Component {
    render (props) {
        return (
            <div>
                <p>Welcome, {this.props.username} </p>
            </div>   
        )
    }
}

class Greeting extends React.Component {
    render () {
        const date = new Date();
        const hours = date.gethours();
        let timeOfDay;

        if (hours < 12) {
            timeOfDay = "morning";
        } else if (hours >= 12 && hours < 17) {
             timoOfDay = "afternoon";   
        } else {
            timeOfDay = "night";
        }

        return(
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}