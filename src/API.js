import React from "react";
import style from "./style.css";


class API extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }

    render() {
        return (
            <div>
                <p>{this.state.loading ? "LOADING..." : this.state.character.name}</p>

            </div>
        )

    }

}




export default API