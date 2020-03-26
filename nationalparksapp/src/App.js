import React, {useState} from 'react';
import Home from "./Components/Home"
import ParkInfo from "./Components/ParkInfo"
import {Switch, Route, Link, Redirect} from "react-router-dom"
import './App.css';

function App() {
  const [park, setPark] = useState({})
  const showInfo = (park) =>{
      setPark(park)
  }
  return (
    <div className="App">
      <nav>
        <Link to="/"><h1>National Parks List</h1></Link>
      </nav>
      <Switch>
        <Route exact path="/"  render={()=><Home showInfo={showInfo}/>}/>
        <Route path= "/park/:id"  render={()=><ParkInfo park={park}/>}/>
        <Redirect to="/"/>
      </Switch>
     <footer>
       &copy; Alyssa Jackson National Park
     </footer>
    </div>
  );
}

export default App;
