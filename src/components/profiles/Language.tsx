import * as React from "react";
import {JavaScriptImage, PythonImage, TypeScriptImage} from "../images/languages";

const JavaScript = () => {
  return (<div style={{
    border: "1px solid gainsboro",
    borderRadius: "8px",
    backgroundColor: "#f4de50",
    width: "56px",
    padding: "4px",
    margin: "4px"
  }}>
    <JavaScriptImage />
  </div>)
}

const TypeScript = () => {
  return (<div style={{
    border: "1px solid gainsboro",
    borderRadius: "8px",
    backgroundColor: "#4178ba",
    width: "56px",
    padding: "4px",
    margin: "4px"
  }}>
    <TypeScriptImage />
  </div>)
}

const Python = () => {
  return (<div style={{
    border: "1px solid gainsboro",
    borderRadius: "8px",
    backgroundColor: "white",
    width: "56px",
    padding: "8px",
    margin: "4px"
  }}>
    <PythonImage />
  </div>)
}

export {JavaScript, TypeScript, Python}