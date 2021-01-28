import React, { Fragment } from "react";

const Interests = props => {
  return (
    <Fragment>
      <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="interests"
      >
        <div className="my-auto">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            I enjoy mountain biking, free climbing.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
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
