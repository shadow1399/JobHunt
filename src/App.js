import { Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Homepage from './Homepage';
import About from './About';
import ApplyJobs from "./ApplyJobs";
import Contact from './Contact';
import PostJobs from "./PostJobs";


function App() {


  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/apply_jobs" component={ApplyJobs} />
        <Route exact path="/post_jobs" component={PostJobs} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>

  );
}

export default App;
