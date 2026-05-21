import React, { Fragment } from "react";

const programmingSkills = [
  { name: "Python", icon: "devicon-python-plain" },
  { name: "NodeJS", icon: "devicon-nodejs-plain" },
  { name: "ExpressJS", icon: "devicon-express-original" },
  { name: "NestJS", icon: "devicon-nestjs-original" },
  { name: "ReactJS", icon: "devicon-react-original" },
  { name: "NextJS", icon: "devicon-nextjs-plain" },
  { name: "Gatsby", icon: "devicon-gatsby-original" },
  { name: "GraphQL", icon: "devicon-graphql-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "MySQL", icon: "devicon-mysql-original" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "DynamoDB", icon: "devicon-dynamodb-plain" },
  { name: "Redis", icon: "devicon-redis-plain" },
  { name: "AngularJS", icon: "devicon-angularjs-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "NGINX", icon: "devicon-nginx-original" },
  { name: "HTML5", icon: "devicon-html5-plain" },
  { name: "CSS3", icon: "devicon-css3-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "BootStrap", icon: "devicon-bootstrap-plain" },
  { name: "NPM", icon: "devicon-npm-original-wordmark" },
  { name: "Flask", icon: "devicon-flask-original" },
  { name: "Playwright", icon: "devicon-playwright-plain" },
];

const cloudSkills = [
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
  { name: "Linux", icon: "devicon-linux-plain" },
  { name: "Docker", icon: "devicon-docker-plain" },
];

const Skills = (props) => {
  return (
    <Fragment>
      <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="skills"
      >
        <div className="my-auto">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline list-icons list-icons-programming">
            {programmingSkills.map((skill) => (
              <li
                key={skill.name}
                className="list-inline-item"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={skill.name}
              >
                <i className={`${skill.icon} skill_icon`}></i>
                <span className="skill_name">{skill.name}</span>
              </li>
            ))}
          </ul>

          <div className="subheading mb-3">Containers &amp; Cloud</div>
          <ul className="list-inline list-icons list-icons-cloud">
            {cloudSkills.map((skill) => (
              <li
                key={skill.name}
                className="list-inline-item"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={skill.name}
              >
                <i className={`${skill.icon} skill_icon`}></i>
                <span className="skill_name">{skill.name}</span>
              </li>
            ))}
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li className="mb-2">
              <i className="fa-li fa fa-check"></i>
              Microservices &amp; Distributed System Design
            </li>
            <li className="mb-2">
              <i className="fa-li fa fa-check"></i>
              API Design — RESTful Services &amp; Event-Driven Architecture
            </li>
            <li className="mb-2">
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive &amp; Component-Driven UI Development
            </li>
            <li className="mb-2">
              <i className="fa-li fa fa-check"></i>
              CI/CD Pipelines, Docker &amp; Cloud Deployments on AWS
            </li>
            <li className="mb-2">
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Performance Debugging
            </li>
            <li className="mb-2">
              <i className="fa-li fa fa-check"></i>
              Agile Development, Scrum &amp; Cross-Functional Team Collaboration
            </li>
            <li className="mb-2">
              <i className="fa-li fa fa-check"></i>
              Code Reviews, Technical Mentorship &amp; Engineering Best
              Practices
            </li>
          </ul>

          <div className="margin-top20">
            <div className="subheading mb-3">AI-Powered Development</div>
            <ul className="fa-ul mb-0">
              <li className="mb-2">
                <i className="fa-li fa fa-check"></i>
                GitHub Copilot — AI-assisted code completion, refactoring, and
                test generation
              </li>
              <li className="mb-2">
                <i className="fa-li fa fa-check"></i>
                Claude &amp; ChatGPT — used for architectural reasoning, code
                reviews, and problem-solving
              </li>
              <li className="mb-2">
                <i className="fa-li fa fa-check"></i>
                Prompt engineering for generating boilerplate, documentation,
                and debugging assistance
              </li>
              <li className="mb-2">
                <i className="fa-li fa fa-check"></i>
                Integrating AI APIs and LLM-powered features into production
                applications
              </li>
            </ul>
          </div>

          <div className="margin-top20">
            <div className="subheading mb-3">Languages</div>
            <p>English, Hindi</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Skills;
