// src/components/ServiceCard.js
import React from 'react';
import './ServiceCard.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, style, link }) => {
  return (
    <Link to={link} className="service-card" style={style}>
      <div className="service-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="read-more">Read More</span>
    </Link>
  );
};

export default ServiceCard;