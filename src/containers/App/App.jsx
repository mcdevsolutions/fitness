import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/footer';
import Home from '../../containers/Home/Home';
import Workouts from '../../containers/Workouts/Workouts';
import Nav from '../../components/navigation/mainNavigation';
import Users from '../../containers/Users/Users';
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/workouts" component={Workouts} />
          <Route path="/users" component={Users} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
