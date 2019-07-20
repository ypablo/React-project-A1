import React from "react";
import style from "./style.css";


class Forms2 extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First name"
                    onChange={this.handleChange} />
                <br />
                <input
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last name"
                    onChange={this.handleChange} />
                <h1>{this.state.firstName} {this.state.lastName}</h1>

                <br /><br />
                <textarea
                    value={"Some"}
                    onChange={this.handleChange} />

                <br /><br />
                <label>
                    <input
                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly ? true : false}
                        onChange={this.handleChange} /> Is friendly?
                </label>

                <br /> <br />
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
                <h2>You are a {this.state.gender}</h2>

                <br /> <br />
                <select
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor">
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>
                <h2>Your favorite color is {this.state.favColor}</h2>

                <br /> <br />
                <button>Submit</button>

            </form>
        )

    }

}

export default Forms2
/* btw there is a library called FORMIK as API to deal with forms */

