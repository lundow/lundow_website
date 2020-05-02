import React from "react";
import "../css/text.css";
import CV from "../icons/CV_2020.png";
const About = (props) => {
  return (
    <div style={styles.container} id="about">
      <div style={styles.content}>

        <span className="aboutSpanText">RESUME</span>

        <img src={CV} style={styles.resume}></img>
      </div>
    </div>
  );
};

let styles = {
  container: {
    backgroundColor: "#F9B5AC",
    minHeight: "100vh",
    display: "flex",
    color: "white",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom:"5%",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center"
  },
  resume:{
    alignSelf:"center",
    maxWidth:"50vw",
    minWidth:"60vh"
  }
};
export default About;
