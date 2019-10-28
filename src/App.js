import React from 'react';
import RegisterContainer from './containers/RegisterContainer';
import LogInContainer from './containers/LogInContainer'
import './App.css'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import ParkingLotListContainer from './containers/ParkingLotListContainer';
import {connect} from "react-redux";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>

                        <Route path="/register">
                            <RegisterContainer/>
                        </Route>

                        <Route path="/parkinglotlist">
                            <ParkingLotListContainer isLogedIn = {this.props.isLogIn}/>
                        </Route>

                        <Route exact path="/">
                            {this.props.isLogIn ? <Redirect to="/parkinglotlist" /> : <LogInContainer />}
                        </Route>

                    </Switch>
                </Router>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    // NOTE: If need to pass the use info you can also pass this in the parking lot list container
    user: state.loginResource.user,
    isLogIn: state.loginResource.isLogIn
});

export default connect(
    mapStateToProps,
    null
)(App)
