import React from "react";
import style from "./style.css";

class Forms3 extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: null,
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="first name"
                    /><br />
                    <input
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="last name"
                    /><br />
                    <input
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="age"
                    /><br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange} /> Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange} /> Female
                    </label>
                    <br />
                    <select
                        value={this.state.destination}
                        name="destination"
                        onChange={this.handleChange}>
                        <option value="">Please choose a destination</option>
                        <option value="Germany">Germany</option>
                        <option value="Norway">Norway</option>
                        <option value="Italy">Italy</option>
                        <option value="Ireland">Ireland</option>
                    </select>
                    <br /><br />
                    <label>
                        <input
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan} />
                        Vegan?
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher} />
                        Kosher?
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree} />
                        Lactose Free?
                    </label>
                    <br /><br />
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>You destination: {this.state.destination}</p>
                <p>Your dietary restirictions:</p>
                <p>Vegan:{this.state.isVegan ? "YES" : ""}</p>
                <p>Kosher:{this.state.isKosher ? "YES" : ""}</p>
                <p>Lactose Free:{this.state.isLactoseFree ? "YES" : ""}</p>

            </div >
        )
    }
}
export default Forms3