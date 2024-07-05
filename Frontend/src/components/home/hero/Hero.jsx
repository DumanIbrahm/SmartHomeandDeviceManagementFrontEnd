import React from "react";
import Heading from "../../common/Heading";
import Slideshow from "../../common/Slideshow";
import "./hero.css";

const backgroundImages = [
  process.env.PUBLIC_URL + "/images/list/home1.png",
  process.env.PUBLIC_URL + "/images/list/home2.png",
  process.env.PUBLIC_URL + "/images/list/home3.png",
];

const Hero = () => {
  return (
    <section className='hero'>
      <Slideshow images={backgroundImages} height="90vh" /> {/* Yüksekliği ayarlayın */}
      <div className='container'>
        <Heading title='Make Your Home Smart' subtitle='Smart homes equipped with the latest technology' />
      </div>
    </section>
  );
};

export default Hero;
