import React, {Component} from 'react';
import FakeAuth from "../../FakeAuth";
import {Button, TextInput} from 'react-materialize';
import * as M from "materialize-css";

export class UserProfileWrapper extends Component {

    state = {
        id: FakeAuth.isAuthenticated().id,
        name: FakeAuth.isAuthenticated().name,
        email: FakeAuth.isAuthenticated().email,
        phoneNumber: FakeAuth.isAuthenticated().phoneNumber
    };

    constructor(props) {
        super(props);
        let userInfo = FakeAuth.isAuthenticated();
    }

    onNameChange = (e) => {
        this.setState({name: e.target.value});
    };

    onEmailChange = (e) => {
        this.setState({email: e.target.value});
    };

    onPhoneNumberChange = (e) => {
        this.setState({phoneNumber: e.target.value});
    };

    onSave = () => {
        if (this.isValid()) {
            let userInfo = {
                name: this.state.name,
                email: this.state.email,
                phoneNumber: this.state.phoneNumber
            };
            this.props.patchUserProfile(this.state.id, userInfo)
        }
    };

    isValid() {
        if (!new RegExp("[a-zA-Z0-9]{5}").test(this.state.name)) {
            M.toast({html: 'Invalid Name, must contain at least 5 characters'});
            return false
        }

        if (!new RegExp(".+@.+\\..+").test(this.state.email)) {
            M.toast({html: 'Invalid Email'});
            return false
        }

        if (!new RegExp("[0-9]{11}").test(this.state.phoneNumber)) {
            M.toast({html: 'Invalid Number, must be 11-digit number'});
            return false
        }
        return true;
    }

    render() {
        return (
           <div>
               <h1>User Profile</h1>
               <TextInput onChange = {this.onNameChange} value = {this.state.name}/>
               <TextInput onChange = {this.onEmailChange} value = {this.state.email}/>
               <TextInput onChange = {this.onPhoneNumberChange} value = {this.state.phoneNumber}/>
               <Button onClick = {this.onSave}>Save</Button>
           </div>
        )
    }
}

export default UserProfileWrapper
