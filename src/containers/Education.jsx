import React, { Fragment } from "react";
import { formatMonthYear } from "../utils/dateFormat.utils";

const Education = (props) => {
  const { data } = props;
  return (
    <Fragment>
      <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="education"
      >
        <div className="my-auto">
          <h2>Education</h2>
          {data.map((edu) => {
            return (
              <div
                className="resume-item d-flex flex-column flex-md-row mt-5"
                key={edu.id}
              >
                <div className="resume-content me-auto">
                  <h3 className="mb-0">{edu.college}</h3>
                  <div className="subheading normal-text">
                    {edu.course}
                  </div>
                  <div className="d-md-none mb-3">
                    <span className="text-primary">
                      {formatMonthYear(edu.start_date)} -{" "}
                      {formatMonthYear(edu.end_date)}
                    </span>
                  </div>
                </div>
                <div className="resume-date text-md-end d-none d-md-block">
                  <span className="text-primary">
                    {formatMonthYear(edu.start_date)} -{" "}
                    {formatMonthYear(edu.end_date)}
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
