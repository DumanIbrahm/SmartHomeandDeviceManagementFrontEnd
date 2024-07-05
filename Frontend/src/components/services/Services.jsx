import React, { useState } from "react";
import "./services.css";
import Main2 from "./Main2"; // Video background bileşeni

const pages = [
  {
    leftTitle: "Introduction",
    left: "Welcome to our Smart Home Management System! This guide will help you get started with managing your smart home. Our system allows you to control and monitor various smart devices in your home, ensuring convenience and security. With our user-friendly interface, you can easily add, manage, and control devices, rooms, and homes.",
    rightTitle: "Getting Started",
    right: "To begin, sign up for an account by providing your email address and creating a password. Once registered, you can log in and start setting up your smart home. The dashboard provides an overview of your homes and devices, allowing you to quickly access important information and controls.",
  },
  {
    leftTitle: "Adding a Home",
    left: "To add a new home, navigate to the 'Homes' section and click on 'Add Home'. Enter the required details such as the home name and address, and save. You can add multiple homes and switch between them from the dashboard. This feature is useful if you manage more than one property.",
    rightTitle: "Managing Homes",
    right: "You can view and manage your homes from the 'Homes' section. Click on a home to see its details and make changes. You can edit the home information, delete the home, or set it as your primary residence. This section also provides an overview of the rooms and devices within each home.",
  },
  {
    leftTitle: "Adding a Room",
    left: "To add a room, go to the home you want to add the room to and click 'Add Room'. Enter the room name and save. Rooms help you organize your devices based on their location within your home, making it easier to manage and control them. You can add as many rooms as you need.",
    rightTitle: "Managing Rooms",
    right: "You can edit or delete rooms from the home details page. Click on a room to view its devices and settings. You can also move devices between rooms if you rearrange your home. This flexibility ensures that your smart home setup always reflects the actual layout of your home.",
  },
  {
    leftTitle: "Adding a Device",
    left: "To add a device, navigate to the room you want to add the device to and click 'Add Device'. Enter the device details such as name, type, and model, and save. Devices can include smart lights, thermostats, security cameras, and more. Each device can be customized with specific settings and controls.",
    rightTitle: "Managing Devices",
    right: "You can view and control your devices from the room details page. Click on a device to see its status and settings. You can turn devices on or off, adjust settings, and view usage history. This page provides all the tools you need to manage your smart devices effectively.",
  },
  {
    leftTitle: "Device Control",
    left: "You can control your smart devices directly from the app. Turn lights on or off, adjust thermostat settings, view camera feeds, and more. The app provides real-time control and feedback, ensuring that you can manage your home from anywhere. Each device page includes detailed controls and options.",
    rightTitle: "Monitoring Status",
    right: "The app provides real-time status updates for your devices. Check the status of doors, windows, and other sensors. Receive notifications for important events such as doors being left open or motion detected. This feature ensures that you are always aware of what is happening in your home.",
  },
  {
    leftTitle: "Notifications",
    left: "Enable notifications to receive alerts about important events, such as doors being left open or motion detected. Customize notification settings to choose which events trigger alerts and how you receive them. Notifications help you stay informed and respond quickly to any issues.",
    rightTitle: "User Management",
    right: "You can add other users to your home. Go to the 'Users' section and invite users by entering their email addresses. Assign different roles and permissions to users, allowing them to control specific devices or access certain areas of the app. This feature is ideal for families or roommates.",
  },
  {
    leftTitle: "Security Settings",
    left: "Set up security settings to protect your home. Enable two-factor authentication for added security. Manage access controls and permissions to ensure that only authorized users can control your devices. Regularly review and update your security settings to keep your home safe.",
    rightTitle: "Privacy Settings",
    right: "Manage your privacy settings to control what information is shared and with whom. Review and adjust data sharing preferences, and ensure that your personal information is protected. The app provides robust privacy controls to safeguard your data and maintain your privacy.",
  },
  {
    leftTitle: "Troubleshooting",
    left: "If you encounter issues, visit the 'Help' section for troubleshooting tips and contact support for further assistance. The help section provides solutions to common problems and guides on how to resolve technical issues. You can also reach out to our support team for personalized assistance.",
    rightTitle: "Support",
    right: "Our support team is here to help. Reach out to us via email or phone for any issues or questions you may have. We provide timely and effective support to ensure that you have the best experience with our smart home management system. Your satisfaction is our priority.",
  },
  {
    leftTitle: "FAQ",
    left: "Check out the FAQ section for answers to common questions about using the smart home system. The FAQ covers a wide range of topics, from setup and configuration to troubleshooting and advanced features. It is a valuable resource for both new and experienced users.",
    rightTitle: "Feedback",
    right: "We value your feedback. Let us know how we can improve your experience with our smart home management system. Provide suggestions, report issues, and share your thoughts. Your feedback helps us enhance our product and deliver better services to our users.",
  },
];

const Services = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="services mb">
      <Main2 />
      <div className="container">
        <h1 className="video-title">Smart Home Application Guide</h1>
        <div className="book">
          <div className="page left-page">
            <h2 className="page-title">{pages[currentPage].leftTitle}</h2>
            <p>{pages[currentPage].left}</p>
            <div className="page-number left-number">{currentPage * 2 + 1}</div>
          </div>
          <div className="page right-page">
            <h2 className="page-title">{pages[currentPage].rightTitle}</h2>
            <p>{pages[currentPage].right}</p>
            <div className="page-number right-number">{currentPage * 2 + 2}</div>
            <div className="pagination">
              {currentPage > 0 && <button onClick={prevPage}>Previous</button>}
              {currentPage < pages.length - 1 && <button onClick={nextPage}>Next</button>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
