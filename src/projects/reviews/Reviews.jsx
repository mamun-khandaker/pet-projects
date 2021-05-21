import './reviews.scss';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import reviewData from './ReviewData';

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, avatar, text } = reviewData[index];

  return (
    <div className="review-list">
      <div className="review">
        <div className="review-avatar">
          <img src={avatar} alt={name} />
        </div>

        <h2 className="review-name">{name}</h2>
        <h2 className="review-designation">{job}</h2>

        <div className="review-text">
          {text}
        </div>
      </div>

      <div className="review-nav">
        <button className="button button-text"><FaChevronLeft /></button>
        <button className="button button-text"><FaChevronRight /></button>
      </div>

      <div className="review-random">
        <button className="button">Random Reviews</button>
      </div>
    </div>
  )
}

export default Reviews;
