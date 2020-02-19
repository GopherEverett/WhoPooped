import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Owners from './components/Owners'
import Owner from './components/Owner'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Who Pooped?</Navbar.Brand>
        </Navbar>
        <Switch>
          <Route exact path='/' component={Owners} />
          <Route exact path='/:ownerId' component={Owner} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
