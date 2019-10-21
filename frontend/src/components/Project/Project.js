import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link } from 'react-router-dom';

export default function Project() {
      return (
            <Fragment>
                  <Route path='/project'> 
                  <header>
                        <div className="title">Chris's Portfolio</div>
                        <div className="project"><i className="fa fa-archive"></i><Link to='/'><span className="d-none d-sm-inline"> Home</span></Link></div>
                        <div className="github"><i className="fa fa-github"></i> <a href="https://github.com/chrisapotheke/"><span className="d-none d-sm-inline">GitHub</span></a></div>
                        <div className="linkedin"><i className="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/christopher-q/"><span className="d-none d-sm-inline">Linkedin</span></a></div>
                  </header>
                  <div className="container">
                        haha
                  </div>
                  </Route>
            </Fragment>
      )
}
