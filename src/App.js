import React from 'react';
import RegisterContainer from './containers/RegisterContainer';
import LogInContainer from './containers/LogInContainer'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

export default class App extends React.Component {
  
  render()
  {
  return (
    <div className = "App">
      <Router>

          {/* <Link to="/">Login</Link>   */}
          {/* <Link to="/register">Register</Link> */}
            
          <Switch>
            <Route exact path="/">     
               <LogInContainer/>
            </Route>

            <Route path="/register">
              <RegisterContainer/>
            </Route>
            
          </Switch>
      
      </Router>
    </div>
      /* <div className="App">
        
      </div> */
    );
  }
}
