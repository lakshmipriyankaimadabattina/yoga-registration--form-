// src/App.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
import ThankYou from './ThankYou'; 

const batches = ['6-7AM', '7-8AM', '8-9AM', '5-6PM'];
const feePerMonth = 500; 

function getEndOfMonth(date) {
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return lastDay;
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    selectedBatch: '',
    joinDate: null,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, joinDate: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const age = parseInt(formData.age);
    if (age < 18 || age > 65) {
      setErrorMessage('Age must be between 18 and 65.');
      return;
    }

    
    setErrorMessage('');

    
    const endOfMonth = getEndOfMonth(formData.joinDate);

   
    console.log('Form submitted:', formData);
    console.log('End of the month:', endOfMonth);

    
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h1>Yoga Admission Form</h1>
      {submitted ? (
        <ThankYou formData={formData} />
      ) : (
        <>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" required />
              </label>
              <label>
                Age:
                <input type="number" name="age" value={formData.age} onChange={handleInputChange} placeholder="Enter your age" required />
              </label>
            </div>
            <div className="input-group">
              <label>
                Joining Date:
                <DatePicker
                  selected={formData.joinDate}
                  onChange={handleDateChange}
                  placeholderText="Select joining date"
                />
              </label>
              <label>
                Select Batch:
                <select name="selectedBatch" value={formData.selectedBatch} onChange={handleInputChange} required>
                  <option value="">Select Batch</option>
                  {batches.map((batch) => (
                    <option key={batch} value={batch}>
                      {batch}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="fee-details">
              {formData.joinDate && (
                <p>
                  Fee Details: {feePerMonth} Rs from {formData.joinDate.toLocaleDateString()} to {getEndOfMonth(formData.joinDate).toLocaleDateString()}
                </p>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;



