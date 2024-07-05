import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeviceRecent = () => {
  const location = useLocation();
  const history = useHistory();
  const roomId = location.state?.roomId;
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  const deviceImages = {
    Door: {
      open: '/images/opendoor.jpg',
      close: '/images/closedoor.jpg',
    },
    Lamp: {
      on: '/images/openbulb.jpg',
      off: '/images/closebulb.jpg',
    },
    // Add more mappings if needed
  };

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get(
          'https://softwarebackenddeployment2.azurewebsites.net/api/v1/Device/GetAllDevicesByRoomId',
          {
            params: {
              PageNumber: 1,
              PageSize: 10,
              RoomId: roomId
            }
          }
        );

        const deviceData = response.data.data;
        const devicesWithStatus = await Promise.all(
          deviceData.map(async (device) => {
            const statusResponse = await axios.get(
              `https://softwarebackenddeployment2.azurewebsites.net/api/v1/Device/GetDeviceById`,
              {
                params: { Id: device.id }
              }
            );
            return { ...device, status: statusResponse.data.data.status, type: statusResponse.data.data.type };
          })
        );

        // Check for status changes and show toast notifications
        devicesWithStatus.forEach((device, index) => {
          if (devices[index] && devices[index].status !== device.status) {
            toast.info(`Device ${device.name} status changed to ${device.status ? 'On' : 'Off'}`);
          }
        });

        setDevices(devicesWithStatus);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching devices:', error);
        setLoading(false);
      }
    };

    if (roomId) {
      fetchDevices();
      const intervalId = setInterval(fetchDevices, 5000); // 5 saniyede bir güncelleme
      return () => clearInterval(intervalId); // Bileşen unmount olduğunda interval'i temizler
    }
  }, [roomId]);

  const handleLampToggle = async (device) => {
    try {
      const newStatus = !device.status;
      await axios.put(
        `https://softwarebackenddeployment2.azurewebsites.net/api/v1/Device/UpdateDeviceStatus`, // Bu endpoint'in doğru olduğundan emin olun
        { id: device.id, status: newStatus }
      );
      const updatedDevices = devices.map((d) =>
        d.id === device.id ? { ...d, status: newStatus } : d
      );
      setDevices(updatedDevices);
    } catch (error) {
      console.error('Error updating device status:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ToastContainer />
      <div className="content grid5 mtop">
        {devices.length > 0 ? (
          devices.map((device, index) => (
            <div
              className="box"
              key={index}
              style={{ cursor: 'pointer' }}
            >
              <h4>{device.name}</h4>
              <p>{device.name}</p>

              <img
                src={
                  device.type === 'Door'
                    ? device.status
                      ? deviceImages.Door.open
                      : deviceImages.Door.close
                    : device.type === 'Lamp'
                    ? device.status
                      ? deviceImages.Lamp.on
                      : deviceImages.Lamp.off
                    : null
                }
                alt={device.name}
              />

              {device.type === 'Door' ? (
                <p>Status: {device.status ? 'Door Open' : 'Door Close'}</p>
              ) : device.type === 'Lamp' ? (
                <>

                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={device.status}
                      onChange={() => handleLampToggle(device)}
                    />
                    <span className="slider round"></span>
                  </label>
                </>
              ) : (
                <p>Status: {device.status ? 'On' : 'Off'}</p>
              )}

            </div>
          ))
        ) : (
          <p>No devices found.</p>
        )}
      </div>
    </>
  );
};

export default DeviceRecent;
