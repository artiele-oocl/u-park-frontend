import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.png'
import {Button, TextInput} from 'react-materialize';

export default class LogIn extends Component {
    state = {
        emailOrPhoneNumber: '',
        password: ''
    };

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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <img style={{padding: '10px', width: '250px'}} src={logo} alt='logo'/>
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
