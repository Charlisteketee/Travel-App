import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { getTrips } from '../api/trips';
import '../styles/Trips.css';


const Trips = () => {
  const [trips, setTrips] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrips = async () => {
      const params = new URLSearchParams(location.search);
      const filter = params.get('filter');

      try {
        const allTrips = await getTrips();
        console.log(allTrips);
        
        if (filter) {
          const filteredTrips = allTrips.filter(trip => trip.category === filter);
          setTrips(filteredTrips);
        } else {
          setTrips(allTrips);
        }
      } catch (error) {
        console.error('Failed to fetch trips', error);
      }
    };

    fetchTrips();
  }, [location.search]);

  return (
    <div className="trips">
      <div className="trips-header">
        <h1 className="trips-h1">Trips</h1>
        <div className="category-links">
          <Link to="/trips?filter=hiking" className="category-link">Hikes</Link>
          <Link to="/trips?filter=biking" className="category-link">Bike Rides</Link>
          <Link to="/trips?filter=camping" className="category-link">Camping</Link>
          {/* <Link to="/trips?filter=desert" className="category-link">Desert</Link> */}
        </div>
      </div>
      <ul className="tripLink">
        {trips.map(trip => (
          <li key={trip._id} className="trip-item">
            <Link to={`/trips/${trip._id}`}>
              {trip.imageUrl && (
                <img 
                  src={trip.imageUrl} 
                  alt={trip.title} 
                  className="trip-image"
                />
              )}
              <div className="trip-content-container">
                <span className="trip-title">{trip.title}</span>
                <p className="trip-content">
                  {trip.content.slice(0, 100)}... {/* Truncated content */}
                </p>
              </div>
            </Link>          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trips;