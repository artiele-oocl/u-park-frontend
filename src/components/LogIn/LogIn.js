import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.png'
import {Button, TextInput} from 'react-materialize';
import FakeAuth from "../../FakeAuth";

export default class LogIn extends Component {
    state = {
        emailOrPhoneNumber: '',
        password: ''
    };

    componentDidMount() {
        let userInformation = FakeAuth.isAuthenticated();
        if (userInformation.id !== '') {
            // window.location.href = '/parkinglotlist';
        }
    }

    onChangeEmailOrPhoneNumber = (event) => {
        this.setState({emailOrPhoneNumber: event.target.value});
    };

    onChangePassword = (event) => {
        this.setState({password: event.target.value});
    };

    onLoginClick = () => {
        this.props.onLogin(this.state.emailOrPhoneNumber, this.state.password);
    };

    render() {

        return (
            <div className="todo-wrapper">

                <img style={{padding: '10px', width: '250px', marginTop:'6rem'}} src={logo} alt='logo'/>
                <div style={{marginLeft: '2rem', marginRight: '2rem'}}>
                    <div>
                        <TextInput type="text" label="Email/Phone No."
                                   onChange={this.onChangeEmailOrPhoneNumber}/>
                    </div>
                    <div>
                        <TextInput type="password" label="Password"
                                   onChange={this.onChangePassword}/>
                    </div>
                    <Link to="/register" style={{float: 'left'}}> Sign Up!</Link>
                    <br/>
                    <span>
                      <Button onClick={this.onLoginClick} waves="light"
                              style={{marginRight: '5px', marginTop: '2rem', width: '100%'}}>Login</Button>
                    </span>
                </div>
            </div>
        )
    }
}
