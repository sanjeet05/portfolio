import React, { Fragment } from "react";
import { yearsSince } from "../utils/dateFormat.utils";

import qrImage from "../assets/images/sanjeet_qrcode.png";

const About = (props) => {
  const { data } = props;
  const mobileNumber = "+91" + data.mobileNo;
  return (
    <Fragment>
      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <div className="row">
            <div className="col-md-10 col-sm-12">
              <h1 className="mb-0">
                {data.firstName}{" "}
                <span className="text-primary"> {data.lastName} </span>
              </h1>
              <div className="subheading mb-5 normal-text">
                {data.country} - {data.location} ·{" "}
                <a className="mobile_number" href={"tel:" + mobileNumber}>
                  (+91) {data.mobileNo}
                </a>
                ·<a className="remove-underline" href={"mailto:" + data.email}> {data.email} </a>
              </div>
            </div>
            <div className="col-md-2 col-sm-12 qr_image">
              <img className="img-fluid mx-auto" src={qrImage} alt="QR Code" />
            </div>
          </div>

          <div>
            <p>Work Experience : {yearsSince(data.workStarted)}+ years</p>
          </div>
          {/* summary */}
          <p className="mb-5">
            A seasoned Senior Full Stack Engineer specializing in building and
            scaling high-performance platforms across fintech and healthtech
            domains. Deep expertise in system design, microservices architecture,
            and cloud-native deployments on AWS. Skilled across the full stack —
            from backend services in NodeJS and NestJS to modern ReactJS
            frontends. A hands-on technical lead who has mentored engineers,
            shaped architecture decisions, and consistently delivered reliable,
            production-grade systems in fast-paced environments.
          </p>
          <ul className="list-inline list-social-icons mb-0">
            {/* <!-- facebook --> */}
            {/* <!-- <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li> --> */}
            {/* <!-- twitter --> */}
            {/* <!-- <li className="list-inline-item">
              <a href="#">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li> --> */}
            {/* <!-- linkedin --> */}
            <li className="list-inline-item">
              <a
                href={data.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                data-bs-toggle="tooltip"
                title="LinkedIn"
              >
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            {/* <!-- github --> */}
            <li className="list-inline-item">
              <a
                href={data.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                data-bs-toggle="tooltip"
                title="GitHub"
              >
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href={data.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-bs-toggle="tooltip"
                title="Whatsapp"
              >
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-whatsapp fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
