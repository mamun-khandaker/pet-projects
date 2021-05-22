import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const SingleAccordion = ({ question, answer }) => {
  return (
    <div className="accordion">
      <h5 className="accordion-title">
        {question}

        <button className="button button-text"><FaChevronDown /></button>
      </h5>

      <div className="accordion-text">
        {answer}
      </div>
    </div>
  )
}

export default SingleAccordion;
