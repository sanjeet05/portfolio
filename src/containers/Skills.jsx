import React, { Fragment } from 'react';

const Skills = (props) => {
  return (
    <Fragment>
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div className="my-auto">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline list-icons">
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="NodeJS">
              <i className="devicons devicons-nodejs_small"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="ReactJS">
              <i className="devicons devicons-react"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="MongoDB">
              <i className="devicons devicons-mongodb"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="AngularJS">
              <i className="devicons devicons-angular"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="GIT">
              <i className="devicons devicons-git"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="HTML5">
              <i className="devicons devicons-html5"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="CSS3">
              <i className="devicons devicons-css3"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Javascript">
              <i className="devicons devicons-javascript"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="SASS">
              <i className="devicons devicons-sass"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Bootstrap">
              <i className="devicons devicons-bootstrap"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="NPM">
              <i className="devicons devicons-npm"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Bower">
              <i className="devicons devicons-bower"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Grunt">
              <i className="devicons devicons-grunt"></i>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Gulp">
              <i className="devicons devicons-gulp"></i>
            </li>

          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum</li>
          </ul>
          <div className="margin-top20">
            <div className="subheading mb-3">Languages</div>
            <p>English, Basic French, Hindi</p>
          </div>
        </div>
      </section>
    </Fragment>
  )
};

export default Skills;