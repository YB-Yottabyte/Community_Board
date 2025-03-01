import React from "react";

const EventCard = ({ title, date, description, link }) => {
  return (
    <div className="event-card">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{description}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">More Info</a>}
    </div>
  );
};

export default EventCard;