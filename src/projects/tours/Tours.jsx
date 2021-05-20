import './tours.scss';
import React, { useState, useEffect } from 'react';
import SingleTour from './SingleTour';
import Loader from '../../components/Loader';

const Tours = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    }
    catch (error) {
      setLoading(false);
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if(loading) {
    return <Loader />
  }

  return (
    <div className="tour-main">
      <h2 className="title">
        <span>Our Tours</span>
      </h2>

      <div className="tour-list">
        {tours.map(tour => <SingleTour key={tour.id} tour={tour} />)}
      </div>
    </div>
  )
}

export default Tours;
