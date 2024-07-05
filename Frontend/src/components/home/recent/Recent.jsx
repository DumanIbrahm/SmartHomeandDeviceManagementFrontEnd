import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";
import HomeRecent from "./HomeRecent";

const Recent = ({ userId }) => {
  return (
    <>
      <section className='recent padding'>
        <div>
          <Heading title='Your Houses' />
          <div className='container'>
            <HomeRecent userId={userId} />
          </div>
        </div>
      </section>

      <section className='recent padding'>
        <div>
          <Heading title='Do You Want To Add Home?' />
          <div className='container'>
            <RecentCard userId={userId} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Recent;
