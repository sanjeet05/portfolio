import React, { Fragment } from 'react';

const About = (props) => {
  return (
    <Fragment>
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">
            Sanjeet <span className="text-primary"> Kumar </span>
          </h1>
          <div className="subheading mb-5 normal-text">India - Bangalore · (+91) 9445165233 ·
            <a href="mailto:kumarsanjeet1990@gmail.com"> isanjeet09@gmail.com </a>
          </div>
          <div>
            <p>
              Work Experience : 2+ year
            </p>
          </div>
          <p className="mb-5">To work in a dynamic environment with growth and potential where team spirit, hard work, dedication and sincerity are appreciated. To be an active, relevant, contributing, learning player of a growing team within an organization that defines its own place in global scenario.
          </p>
          <ul className="list-inline list-social-icons mb-0">
            {/* <!-- facebook --> */}
            {/* <!-- <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li> --> */}
            {/* <!-- twitter --> */}
            {/* <!-- <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li> --> */}
            {/* <!-- linkedin --> */}
            <li className="list-inline-item">
              <a
                href="https://in.linkedin.com/in/sanjeet-kumar-582386a4"
                target="_blank"
                rel="noopener noreferrer"
                data-toggle="tooltip"
                title="LinkedIn"
              >
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            {/* <!-- github --> */}
            <li className="list-inline-item">
              <a href="https://github.com/sanjeet05" target="_blank" rel="noopener noreferrer" data-toggle="tooltip"  title="GitHub" >
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  )
};

export default About;
