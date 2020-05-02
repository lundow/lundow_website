import React from "react";
import "../css/text.css";
import "../css/projects.css";
import "../css/main.css"; 
import ProjectItem from './ProjectItem.js';
import { ReactComponent as Icon } from "../icons/caret-down.svg";
import { Link } from "react-scroll";

const Projects = (props) => {
  return (

    <div className="project-container" id="projects">
      <div className="project-content">
      <h1 className="mainH1"> PROJECTS</h1>

    <div className="item-container">
      <ProjectItem link={"https://github.com/rutti-se/rutti"} title={"RUTTI"} description={"A grocery cross-shopping application, developed for Android and iOS"}/>
      <ProjectItem link={"https://github.com/navigera/navigera"}title={"NAVIGERA"} description={"A proof of concept application developed as an examinating project at IKEA"}/>
    </div>

      </div>

      <Link className="icon__container" to="about" smooth={true} duration={800}>
        <Icon className="home__icon" id="projectsIcon" />
      </Link>
    </div>
  );
};

export default Projects;
