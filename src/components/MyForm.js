import React from 'react'

export default class MyForm extends React.Component {
    state = {
        name: "Jando",
        favoritePet: "",
        rememberMe: false,
        title: "Dr"
    }
    handleChange = (event) => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({ [event.target.name]: isCheckbox ? event.target.checked : event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="name" value={this.state.name} onChangeCapture={this.handleChange} />
                <textarea name="favoritePet" value={this.state.favoritePet} onChangeCapture={this.handleChange} />
                <input name="rememberMe" type="checkbox" checked={this.state.rememberMe} onClick={this.handleChange} />
                <div>
                    <select name="title" value={this.state.title} onChange={this.handleChange}>
                        <option>Sr</option>
                        <option>Sra</option>
                        <option>Mtro</option>
                        <option>Dr</option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>
        );
    }

}