import React, { Fragment } from 'react';
import moment from 'moment';

const Experience = (props) => {
  const data = props.data;
  return (
    <Fragment>
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{data.zylotech.role}</h3>
              <div className="subheading mb-3 normal-text">
                {/* Zylotech */}
                <a className="remove-underline" href={data.zylotech.url} target="_blank" rel="noopener noreferrer">{data.zylotech.name}</a>
              </div>
              <p>
                Working with NodeJS, ExpressJS, MongoDB, ReactJS, ES6, D3.JS, Webpack, NPM, Material-UI, Bootstrap, AdminLte, Html, CSS, Git to create customer AI platform products.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{`${moment(data.zylotech.start_date).format("MMM YYYY")}`} - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{data.mobillionlabs.role}</h3>
              <div className="subheading mb-3 normal-text">
                {/* MobillionLabs */}
                <a className="remove-underline" href={data.mobillionlabs.url} target="_blank" rel="noopener noreferrer">{data.mobillionlabs.name}</a>
              </div>
              <p>
                Worked on building for next generation product, hands on experience in end to end phase of software development life-cycle. Responsible for end-to-end product design and development of the base platform for mobile and web platform.
                <br /> <br />
                Stack Used: Mean Stack Framework (NodeJS, ExpressJS, AngularJS, MongoDB), Redis, D3.JS, REST, NPM, Bower, Gulp, Bootstrap, AdminLte, BlurAdmin, Ionic Framework, Cordova, SqLite, Android SDK, Html, CSS, Git.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
              {`${moment(data.mobillionlabs.start_date).format("MMM YYYY")}`} - {`${moment(data.mobillionlabs.end_date).format("MMM YYYY")}`}
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{data.sense_infinity.role}</h3>
              <div className="subheading mb-3 normal-text">
                {/* Sense Infinity Technology  */}
                <a className="remove-underline" href={data.sense_infinity.url} target="_blank" rel="noopener noreferrer">{data.sense_infinity.name}</a>
              </div>
              <p>
                Worked on building a cool product, which is an e-commerce engine for a vertical space.
                as a part of the core team to architect and develop the web platform for all business and operational needs of the startup.
                <br /> <br />
                Stack Used: Laravel Framework(PHP), MySql, AngularJS, Bootstrap, Html, CSS, Git.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
              {`${moment(data.sense_infinity.start_date).format("MMM YYYY")}`} - {`${moment(data.sense_infinity.end_date).format("MMM YYYY")}`}
              </span>
            </div>
          </div>

        </div>

      </section>

    </Fragment>
  )
};

export default Experience;