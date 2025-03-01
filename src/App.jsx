import React from "react";
import { resources } from "./data";
import EventCard from "./components/EventCard";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Programming Languages User Manual</h1>
      <div className="events-grid">
        {resources.map((resource, index) => (
          <EventCard 
            key={index} 
            title={resource.title} 
            date={resource.date} 
            description={resource.description} 
            link={resource.link} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;