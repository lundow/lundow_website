import React from "react";
import TriangleBackground from "./TriangleBackground";
import "../css/text.css";
import "../css/main.css";
import { ReactComponent as Icon } from "../icons/caret-down.svg";
import { ReactComponent as LinkedIn } from "../icons/linkedIn.svg";
import { ReactComponent as Github } from "../icons/github.svg";
import { ReactComponent as Instagram } from "../icons/instagram.svg";
import { Link } from "react-scroll";
import {Spring} from "react-spring/renderprops";

const Main = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Spring
        from={{opacity:0, marginTop:-500}}
        to={{opacity:1, marginTop:0}}
        config={{duration:800}}>
          {props => (

          <div style={props}>

        <div style={styles.textContainer}>
        <h1 className="mainH1"> Lundow</h1>
        <span className="mainSpanText"> Software Engineer</span>
        </div>
          </div>)}
        </Spring>
        

        <Spring
        from={{opacity:0}}
        to={{opacity:1}}
        config={{duration:1000}}>
          {props => (

          <div style={props}>
              <div className={"social_container"}>
                <div onClick={()=> window.open("https://www.linkedin.com/in/erik-lundow-24859a19a/", "_blank")}>
                  <LinkedIn className="social__icon"></LinkedIn>
                </div>
                <div onClick={()=> window.open("https://www.github.com/lundow", "_blank")}>
                  <Github className="social__icon"></Github>
                </div>
                <div onClick={()=> window.open("https://www.facebook.com/lundow", "_blank")}>
                  <Instagram className="social__icon"></Instagram>    
                </div>
              </div>
              </div>)}
              </Spring>
            </div>
      <Link className="icon__container" to="projects" smooth={true} duration={800}>
        <Icon className="home__icon" />
      </Link>
    </div>
  );
};

let styles = {
  container: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    color: "white",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  content: {
    display: "flex",
    height: "10%",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"space-between",
    flex:1/2,
  },
  textContainer:{
      display:"flex",
      flexDirection:"column",
      alignItems: "center",
      flex:1,
      justifyContent: "space-evenly",
  }
}
export default Main;