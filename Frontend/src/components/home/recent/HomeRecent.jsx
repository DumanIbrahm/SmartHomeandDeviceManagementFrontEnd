import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

const HomeRecent = () => {
  const location = useLocation();
  const history = useHistory();
  const userId = location.state?.userId;
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const images = [
    '/images/list/home1.png',
    '/images/list/home2.png',
    '/images/list/home3.png',
  ];


  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const response = await axios.get(
          `https://softwarebackenddeployment2.azurewebsites.net/api/v1/Home/GetAllHomesByOwnerId`, 
          {
            params: {
              PageNumber: 1,
              PageSize: 10,
              OwnerId: userId
            }
          }
        );
        setHomes(response.data.data); // Adjust according to the structure of your response data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching homes:', error);
        setLoading(false);
      }
    };

    if (userId) {
      fetchHomes();
    }
  }, [userId]);

  const handleHomeClick = (homeId) => {
    history.push({
      pathname: '/rooms',
      state: { homeId }
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className='content grid5 mtop'>
        {homes.length > 0 ? (
          homes.map((home, index) => (
            <div 
              className='box' 
              key={index} 
              onClick={() => handleHomeClick(home.id)} // Capture the home ID on click
              style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate clickable items
            >
              <h4>{home.name}</h4>
              <img src={images[index % images.length]} alt={home.name} />
              <label>{home.address}</label>
            </div>
          ))
        ) : (
          <p>No homes found.</p>
        )}
      </div>
    </>
  );
};

export default HomeRecent;
