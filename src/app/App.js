import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./Home";
import Header from '../components/Header';
import Timer from '../components/Timer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/timer' component={Timer}/>
          <Route exact path='/calculator' component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
