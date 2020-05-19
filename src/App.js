import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './pages/header';
import homeContainer from './pages/home';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <Switch>
            <Route path="/" component={homeContainer} exact />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;