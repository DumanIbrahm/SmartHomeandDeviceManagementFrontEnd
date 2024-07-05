import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import DeviceRecent from "./DeviceRecent";
import RecentCard from "./RecentCard";
import Slideshow from "../../common/Slideshow"; // Adjust the path as needed

const images = [
  process.env.PUBLIC_URL + '/images/deviceslist/pexels-jakubzerdzicki-16859997.jpg',
  process.env.PUBLIC_URL + '/images/deviceslist/pexels-jakubzerdzicki-18186205.jpg',
  process.env.PUBLIC_URL + '/images/deviceslist/pexels-jakubzerdzicki-18186227.jpg',
  process.env.PUBLIC_URL + '/images/deviceslist/pexels-jakubzerdzicki-21284445.jpg',
];

const Recent = ({ roomId }) => {
  return (
    <>
      <section className="recent padding">
        <Slideshow images={images} height="360px" />
        <div>
          <div className="separator"></div>
          <Heading title="Your Devices" />
          <div className="container">
            <DeviceRecent roomId={roomId} />
          </div>
        </div>
      </section>

      <section className="recent padding">
        <div>
          <Heading title="Do You Want To Add Device?" />
          <div className="container">
            <RecentCard roomId={roomId} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Recent;
