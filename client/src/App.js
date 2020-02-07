import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Owners from './components/Owners'
import Owner from './components/Owner'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Who Pooped?</h1>
        <Switch>
          <Route exact path='/' component={Owners} />
          <Route exact path='/:ownerId' component={Owner} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
