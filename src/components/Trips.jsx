import React from "react";
import { Link } from 'react-router-dom';

const tripsData = [
  { id: 1, title: 'Hiking in the Alps' },
  { id: 2, title: 'Biking through Amsterdam' },
  // Add more trips here
];

const Trips = () => {
  return (
    <div>
      <h1>Trips</h1>
      <ul>
        {tripsData.map(trip => (
          <li key={trip.id}>
            <Link to={`/trips/${trip.id}`}>{trip.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trips;