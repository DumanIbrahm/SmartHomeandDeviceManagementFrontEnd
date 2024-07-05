import React, { useState, useEffect } from "react";
import { list3 } from "../../data/Data";
import { useHistory } from "react-router-dom";

const RecentCard = ({ roomId }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    deviceName: "",
    devicetype: "Door" // Default value for the select dropdown
  });
  const [existingDevices, setExistingDevices] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch(
          `https://softwarebackenddeployment2.azurewebsites.net/api/v1/Device/GetAllDevicesByRoomId?RoomId=${roomId}&PageNumber=1&PageSize=10`
        );
        const data = await response.json();
        if (data.succeeded) {
          setExistingDevices(data.data);
        } else {
          // Handle response error
        }
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    if (roomId) {
      fetchDevices();
    }
  }, [roomId]);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputValues.deviceName.trim() || !inputValues.devicetype.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    const deviceExists = existingDevices.some(
      (device) => device.type === inputValues.devicetype
    );
    if (deviceExists) {
      alert(`A device of type ${inputValues.devicetype} already exists in this room.`);
      return;
    }

    try {
      const response = await fetch(
        `https://softwarebackenddeployment2.azurewebsites.net/api/v1/Device/AddDevice?name=${inputValues.deviceName}&type=${inputValues.devicetype}&RoomId=${roomId}`,
        {
          method: "POST"
        }
      );
      if (response.ok) {
        console.log("Form submitted with values:", inputValues);
        closeForm();
        history.go(0); // Refresh the page by navigating to the same route
      } else {
        // Handle response error
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className='content grid3 mtop'>
        {list3.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <h1>{name}</h1>
                <div className='button flex'>
                  <div>
                    <button className='btn2' onClick={openForm}>
                      <i className='fas fa-plus'></i>
                    </button>
                  </div>
                  <span>{type}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isFormOpen && (
        <div className="overlay" onClick={closeForm}>
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <h2>Add A New Device</h2>
            <form onSubmit={handleSubmit}>
              <select
                name="devicetype"
                value={inputValues.devicetype}
                onChange={handleInputChange}
              >
                <option value="Door">Door</option>
                <option value="Lamp">Lamp</option>
              </select>
              <input
                type="text"
                name="deviceName"
                placeholder="Device Name"
                value={inputValues.deviceName}
                onChange={handleInputChange}
              />
              <button type="submit">Add A Device</button>
              <button type="button" onClick={closeForm} className="cancel">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RecentCard;
