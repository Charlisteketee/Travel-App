import React, { useState, useEffect } from 'react';
import { getTrips } from '../api/trips';
import '../styles/Photos.css';

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const fetchedTrips = await getTrips();
      const images = fetchedTrips.map(trip => trip.imageUrl).filter(Boolean);
      setPhotos(images);
    };

    loadPhotos();
  }, []);

  return (
    <div className='photos'>
      <h1 className='photos-header'>Photos</h1>
      <div className='photos-grid'>
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Trip ${index + 1}`} className='photo-item' />
        ))}
      </div>
    </div>
  );
};

export default Photos;