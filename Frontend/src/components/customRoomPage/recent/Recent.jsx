import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";
import RoomRecent from "./RoomRecent";

const Recent = ({ homeId }) => {
  return (
    <>
      <section className='recent padding'>
        <div>
          <Heading title='Your Rooms' />
          <div className='container'>
            <RoomRecent homeId={homeId} />
          </div>
        </div>
      </section>

      <section className='recent padding'>
        <div>
          <Heading title='Do You Want To Add Room?' />
          <div className='container'>
            <RecentCard homeId={homeId} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Recent;
