import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

const RoomRecent = ({ homeId }) => {
  const location = useLocation();
  const history = useHistory();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const response = await axios.get(
          `https://softwarebackenddeployment2.azurewebsites.net/api/v1/Room/GetAllRoomsByHomeId?PageNumber=1&PageSize=10&HomeId
          `,
          {
            params: {
              PageNumber: 1,
              PageSize: 10,
              HomeId: homeId
            }
          }

        );
        setRooms(response.data.data); // Adjust according to the structure of your response data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching homes:', error);
        setLoading(false);
      }
    };

    if (homeId) {
      fetchHomes();
    }
  }, [homeId]);

  const handleHomeClick = (roomId) => {
    history.push({
      pathname: '/devices',
      state: { roomId }
    });
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className='content grid5 mtop'>
        {rooms.length > 0 ? (
          rooms.map((room, index) => (
            <div
              className='box'
              key={index}
              onClick={() => handleHomeClick(room.id)} // Capture the home ID on click
              style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate clickable items
            >
              <h4>{room.name}</h4>
              <img src={"../images/bosoda.jpg"} alt={room.name} />
            </div>
          ))
        ) : (
          <p>No rooms found.</p>
        )}
      </div>
    </>
  );
};

export default RoomRecent;