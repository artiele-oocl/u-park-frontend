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
        this.props.getAllUsers()
    }
    

    onSubmit = (e) => {
        e.preventDefault()

        if (!new RegExp(".+@.+\\..+").test(this.state.email)) {
            alert('Invalid Email')
            return
        }

        if (!new RegExp("[0-9]{11}").test(this.state.phoneNumber)) {
            alert('Invalid Number, must be 11-digit number')
            return
        }

        if (!new RegExp("[a-zA-Z0-9]{5}").test(this.state.name)) {
            alert('Invalid Name, must contain at least 5 characters')
            return
        }

        if (!new RegExp("[a-zA-Z0-9]{3}").test(this.state.password)) {
            alert('Invalid Name, must contain at least 3 characters')
            return
        }

        if (this.state.password != this.state.confirmPassword) {
            alert('Passwords do not match')
            return
        }

        
        const isExist = this.props.users.some(user =>  
            user.email === this.state.email || user.phoneNumber === this.state.phoneNumber
        )

        if (isExist) {
            console.log('asdasd')
            alert('Email or phone number already exist')
            return
        }

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
                <form onSubmit = {this.onSubmit}>
                    <input onChange = {this.onChangeEmail} placeholder = "Email"/><br/>
                    <input onChange = {this.onChangePhoneNumber} placeholder = "Phone Number"/><br/>
                    <input onChange = {this.onChangeName} placeholder = "Name"/><br/>
                    <input type="password" onChange = {this.onChangePassword} placeholder = "Password"/><br/>
                    <input type="password" onChange = {this.onChangeConfirmPassword} placeholder = "Confirm Password"/><br/>
                    <button type = "submit">Register</button>
                </form>
            </div>
        )
    }
}

export default RegisterWrapper
