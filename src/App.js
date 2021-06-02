import React from 'react'
import './App.css';
import Welcome from './Welcome'
import Header1 from './Header1'
import Signup from './Signup'
import Signin from './Signin'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header1 />
        <Switch> 
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>  
    </Router>
    
  );
}

export default App;
