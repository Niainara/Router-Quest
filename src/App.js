import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom'

import Home from "./components/Home";
import History from "./components/History";
import Error from "./components/Error";
import Navigation from "./components/Navigation";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/notre-histoire" component={History}/>
            <Route exact component={Error}/>
          </Switch>
        </div>      
      </BrowserRouter>
      
    );
  }
}

export default App;
