import React from 'react';
import starImg from '../../Assets/Star 5.svg';

const ReviewContainer = ({ title }) => {
  return (
    <div className="review-container">
      <h3>{title}</h3>{' '}
      <div className="stars-container">
        <h2> CBC </h2>{' '}
        <span>
          <img src={starImg} alt="A star" />
          <img src={starImg} alt="A star" />
          <img src={starImg} alt="A star" />
          <img src={starImg} alt="A star" />
          <img src={starImg} alt="A star" />
          <img src={starImg} alt="A star" />
        </span>{' '}
      </div>{' '}
      <h3> CEO, FOUNDER </h3> <h4> CBC Hostels </h4>{' '}
    </div>
  );
};

export default ReviewContainer;
