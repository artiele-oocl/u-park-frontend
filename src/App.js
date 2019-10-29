import React from 'react';
import RegisterContainer from './containers/RegisterContainer';
import LogInContainer from './containers/LogInContainer'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ParkingLotListContainer from './containers/ParkingLotListContainer';
import FakeAuth from "./FakeAuth";
import Menu from './components/Menu/Menu';
import UserProfileContainer from "./containers/UserProfileContainer";

class App extends React.Component {

    componentDidMount() {
        // This is for reset of session because there is still no logout
        // FakeAuth.logMeOut();
    }


    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>

                        <Route exact path="/">
                            <LogInContainer />
                        </Route>

                        <Route path="/register">
                            <RegisterContainer/>
                        </Route>

                        <Route path="/parkinglotlist">
                            <ParkingLotListContainer />
                            <Menu/>
                        </Route>

                        <Route path="/transactions">
                            <ParkingLotListContainer/>
                            <Menu/>
                        </Route>

                        <Route path="/notifications">
                            <ParkingLotListContainer/>
                            <Menu/>
                        </Route>

                        <Route path="/wallet">
                            <ParkingLotListContainer/>
                            <Menu/>
                        </Route>
                        
                        <Route path="/profile">
                            <UserProfileContainer />
                            <Menu/>
                        </Route>

                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App