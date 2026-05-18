import React, { Fragment } from "react";

const Interests = (props) => {
  return (
    <Fragment>
      <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="interests"
      >
        <div className="my-auto">
          <h2 className="mb-5">Interests</h2>
          <p>
            Outside of engineering, I enjoy spending time outdoors — whether
            it's trekking through trails, cycling around the city, or simply
            exploring new places. I find that stepping away from the screen
            helps me think more clearly and come back to problems with fresh
            perspective.
          </p>
          <p className="mb-0">
            When indoors, I enjoy watching sci-fi and thriller movies and series,
            and I follow technology closely — reading about system design,
            distributed systems, and emerging trends in web and cloud
            engineering. I also like tinkering with side projects and browser
            extensions that solve small but real everyday problems.
          </p>

          <div className="mt-5">
            <div className="subheading mb-3">Open Source Tools</div>

            <div>
              <strong>Crypto - Price Ticker</strong> - Firefox Add-on
              <a
                className="ml-2"
                href="https://addons.mozilla.org/en-US/firefox/addon/crypto-price-ticker/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-eye"></i>
              </a>
            </div>

            <div className="mt-2">
              <strong>Loremi</strong> - Firefox Add-on
              <a
                className="ml-2"
                href="https://addons.mozilla.org/en-US/firefox/addon/loremi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-eye"></i>
              </a>
            </div>

            <div className="mt-2">
              <strong>Loremi</strong> - Chrome Add-on
              <a
                className="ml-2"
                href="https://chrome.google.com/webstore/detail/loremi/kblmadlmninloejlicjemplgngfpbofk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-eye"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Interests;
