import React from 'react';
import { Link } from 'react-router-dom';
import "./recent.css"; // CSS dosyasını ekleyin

const RecentCard = () => {
  const featuredCustomHome = [
    {
      cover: process.env.PUBLIC_URL + "/images/list/home1.png",
      name: "Summer House",
      total: "Antalya/Kaş",
    },
    {
      cover: process.env.PUBLIC_URL + "/images/list/home2.png",
      name: "Home",
      total: "İstanbul/Maltepe",
    },
    {
      cover: process.env.PUBLIC_URL + "/images/list/home3.png",
      name: "Office",
      total: "İstanbul/Maslak",
    },
  ];

  return (
    <>
      <div className="content grid5 mtop">
        {featuredCustomHome.map((items, index) => (
          <Link to="/rooms" key={index}>
            <div className="box shadow">
              <img src={items.cover} alt={items.name} />
              <h4>{items.name}</h4>
              <label>{items.total}</label>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RecentCard;
