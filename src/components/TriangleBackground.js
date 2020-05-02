import React from "react";

const TriangleBackground = (props) => {
  console.log(props.color);
  return (
    <div style={styles.container}>
      <div style={styles.triangle}></div>
      <div style={styles.triangle2}></div>
      <div> {props.children}</div>
    </div>
  );
};

let styles = {
  container: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    color: "white",
    justifyContent: "center",
  },
  triangle: {
    left: 0,
    position: "absolute",
    zIndex: 1000,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "400px 0 380px 473.2px",
    borderColor: "transparent transparent transparent #0088ff",
  },
  triangle2: {
    left: 0,
    position: "absolute",
    width: 0,
    height: 0,
    borderStyle: "solid",

    borderWidth: "400px 0 430px 500.2px",
    borderColor: "transparent transparent transparent #00d9ff",
    opacity: 0.7,
  },
};
export default TriangleBackground;
