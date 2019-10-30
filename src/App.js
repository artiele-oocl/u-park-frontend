import React from 'react';
import RegisterContainer from './containers/RegisterContainer';
import LogInContainer from './containers/LogInContainer'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ParkingLotListContainer from './containers/ParkingLotListContainer';
import TransactionOrderContainer from './containers/TransactionOrderContainer';
import Menu from './components/Menu/Menu';
import CheckoutContainer from "./containers/CheckoutContainer";
import UserProfileContainer from "./containers/UserProfileContainer";
import WalletContainer from "./containers/WalletContainer";
import Notification from './components/Notification/Notification';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>

                        <Route exact path="/">
                            <LogInContainer/>
                        </Route>

                        <Route path="/register">
                            <RegisterContainer/>
                        </Route>

                        <Route path="/parkinglotlist">
                            <ParkingLotListContainer/>
                            <Menu  clicked={'home'}/>
                        </Route>

                        <Route path="/transactions">
                            <TransactionOrderContainer/>
                            <Menu clicked={'txn'}/>
                        </Route>

                        <Route path="/notifications">
                            <Notification/>
                            <Menu clicked={'notifs'}/>
                        </Route>

                        <Route path="/wallet">
                            <WalletContainer/>
                            <Menu clicked={'wallet'}/>
                        </Route>

                        <Route path="/profile">
                            <UserProfileContainer/>
                            <Menu />
                        </Route>

                        <Route path="/checkout">
                            <CheckoutContainer/>
                            <Menu/>
                        </Route>

                        <Route path="/notifications">
                            <Notification/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App