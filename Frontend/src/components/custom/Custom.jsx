import React from "react";
import Recent from "./recent/Recent";
import Slideshow from "../common/Slideshow"; // Slideshow bileşenini ekleyin

const customImages = [
  process.env.PUBLIC_URL + "/images/list/home1.png",
  process.env.PUBLIC_URL + "/images/list/home2.png",
  process.env.PUBLIC_URL + "/images/list/home3.png",
];

const Custom = () => {
  return (
    <>
      <Slideshow images={customImages} /> {/* Slideshow bileşenine yeni resim setini ekleyin */}
      <div className="separator" style={{ backgroundColor: '#eee' }}></div>
      <Recent />
    </>
  );
};

export default Custom;
