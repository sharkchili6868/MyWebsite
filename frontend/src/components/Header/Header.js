import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
            <header>
                <div className="title">Chris's Portfolio</div>
                <div className="project"><i className="fa fa-archive"/><Link to={props.direction}><span className="d-none d-sm-inline"> {props.name}</span></Link></div>
                <div className="github"><i className="fa fa-github"/> <a href="https://github.com/chrisapotheke/"><span className="d-none d-sm-inline">GitHub</span></a></div>
                <div className="linkedin"><i className="fa fa-linkedin"/> <a href="https://www.linkedin.com/in/christopher-q/"><span className="d-none d-sm-inline">Linkedin</span></a></div>
            </header>
    )
}