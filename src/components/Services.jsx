import React from 'react';
import { ServicesData } from '../data/ServicesData';

export const Services = () => {
  return (
    <div className="services" id="services">
      <h1 className="title">Our Services</h1>

      <div className="wrapper">
        {ServicesData.map(({ id, icon, title, details }) => {
          return (
            <div className="card" key={id}>
              <img className="icon" src={icon} alt={title} />
              <h2 className="cardTitle">{title}</h2>
              <p className="details">{details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
