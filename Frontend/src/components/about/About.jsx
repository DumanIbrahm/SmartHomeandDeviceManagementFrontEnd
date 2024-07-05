import React, { useState } from "react";
import { motion } from "framer-motion"; // Framer Motion animasyon kütüphanesi
import Confetti from "react-confetti";
import Main from './Main'; // Video arka plan bileşeni
import özge from "./images/özge.jpg";
import ibrahim from "./images/ibrahim.jpg";
import meryem from "./images/meryem.jpg";
import buse from "./images/buse.jpg";
import "./about.css";

const About = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);


  const handleMouseEnter = (id) => {
    setExpandedId(id);
    setShowConfetti(true);

  };

  const handleMouseLeave = () => {
    setExpandedId(null);
    setShowConfetti(false);

  };

  const teamMembers = [
    {
      id: 2,
      name: "Özge Havva Şahin",
      subtitle: "Mobile Developer",
      description: "Özge is our mobile maestro, with a passion for creating intuitive and user-friendly mobile applications. With her expertise in mobile development, she ensures that our projects are accessible to users on the go, without compromising on functionality or design.",
      image: özge,
    },
    {
      id: 3,
      name: "Ibrahim Duman",
      subtitle: "Backend Developer",
      description: "Ibrahim is our backend wizard, with a knack for turning complex ideas into efficient and scalable solutions. With his expertise in backend technologies, he ensures that our projects are robust and reliable.",
      image: ibrahim,
    },
    {
      id: 4,
      name: "Meryem Ahıskalı",
      subtitle: "IoT Developer",
      description: "Meryem is our IoT enthusiast, specializing in building innovative and connected systems. With her expertise in IoT development, she brings a unique perspective to our projects, ensuring that they are not only functional but also interconnected in meaningful ways.",
      image: meryem,
    },
    {
      id: 5,
      name: "Buse Çoban",
      subtitle: "Frontend Developer",
      description: "Buse is our frontend guru, with an eye for design and a passion for creating beautiful and engaging user interfaces. With her expertise in frontend development, she ensures that our projects are not only functional but also visually stunning and easy to use.",
      image: buse,
    },
  ];

  const cardVariants = {
    initial: {
      scale: 1,
      rotate: 0,
      y: 0,
      backgroundColor: "#fff"
    },
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 5, 0], // Keyframe animasyonu
      y: -10,
      backgroundColor: "#f0f0f0",
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <>
      <Main />
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="mission-vision">
              <h2 className="section-title"> </h2>
            </div>

            <div className="team-container">
              <div className="team-row">
                {teamMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    className={`team-card ${expandedId === member.id ? "expanded" : ""}`}
                    onMouseEnter={() => handleMouseEnter(member.id)}
                    onMouseLeave={handleMouseLeave}
                    variants={cardVariants}
                    initial="initial"
                    animate={expandedId === member.id ? "hover" : "initial"}
                  >
                    {expandedId === member.id && showConfetti && (
                      <Confetti
                        width={300}
                        height={300}
                        numberOfPieces={200}
                      />
                    )}
                    <img src={member.image} alt={member.name} />
                    <div className="team-card-content">
                      <h3 className="team-card-title">{member.name}</h3>
                      <h3 className="team-card-subtitle">{member.subtitle}</h3>
                      <p className="team-card-description">{member.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="history">
              <ul></ul>
            </div>

            <div className="values"></div>

            <div className="contact-info">
              <ul></ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
