import React from "react";
import "../css/text.css";
import "../css/main.css";
import { ReactComponent as ReactIcon } from "../icons/react.svg";
const About = (props) => {
  return (
    <div style={styles.container} id="about">
      <div style={styles.content}>
        <p> made by erik lundow - © 2020
        contact: <a href="mailto:eriklundow@gmail.com">eriklundow@gmail.com</a></p>    
      </div>
    </div>
  );
};

let styles = {
  container: {
    backgroundColor: "#282c34",
    height: "15vh",
    display: "flex",
    color: "white",
    flexDirection: "column",
    justifyContent: "center",
    
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    width:"18rem",
    flexDirection: "column",
    alignItems: "center",
    alignSelf:"center",
  },
};
export default About;
