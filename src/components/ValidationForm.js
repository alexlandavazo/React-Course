import React from 'react'

const initalState = {
    name: '',
    email: '',
    password: '',
    nameError: '',
    emailError: '',
    passwordError: ''
}
export default class ValidationForm extends React.Component {
    state = initalState;
    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({ [event.target.name]: isCheckbox ? event.target.checked : event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(initalState);
        }
    }
    validate = () => {
        let nameError = '';
        let emailError = '';
        let passwordError = '';

        if (!this.state.name) {
            nameError = "name cannot be blank";
        }
        if (!this.state.email.includes('@')) {
            emailError = "ivalid email";
        }
        if (emailError || nameError) {
            this.setState({ emailError, nameError });
            return false;
        }
        return true;
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div style={{ fontSize: 12, color: "red" }}>{this.state.nameError}</div>
                <div>
                    <input name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}</div>
                <div>
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}</div>
                <button type="submit">submit</button>
            </form>
        );
    }
}