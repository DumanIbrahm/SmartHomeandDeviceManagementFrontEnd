import React from "react";
import Heading from "../../common/Heading";
import RecentCard from "./RecentCard";
import "./recent.css";

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <Heading title="Your Houses" />
        <div className="container">
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Recent;
