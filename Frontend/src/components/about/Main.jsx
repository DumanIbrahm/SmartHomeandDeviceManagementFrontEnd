// src/components/about/Main.jsx
import React from 'react';
import videoBg from '../../assets/videoBg3.mp4'; // Doğru yolu kullanarak videoyu içe aktarın
import './main.css'; // CSS dosyasını dahil edin

const Main = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted className="background-video" />
    </div>
  );
};

export default Main;
