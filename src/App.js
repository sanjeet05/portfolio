import { useState } from "react";
import "./App.css";

import NavBar from "./containers/NavBar";
import About from "./containers/About";
import Experience from "./containers/Experience";
import Education from "./containers/Education";
import Skills from "./containers/Skills";
import Interests from "./containers/Interests";
import Awards from "./containers/Awards";

import AppData from "./constants/AppData";

export default function App() {
  const [collapsed, setCollapsed] = useState(true);
  const data = AppData;

  return (
    <div className="home_container">
      <div className="home_container_item_1">
        <NavBar
          toggleNavbar={() => setCollapsed((c) => !c)}
          collapsed={collapsed}
        />
      </div>
      <div className="container-fluid p-0 home_container_item_2">
        <About data={data.about} />
        <Experience data={data.experience} />
        <Education data={data.education} />
        <Skills />
        <Interests />
        <Awards />
      </div>
    </div>
  );
}
