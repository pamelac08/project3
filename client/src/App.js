import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./pages/Login/Login";
import Signup from "./pages/Sign up/Signup";
import Admin from "./pages/Admin/Admin";
import Rewards from "./pages/Rewards/Rewards";
import Habits from "./pages/Habits/Habits"; 
import './App.css';
import NavBar from './components/Nav/NavBar';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
          <Switch>
            <Route exact path="/" component={LoginForm}/>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/rewards" component={Rewards}/>
            <Route exact path="/habits" component={Habits}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={LoginForm}/>

            
          </Switch>
      </div>
    </Router>
  );
}

export default App;
