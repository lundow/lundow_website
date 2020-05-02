import React from "react";
import "../css/text.css";
import "../css/projectItem.css";
const ProjectItem = (props) => {
  return (
    <div className="container"> 
        <div>
            <h2 id="title" style={{color:"black",textAlign:"center"}}>{props.title}</h2>
                <p id="tool"> React-Native, Node.js</p>
    <p id="description">{props.description}</p>
            </div>
    <div onClick={()=> window.open(props.link, "_blank")} className="button"> 
     <span>Read More</span>   
    </div>
    </div>
  );
};


export default ProjectItem;
