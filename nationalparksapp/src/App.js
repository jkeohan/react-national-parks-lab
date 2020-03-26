import React from 'react';
import './App.css';
import json from "./parks.json"
import Home from "./Components/Home"
import {Route, Switch, Link, Redirect} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <nav>
       <Link to="/">National Parks</Link>
    </nav>
    <Switch>
      <Route exact path="/" component ={Home} />
      </Switch>
      
   
    
    <footer>
      &copy; Alyssa Jackson National Park App
    </footer>
    </div>
  );
}

export default App;
