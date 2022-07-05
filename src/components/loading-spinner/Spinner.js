import React from 'react';
import './spinner.css';

const Spinner = () => {
  return (
    <div className="spinner">
      <h1>Loading...</h1>
      <div className="spinner-lines-container">
        <div className="spinner-line spinner-animate1"></div>
        <div className="spinner-line spinner-animate2"></div>
        <div className="spinner-line spinner-animate3"></div>
        <div className="spinner-line spinner-animate4"></div>
        <div className="spinner-line spinner-animate5"></div>
        <div className="spinner-line spinner-animate6"></div>
      </div>
    </div>
  );
};

export default Spinner;
