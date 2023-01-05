import './App.css';
import Navbar from './component/Navbar/navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/home/Home';
import Login from './component/Login/Login';
import About from './component/aboutus/About';
import Register from './component/Register/Register';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
