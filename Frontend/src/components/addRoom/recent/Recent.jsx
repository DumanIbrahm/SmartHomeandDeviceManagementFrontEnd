import React from "react";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className="font">
          <div className="heading-container">
            <h2>Your Rooms</h2>
          </div>
          <div className='container'>
            <RecentCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Recent;
