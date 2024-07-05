import React from "react";
import Recent from "./recent/Recent";
import Slideshow from "../common/Slideshow";
import { useLocation } from "react-router-dom";
import "./customRooms.css";

const customRoomImages = [
  process.env.PUBLIC_URL + "/images/list/p-1.png",
  process.env.PUBLIC_URL + "/images/list/p-2.png",
  process.env.PUBLIC_URL + "/images/list/p-4.png",
  process.env.PUBLIC_URL + "/images/list/p-5.png",
  process.env.PUBLIC_URL + "/images/list/p-6.png",
  process.env.PUBLIC_URL + "/images/list/p-7.png"
];

const CustomRooms = () => {
  const location = useLocation();
  const homeId = location.state?.homeId;
  return (
    <>
      <Slideshow images={customRoomImages} height="360px" /> {/* Yüksekliği ayarlayın */}
      <div className="separator"></div>
      <Recent homeId={homeId} />
    </>
  );
};

export default CustomRooms;
