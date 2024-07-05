import React from "react";
import videoBg2 from "../../assets/videoBg2.mp4";
import "./main2.css";

const Main2 = () => {
  return (
    <div className="main2">
      <video src={videoBg2} autoPlay loop muted className="background-video" />
    </div>
  );
};

export default Main2;
