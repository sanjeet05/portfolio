import React, { Fragment } from "react";
import moment from "moment";
import DateCalc from "../components/DateCalc";

const Experience = props => {
  const data = props.data;
  return (
    <Fragment>
      <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="experience"
      >
        <div className="my-auto">
          <h2>Experience</h2>
          {data.map(exp => {
            return (
              <div
                className="resume-item d-flex flex-column flex-md-row mt-5"
                key={exp.id}
              >
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">{exp.role}</h3>
                  <div className="subheading mb-3 normal-text">
                    {exp.url ? (
                      <a
                        className="remove-underline"
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.name}
                      </a>
                    ) : (
                      <a
                        className="remove-underline"
                        href="#/"
                        onClick={e => {
                          e.preventDefault();
                        }}
                        rel="noopener noreferrer"
                      >
                        {exp.name}
                      </a>
                    )}
                  </div>
                  <p>{exp.line_1}</p>
                  {exp.line_2 && <p>{exp.line_2}</p>}
                  <div>
                    <ul className="tags">
                      {exp.tags.map(tag => {
                        return <li className="tag">{tag}</li>;
                      })}
                    </ul>
                  </div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">
                    {`${moment(exp.start_date).format("MMM YYYY")}`} -{" "}
                    {exp.is_present
                      ? "Present"
                      : `${moment(exp.end_date).format("MMM YYYY")}`}
                  </span>
                  <div className="text-muted exp_date">{`${DateCalc(
                    exp.start_date,
                    exp.end_date
                  )}`}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Experience;
