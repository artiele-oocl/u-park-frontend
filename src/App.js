import React from 'react';
import RegisterContainer from './containers/RegisterContainer';
import LogInContainer from './containers/LogInContainer'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ParkingLotListContainer from './containers/ParkingLotListContainer';

export default class App extends React.Component {

    state = {
        isLogedIn: false
    }

    checkLogin = (isLogedIn) => {
        if (isLogedIn) {
            this.setState({isLogedIn: true})
            window.location.href = '/parkinglotlist';
        }
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>

                        <Route exact path="/">
                            <LogInContainer checkLogin = {this.checkLogin}/>
                        </Route>

                        <Route path="/register">
                            <RegisterContainer/>
                        </Route>

                        <Route path="/parkinglotlist">
                            <ParkingLotListContainer />
                        </Route>

                    </Switch>
                </Router>
            </div>
        );
    }
}
