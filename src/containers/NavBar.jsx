import React, { Fragment } from 'react';

import profileImage from '../assets/images/sanjeet_img.jpg';

const NavBar = (props) => {  
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Sanjeet</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profileImage} alt="Profile" />
          </span>
        </a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={props.collapsed ? 'collapse navbar-collapse' : 'collapse  navbar-collapse hide'} id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a onClick={props.toggleNavbar} className="nav-link js-scroll-trigger active" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a onClick={props.toggleNavbar} className="nav-link js-scroll-trigger" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a onClick={props.toggleNavbar} className="nav-link js-scroll-trigger" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a onClick={props.toggleNavbar} className="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a onClick={props.toggleNavbar} className="nav-link js-scroll-trigger" href="#interests">Interests</a>
            </li>
            <li className="nav-item">
              <a onClick={props.toggleNavbar} className="nav-link js-scroll-trigger" href="#awards">Awards</a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
};

export default NavBar;