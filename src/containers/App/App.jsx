import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/footer';
import Home from '../../containers/Home/Home';
import Workouts from '../../containers/Workouts/Workouts';
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/workouts" component={Workouts} />
        </Switch>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
