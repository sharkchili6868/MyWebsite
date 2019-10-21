import React, { Fragment } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Project from './components/Project/Project';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
      <header>
          <div className="title">Chris's Portfolio</div>
          <div className="project"><i className="fa fa-archive"></i> <span className="d-none d-sm-inline">Linkedin</span></div>
          <div className="github"><i className="fa fa-github"></i> <a href="https://github.com/chrisapotheke/"><span className="d-none d-sm-inline">GitHub</span></a></div>
          <div className="linkedin"><i className="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/christopher-q/"><span className="d-none d-sm-inline">Linkedin</span></a></div>
      </header>
      <div className="intro">
        <div className="about"><i className="fa fa-cube"></i> About</div>
        <p>Aloha Coder Ninjas! My name is Chris, a software ninja who enjoy programming and fulls-stack development. 
          I never introduce myself as a coder or programmer whatsoever, because I think software engineers should always have
          self-esteem for themselves, and I'm extremely proud of my profession. I believe software engineer has the power
          to reshape the world and change the way how people can interact with each other. 
          <br/>
          <br/>
          I love full-stack development so much because I embrace challenges instead of taking detours. I believe it is our choices
          to determine what kinds of people we truly are, far more than our abilities. I love JavaScript because without it there is no
          FaceBook, no Google, no WhatsApp, so on and so on. With JavaScript and its power libraries, I can almost build everything, literally, everything.
          For me, web development is more like an branch of art. I am finicky about my codes because I treat them as artistic masterpieces. Oh! Speaking of arts,
          I haven't tell you that my favorite musician is Beethoven. (Maybe search me on Youtube? I play Beethoven a lot LOL!) 
        </p>
        <div className="education"><i className="fa fa-graduation-cap"></i> Education</div>
        <div className="masters">
          <p><span className="school-name">New York University</span> <span className="time">Aug 2018 - May 2020</span>
          <br/>
          M.S. in Computer Engineering
          </p>
        </div>
        <div className="bachelors">
          <p><span className="school-name">University of Illinois, Urbana-Champaign</span> <span className="time">Aug 2014 - May 2018</span>
          <br/>
          B.S. in Materials Science and Engineering
          </p>
        </div>
        <div className="stacks"><i className="fa fa-wrench"></i> Stacks</div>
        <p><span className="skills">Languages</span>:  ES5/ES6, TypeScript, Python, Java</p>
        <p><span className="skills">Front-End</span>:  React, Angular, HTML5, CSS3, Bootstrap</p>
        <p><span className="skills">Back-End</span>:  Node, Express, GraphQL, Redux</p>
        <p><span className="skills">DB</span>:  MongoDB, Redis, MySQL, SQL</p>
        </div>
      </Fragment>
      <Route exact strict path='project' component={Project}/>
      
    </Router>
  );
}

export default App;
