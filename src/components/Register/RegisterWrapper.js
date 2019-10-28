import React, {Component} from 'react'
import logo from '../../logo.jpg'
import {Link} from 'react-router-dom';
import {TextInput, Checkbox, Button, Icon} from 'react-materialize';

export class RegisterWrapper extends Component {
    state = {
        email: '',
        phoneNumber: '',
        name: '',
        password: '',
        confirmPassword: '',
        conditionAgreement: false
    };

    componentDidMount() {
        this.props.getAllUsers()
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.isInputValid()) {
            const newUser = {
                email: this.state.email,
                phoneNumber: this.state.phoneNumber,
                name: this.state.name,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            };
            let status = this.props.createUser(newUser);
            status.then(user => {
                    if (user.id !== null) {
                        window.location.href = '/';
                    }
                }
            );
        }
    };

    isInputValid() {
        if (!this.state.conditionAgreement) {
            alert('Please check the box to agree in terms and conditions');
            return false
        }
        if (!new RegExp(".+@.+\\..+").test(this.state.email)) {
            alert('Invalid Email');
            return false
        }

        if (!new RegExp("[0-9]{11}").test(this.state.phoneNumber)) {
            alert('Invalid Number, must be 11-digit number');
            return false
        }

        if (!new RegExp("[a-zA-Z0-9]{5}").test(this.state.name)) {
            alert('Invalid Name, must contain at least 5 characters');
            return false
        }

        if (!new RegExp("[a-zA-Z0-9]{3}").test(this.state.password)) {
            alert('Invalid Name, must contain at least 3 characters');
            return false
        }

        if (this.state.password !== this.state.confirmPassword) {
            alert('Passwords do not match');
            return false
        }

        const isExist = this.props.users.some(user =>
            user.email === this.state.email || user.phoneNumber === this.state.phoneNumber
        );

        if (isExist) {
            alert('Email or phone number already exist');
            return false
        }
        return true;
    }

    onChangeEmail = (e) => {
        this.setState({email: e.target.value})
    };

    onChangePhoneNumber = (e) => {
        this.setState({phoneNumber: e.target.value})
    };

    onChangeName = (e) => {
        this.setState({name: e.target.value})
    };

    onChangePassword = (e) => {
        this.setState({password: e.target.value})
    };

    onChangeConfirmPassword = (e) => {
        this.setState({confirmPassword: e.target.value})
    };

    onChangeConditionAgreement = () => {
        this.setState({conditionAgreement: !this.state.conditionAgreement})
    };

    render() {
        return (
            <div className="register-wrapper">
                <div>
                    <img style={{padding: '10px', width: '250px'}} src={logo} alt='logo'/>
                </div>
                <form onSubmit={this.onSubmit} style={{marginLeft: '2rem', marginRight: '2rem'}}>
                    <TextInput icon="email" label="Email/Phone No."
                               onChange={this.onChangeEmail}
                               email validate
                               error="INVALID EMAIL" required/>
                    <TextInput icon="local_phone" label="Phone Number"
                               onChange={this.onChangePhoneNumber}
                               maxLength={11} required/>
                    <TextInput icon="person" label="Full Name"
                               onChange={this.onChangeName}
                               required/>
                    <TextInput icon="lock" label="Password"
                               onChange={this.onChangePassword}
                               password required/>
                    <TextInput icon="lock" label="Confirm Password"
                               onChange={this.onChangeConfirmPassword}
                               password required/>

                    <Checkbox label="I agree to" onChange={this.onChangeConditionAgreement} value="agree"/>
                    <Link to="/terms"> Terms and Conditions</Link>
                    <Button type="submit" waves="light" style={{marginRight: '5px', marginTop: '2rem', width: '100%'}}>
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default RegisterWrapper
