import React, { Fragment } from 'react';

const About = (props) => {
  const { data } = props;
  return (
    <Fragment>
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">
            {data.firstName} <span className="text-primary"> {data.lastName} </span>
          </h1>
          <div className="subheading mb-5 normal-text">
            {data.country} - {data.location} · <span style={{letterSpacing:'1.5px'}}>(+91) {data.mobileNo}</span>·
            <a href={'mailto:'+data.email}> {data.email} </a>
          </div>
          <div>
            <p>
              Work Experience : {data.workExp}
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
                href={data.linkedIn}
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
              <a href={data.gitHub} target="_blank" rel="noopener noreferrer" data-toggle="tooltip"  title="GitHub" >
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
