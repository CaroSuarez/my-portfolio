import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/aboutMe" component= {aboutMe}/>
          <Route path="/projects" component = {projects} />
          <Route path="/contact" component = {contact} />
          <Route path="/" component = {home} />
          <Route component={NotFound} />
        </Switch>
    </Router>
   
  );
}

export default App;