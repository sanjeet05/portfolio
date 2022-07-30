import React, { Fragment } from "react";
import moment from "moment";

const Education = props => {
  const { data } = props;
  return (
    <Fragment>
      <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="education"
      >
        <div className="my-auto">
          <h2>Education</h2>
          {data.map(edu => {
            return (
              <div
                className="resume-item d-flex flex-column flex-md-row mt-5"
                key={edu.id}
              >
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">{edu.college}</h3>
                  <div className="subheading mb-3 normal-text">
                    {edu.course}
                  </div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">
                    {`${moment(edu.start_date).format("MMM YYYY")}`} -{" "}
                    {`${moment(edu.end_date).format("MMM YYYY")}`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Education;
