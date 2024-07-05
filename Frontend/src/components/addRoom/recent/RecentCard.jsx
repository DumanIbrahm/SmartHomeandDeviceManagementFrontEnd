import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecentCard = () => {
  const featuredCustomHome = [
    {
      cover: "../images/hero/h1.png",
      name: "Kitchen",
      total: "smellest one",
    },
    {
      cover: "../images/hero/h2.png",
      name: "Living Room",
      total: "most beautiful room",
    },
    {
      cover: "../images/hero/h3.png",
      name: "Study Room",
      total: "hard coders room",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='content grid5 mtop'>
        {featuredCustomHome.map((items, index) => (
          <Link to="/devices" key={index} className='box'>
            <img src={items.cover} alt={items.name} />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RecentCard;
