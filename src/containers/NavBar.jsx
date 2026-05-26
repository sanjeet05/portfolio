import React, { Fragment, useState, useEffect } from "react";
import profileImage from "../assets/images/sanjeet_img.jpg";
import { trackEvent } from "../utils/tracking.utils";

const SECTIONS = [
  "about",
  "experience",
  "education",
  "skills",
  "interests",
  "awards",
];

const scrollTo = (href) => {
  document
    .querySelector(href)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const NavBar = (props) => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    let timer;
    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const scrollY = window.scrollY + 120;
        let current = "about";
        for (const id of SECTIONS) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollY) {
            current = id;
          }
        }
        setActiveSection(current);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a
          className="navbar-brand js-scroll-trigger"
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#about");
          }}
        >
          <span className="d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={profileImage}
              alt="Profile"
            />
          </span>
          <span className="d-lg-none">Sanjeet</span>

          {/* <span className="d-block d-lg-none">Sanjeet</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profileImage} alt="Profile" />
          </span> */}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={
            props.collapsed
              ? "collapse navbar-collapse"
              : "collapse  navbar-collapse hide"
          }
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            {[
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "education", label: "Education" },
              { id: "skills", label: "Skills" },
              { id: "interests", label: "Interests" },
              { id: "awards", label: "Awards" },
            ].map(({ id, label }) => (
              <li className="nav-item" key={id}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(id);
                    props.toggleNavbar();
                    scrollTo(`#${id}`);
                    trackEvent("nav_click", "navigation", id);
                  }}
                  className={`nav-link js-scroll-trigger${activeSection === id ? " active" : ""}`}
                  href={`#${id}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
