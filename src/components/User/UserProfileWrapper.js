import React, {Component} from 'react';
import FakeAuth from "../../FakeAuth";
import {Button, TextInput} from 'react-materialize';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import * as M from "materialize-css";

export class UserProfileWrapper extends Component {

    state = {
        id: FakeAuth.isAuthenticated().id,
        name: FakeAuth.isAuthenticated().name,
        email: FakeAuth.isAuthenticated().email,
        phoneNumber: FakeAuth.isAuthenticated().phoneNumber
    };

    componentDidMount() {
        this.props.getAllUsers()
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
            this.props.patchUserProfile(this.state.id, userInfo);
            M.toast({html: 'Successfully updated the profile'});
            setTimeout(() => {window.location.href = '/parkinglotlist'}, 1000)
        }
    };

    onLogout = () => {
        FakeAuth.logMeOut();
        window.location.href = '/';
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

        const removeSelf = this.props.users.filter(user => user.id !== this.state.id);

        const isEmailCheck = removeSelf.some(user => user.email == this.state.email);
        const isPhoneNumberCheck = removeSelf.some(user => user.phoneNumber == this.state.phoneNumber);

        if (isEmailCheck || isPhoneNumberCheck) {
            M.toast({html: 'Email or Phone number already exist'});
            return false;
        }

        return true;
    }

    render() {
        return (
            <div>

                <div style={{backgroundColor: '#26A69A', height: '55vh'}}>
                    <Button flat waves="light" style={{float: 'right', marginTop: '3%', color: 'white'}}
                            onClick={this.onSave}>Save</Button>
                    <AccountCircleIcon style={{fontSize: '25rem', color: '#fff'}}/>
                </div>

                <div style={{padding: '2rem'}}>
                    <TextInput onChange={this.onNameChange} label="Name" value={this.state.name}/>
                    <TextInput onChange={this.onEmailChange} label="Email" value={this.state.email}/>
                    <TextInput onChange={this.onPhoneNumberChange} label="Mobile Number"
                               value={this.state.phoneNumber}/>
                </div>

                <Button style={{width: '80%'}} onClick={this.onLogout}>Logout</Button>
            </div>
        )
    }
}

export default UserProfileWrapper
