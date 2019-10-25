import React, { Component } from 'react'

export class RegisterWrapper extends Component {

    state = {
        email: '',
        phoneNumber: '',
        name: '',
        password: '',
        confirmPassword: ''
    }

    componentDidMount() {
        this.props.getAllUsers();
    }
    

    onSubmit = (e) => {
        e.preventDefault()
        let newUser = {
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            name: this.state.name,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        this.props.createUser(newUser)
    }

    onChangeEmail = (e) => {
        this.setState({email: e.target.value})    
    }
    onChangePhoneNumber = (e) => {
        this.setState({phoneNumber: e.target.value})
    }
    onChangeName = (e) => {
        this.setState({name: e.target.value})
    }
    onChangePassword = (e) => {
        this.setState({password: e.target.value})
    }
    onChangeConfirmPassword = (e) => {
        this.setState({confirmPassword: e.target.value})    
    }

    render() {
        return (
            <div className="register-wrapper">
                {console.log(this.props.users)}
                <form onSubmit = {this.onSubmit}>
                    <input onChange = {this.onChangeEmail} placeholder = "Email"/><br/>
                    <input onChange = {this.onChangePhoneNumber} placeholder = "Phone Number"/><br/>
                    <input onChange = {this.onChangeName} placeholder = "Name"/><br/>
                    <input onChange = {this.onChangePassword} placeholder = "Password"/><br/>
                    <input onChange = {this.onChangeConfirmPassword} placeholder = "Confirm Password"/><br/>
                    <button type = "submit">Register</button>
                </form>
            </div>
        )
    }
}

export default RegisterWrapper
