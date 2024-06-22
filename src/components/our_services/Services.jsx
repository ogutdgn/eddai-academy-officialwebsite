// src/components/Services.js
import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

import robotIcon from '../../assets/icons/services_box_image1.png';
import analysisIcon from '../../assets/icons/services_box_image2.png';
import mlIcon from '../../assets/icons/services_box_image3.png';

const serviceData = [
  {
    icon: robotIcon,
    title: "Robotic Automation",
    description: "Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...",
    style: { marginTop: '50px' },
    link: "/robotic-automation"
  },
  {
    icon: analysisIcon,
    title: "Predictive Analysis",
    description: "Ruam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...",
    style: { marginTop: '25px' },
    link: "/predictive-analysis"
  },
  {
    icon: mlIcon,
    title: "Machine Learning",
    description: "Suam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...",
    style: { marginTop: '0px' },
    link: "/machine-learning"
  }
];

const Services = () => {
  return (
    <div className="services-section">
      <div className="section-header">
        <div className="sub-t">Services</div>
        <h1>Hizmetlerimiz</h1>
      </div>
      <div className="services-container">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            style={service.style}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
