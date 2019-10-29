import React, { Component } from 'react'
import {Select, Row, Col, Autocomplete, Button, Modal, TextInput} from 'react-materialize';
export default class WalletTopUp extends Component {

    state = {
        topUpvalue: ''
    };

    onTopUpChange = (e) => {
        this.setState({topUpvalue: e.target.value});
    };
    render() {
        return (
            <div style={{height:"50vh"}}>
                <Modal  header="Top Up" trigger={<div style={{padding:"10vh"}}><Button>Top Up</Button></div>}>
                    <p>
                        <TextInput onChange={this.onTopUpChange} value={this.state.topUpvalue}/>
                        <Button>Save</Button>
                    </p>
                </Modal>
            </div>
        )
    }
}
