import React from "react";
import Recent from "./recent/Recent";
import imgdeneme from "../images/room.png";
import Back from "../common/Back";

const CustomRooms = () => {
  return (
    <>
      <Back name='' title='Make Your Rooms Smart' cover={imgdeneme} imageClass="cover-image" />
      <div className="separator"></div>
      <Recent />
    </>
  );
};

export default CustomRooms;
