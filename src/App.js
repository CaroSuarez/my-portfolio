import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from './scenes/aboutMe/AboutMe'
import Contact from './scenes/contact/Contact'
import Home from './scenes/home/Home'
import Projects from './scenes/projects/Project'


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/aboutMe" component= {AboutMe}/>
          <Route path="/projects" component = {Projects} />
          <Route path="/contact" component = {Contact} />
          <Route path="/" component = {Home} />
          {/* <Route component={NotFound} /> */}
        </Switch>
    </Router>
   
  );
}

export default App;