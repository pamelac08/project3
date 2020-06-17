import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
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

          </Switch>
      </div>
    </Router>
  );
}

export default App;
