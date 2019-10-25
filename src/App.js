import React from 'react';
import RegisterContainer from './containers/RegisterContainer';
import LogInContainer from './containers/LogInContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RegisterContainer/>
        <LogInContainer />
      </header>
    </div>
  );
}

export default App;
