import React, { Fragment } from "react";
import moment from "moment";

import qrImage from "../assets/images/sanjeet_qrcode.png";

const About = props => {
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
                ·<a href={"mailto:" + data.email}> {data.email} </a>
              </div>
            </div>
            <div className="col-md-2 col-sm-12 qr_image">
              <img className="img-fluid mx-auto" src={qrImage} alt="QR Code" />
            </div>
          </div>

          <div>
            <p>
              Work Experience : {`${moment().diff(data.workStarted, "years")}`}+
              years
            </p>
          </div>
          <p className="mb-5">
            To work in a dynamic environment with growth and potential where
            team spirit, hard work, dedication and sincerity are appreciated. To
            be an active, relevant, contributing, learning player of a growing
            team within an organization that defines its own place in global
            scenario.
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
                data-toggle="tooltip"
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
                data-toggle="tooltip"
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
                data-toggle="tooltip"
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
