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
              <i className="devicons devicons-python skill_icon"></i>
              <span className="skill_name">Python</span>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="NodeJS">
              <i className="devicons devicons-nodejs_small skill_icon"></i>
              <span className="skill_name">NodeJS</span>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="ReactJS">
              <i className="devicons devicons-react skill_icon"></i>
              <span className="skill_name">ReactJS</span>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="MongoDB">
              <i className="devicons devicons-mongodb skill_icon"></i>
              <span className="skill_name">MongoDB</span>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="AngularJS">
              <i className="devicons devicons-angular skill_icon"></i>
              <span className="skill_name">AngularJS</span>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="GIT">
              <i className="devicons devicons-git skill_icon"></i>
              <span className="skill_name">Git</span>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="NGINX">
              <i className="devicons devicons-nginx skill_icon"></i>
              <span className="skill_name">NGINX</span>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="HTML5">
              <i className="devicons devicons-html5 skill_icon"></i>
              <span className="skill_name">HTML5</span>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="CSS3">
              <i className="devicons devicons-css3 skill_icon"></i>
              <span className="skill_name">CSS3</span>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Javascript">
              <i className="devicons devicons-javascript skill_icon"></i>
              <span className="skill_name">JavaScript</span>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="SASS">
              <i className="devicons devicons-sass skill_icon"></i>
              <span className="skill_name">SASS</span>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Bootstrap">
              <i className="devicons devicons-bootstrap skill_icon"></i>
              <span className="skill_name">BootStrap</span>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="NPM">
              <i className="devicons devicons-npm skill_icon"></i>
              <span className="skill_name">NPM</span>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Bower">
              <i className="devicons devicons-bower skill_icon"></i>
              <span className="skill_name">Bower</span>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Grunt">
              <i className="devicons devicons-grunt skill_icon"></i>
              <span className="skill_name">Grunt</span>
            </li>
            <li className="list-inline-item" data-toggle="tooltip" data-placement="top" title="Gulp">
              <i className="devicons devicons-gulp skill_icon"></i>
              <span className="skill_name">Gulp</span>
            </li>

          </ul>

          <div className="subheading mb-3">Containers & Cloud</div>
          <ul className="list-inline list-icons">
            <li class="list-inline-item" data-toggle="tooltip" data-placement="top" title="AWS">
              <i class="devicons devicons-aws skill_icon"></i>
              <span className="skill_name">AWS</span>
            </li>
            <li class="list-inline-item" data-toggle="tooltip" data-placement="top" title="Linux">
              <i class="devicons devicons-linux skill_icon"></i>
              <span className="skill_name">Linux</span>
            </li>
            <li class="list-inline-item" data-toggle="tooltip" data-placement="top" title="Docker">
              <i class="devicons devicons-docker skill_icon"></i>
              <span className="skill_name">Docker</span>
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
