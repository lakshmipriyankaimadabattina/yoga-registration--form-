// src/ThankYou.js
import React from 'react';
import './ThankYou.css'; 

function ThankYou({ formData }) {
  return (
    <div className="thank-you-container">
      <h1>Thank You!</h1>
      <p>Your submission has been received. Here are the details:</p>
      <div className="submitted-details">
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Age:</strong> {formData.age}
        </p>
        <p>
          <strong>Selected Batch:</strong> {formData.selectedBatch}
        </p>
        <p>
          <strong>Joining Date:</strong> {formData.joinDate.toLocaleDateString()}
        </p>
  
      </div>
    </div>
  );
}

export default ThankYou;
