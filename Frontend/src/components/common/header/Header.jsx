import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaHome, FaInfoCircle, FaServicestack, FaSignOutAlt } from 'react-icons/fa';
import Modal from '../Modal';
import "./header.css";

const Header = ({ userId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();

  const handleLogout = () => {
    history.push('/');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const logoSrc = process.env.PUBLIC_URL + '/images/logo/PHOTO-2024-05-21-18-54-57.jpg';

  const nav = [
    {
      text: "Home",
      path: "/home",
      icon: <FaHome />
    },
    {
      text: "About",
      path: "/about",
      icon: <FaInfoCircle />
    },
    {
      text: "Services",
      path: "/services",
      icon: <FaServicestack />
    },
  ];

  return (
    <header>
      <div className="container">
        <div className="left-section">
          <div className="logo-container">
            <img src={logoSrc} alt="Logo" className="logo" onClick={openModal} />
          </div>
          <div className="nav">
            <ul className="flex">
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={{ pathname: list.path, state: { userId } }}>
                    {list.icon}
                    {list.text}
                  </Link>
                </li>
              ))}
              <li>
                <button className="btn1 logout" onClick={handleLogout}>
                  <FaSignOutAlt /> Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <img src={logoSrc} alt="Logo" style={{ width: '100%' }} />
        </Modal>
      )}
    </header>
  );
};

export default Header;