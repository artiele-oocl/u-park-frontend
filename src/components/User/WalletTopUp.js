import React, {Component} from 'react'
import {Button, TextInput} from 'react-materialize';
import * as M from "materialize-css";

export default class WalletTopUp extends Component {

    state = {
        topUpValue: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.isInputValid()) {
            this.props.addTopUpValue(this.state.topUpValue);
            this.setState({topUpValue: ''})
        }
    };

    onTopUpChange = (e) => {
        this.setState({topUpValue: e.target.value});
    };

    isInputValid() {
        if (!new RegExp("[0-9]").test(this.state.topUpValue)) {
            M.toast({html: 'Value must be a number'});
            return false
        }
        return true;
    }

    render() {
        return (
            <div style={{height: "50vh"}}>
                <form onSubmit={this.onSubmit} style={{marginLeft: '2rem', marginRight: '2rem'}}>
                    <TextInput label="Amount to top-up" onChange={this.onTopUpChange} value={this.state.topUpValue}/>
                    <Button>Top up</Button>
                </form>
            </div>
        )
    }
}
