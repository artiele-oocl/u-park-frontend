import React, {Component} from 'react';

export default class LogIn extends Component {
    state = {
          emailOrPhoneNumber: '',
          password: ''
      };

      onChangeEmailOrPhoneNumber = (event) => {
        this.setState({ emailOrPhoneNumber: event.target.value}); 
      };

      onChangePassword = (event) => {
        this.setState({ password: event.target.value}); 
      };

      onLoginClick = () =>{
         this.props.onLogin(this.state.emailOrPhoneNumber, this.state.password);
      }
      
render() {
    return (
      <div className="todo-wrapper">
        <div>
            <div>
                <span>Email/Phone Number: </span>
                <input type="text" onChange={this.onChangeEmailOrPhoneNumber}></input>
            </div>
            <div>
                <span>Password:</span>
                <input type="password" onChange={this.onChangePassword}></input>
            </div>
            <span>
                <button onClick={this.onLoginClick}>Login</button>
            </span>
        </div>

      </div> 
    )
  }
}
