import React, { Fragment } from 'react';

const Awards = (props) => {
  return (
    <Fragment>
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div className="my-auto">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              MongoDB for Python Developers - MongoDB University, Mar 2019
              <a className="ml-2" href="https://university.mongodb.com/course_completion/547bac8d-5b02-4732-9a66-c55ddcfb/printable" target="_blank" rel='noopener noreferrer'>
                <i className="fa fa-eye"></i>
              </a>
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Merit Certificate - Internshala, June 2016
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Hack-X-Ploit - Lucideus, October 2015
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              IWADD-14 (International Workshop on Android Application Development) - JP Infotech, January 2014
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  )
};

export default Awards;
