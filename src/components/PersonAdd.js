import React from "react";
import axios from "axios";


export default class PersonAdd extends React.Component {
    state = {
        name: ''
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }
    handleSubmit = this.handleSubmit.bind(this);
    handleSubmit(event) {
        event.preventDefault();
        const user = {
            name: this.state.name
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        person Name:
                        <input type="tex" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}