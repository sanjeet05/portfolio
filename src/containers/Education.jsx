import React, { Fragment } from 'react';
import moment from 'moment';

const Education = (props) => {
  const data = props.data;
  return (
    <Fragment>
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{data.master.college}</h3>
              <div className="subheading mb-3 normal-text">{data.master.course}</div>
              {/* <!-- <div>Computer Science - Web Development Track</div> --> */}
              {/* <!-- <p>CGPA: 9.2</p> --> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">              
              {`${moment(data.master.start_date).format("MMM YYYY")}`} - {`${moment(data.master.end_date).format("MMM YYYY")}`}
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{data.graduation.college}</h3>
              <div className="subheading mb-3 normal-text">{data.graduation.course}</div>
              {/* <!-- <p>Per: 69%</p> --> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
              {/* July 2008 - Sept 2012 */}
              {`${moment(data.graduation.start_date).format("MMM YYYY")}`} - {`${moment(data.graduation.end_date).format("MMM YYYY")}`}
              </span>
            </div>
          </div>

        </div>
      </section>
    </Fragment>
  )
};

export default Education;