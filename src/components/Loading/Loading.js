import React from "react";
import "./Loading.css";
import logo from "./lpc_animated.svg";
function Loading() {
  return (
    <div className="loading">
      <img src={logo} alt="lpc logo" /> <p>Data Loading</p>
    </div>
  );
}

export default Loading;
