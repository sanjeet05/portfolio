import React, { Component, Fragment } from 'react';
import './App.scss';

import NavBar from './containers/NavBar';
import About from './containers/About';
import Experience from './containers/Experience';
import Education from './containers/Education';
import Skills from './containers/Skills';
import Interests from './containers/Interests';
import Awards from './containers/Awards';

import AppData from './constants/AppData';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
      data: AppData,
    }
  }

  componentDidMount() {
    //  smooth scrolling
    document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let hashval = anchor.getAttribute('href');
        document.querySelector(hashval).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  }

  toggleNavbar = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    const {collapsed, data} = this.state;
    return (
      <Fragment>
        <NavBar toggleNavbar={this.toggleNavbar} collapsed={collapsed}/>

        <div className="container-fluid p-0">
          <About data={data.about} />
          <Experience data={data.experience} />
          <Education data={data.education} />
          <Skills />
          <Interests />
          <Awards />
        </div>
      </Fragment>
    )
  }
};

export default App;
