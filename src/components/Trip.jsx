import React from 'react';
import { useParams } from 'react-router-dom';

const tripsData = [
  { id: 1, title: 'Hiking in the Alps', content: 'Story about hiking in the Alps...', imageUrl: 'image_url_here', affiliateLinks: ['link1', 'link2'] },
  { id: 2, title: 'Biking through Amsterdam', content: 'Story about biking through Amsterdam...', imageUrl: 'image_url_here', affiliateLinks: ['link1', 'link2'] },
  // Add more trips here
];

const Trip = () => {
  const { id } = useParams();
  const trip = tripsData.find(trip => trip.id === parseInt(id));

  return (
    <div>
      <h1>{trip.title}</h1>
      <img src={trip.imageUrl} alt={trip.title} />
      <p>{trip.content}</p>
      <h3>Affiliate Links:</h3>
      <ul>
        {trip.affiliateLinks.map((link, index) => (
          <li key={index}><a href={link}>Purchase here</a></li>
        ))}
      </ul>
    </div>
  );
};

export default Trip;