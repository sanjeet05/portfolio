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