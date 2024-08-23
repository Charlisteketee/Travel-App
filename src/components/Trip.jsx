import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTripById } from '../api/trips';
import '../styles/Trip.css';


const Trip = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const fetchedTrip = await getTripById(id);
        setTrip(fetchedTrip);
      } catch (error) {
        console.error('Failed to fetch trip', error);
      }
    };

    fetchTrip();
  }, [id]);

  if (!trip) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className='trip-title'>{trip.title}</h1>
      <img
        className='trip-photo'
        src={trip.imageUrl} 
        alt={trip.title} 
      />
      <p className='trip-content'>{trip.content}</p>
      {/* <h3 className='affiliate-links-title'>Affiliate Links:</h3>
      <ul>
        {trip.affiliateLinks.map((link, index) => (
          <li key={index}><a href={link}>Purchase here</a></li>
        ))}
      </ul> */}
    </div>
  );
};

export default Trip;