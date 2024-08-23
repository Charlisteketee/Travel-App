import axios from 'axios';

const API_URL = 'http://localhost:5000/api/trips';

export const getTrips = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching trips:', error);
    throw error;
  }
};

// Function to get a trip by ID
export const getTripById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching trip by ID:', error);
    throw error;
  }
};

export const addTrip = async (tripData) => {
  try {
    const response = await axios.post(API_URL, tripData);
    return response.data;
  } catch (error) {
    console.error('Error adding trip:', error);
    throw error;
  }
};
