import React, { Fragment } from 'react';

const Education = (props) => {
  return (
    <Fragment>
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Pondicherry University</h3>
              <div className="subheading mb-3 normal-text">Master of Computer Application</div>
              {/* <!-- <div>Computer Science - Web Development Track</div> --> */}
              {/* <!-- <p>CGPA: 9.2</p> --> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2013 - May 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Kuvempu University</h3>
              <div className="subheading mb-3 normal-text">Bachelor of Science</div>
              {/* <!-- <p>Per: 69%</p> --> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2008 - September 2012</span>
            </div>
          </div>

        </div>
      </section>
    </Fragment>
  )
};

export default Education;