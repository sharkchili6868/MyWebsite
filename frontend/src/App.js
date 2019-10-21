import React, { Fragment } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Project from './components/Project/Project';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  return (
    <Router>
      <Route path="/" exact>
      <Fragment>
        <DashBoard />
      </Fragment>
      </Route>
      <Route path='/project' exact>
        <Project />
      </Route>
    </Router>
  );
}

export default App;
