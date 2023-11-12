import React, { useState } from 'react';
import { sendEmail } from '../utils/sendEmail';

const EmployeeForm = () => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    email: '',
    idCardExpiry: '',
    passportExpiry: '',
    airportPassExpiry: '',
    licenseExpiry: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email using SendGrid API
    sendEmail(employeeData);
    // Reset form fields
    setEmployeeData({
      name: '',
      email: '',
      idCardExpiry: '',
      passportExpiry: '',
      airportPassExpiry: '',
      licenseExpiry: '',
    });
  };

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={employeeData.name}
        onChange={handleChange}
        placeholder="Employee Name"
      />
      <input
        type="email"
        name="email"
        value={employeeData.email}
        onChange={handleChange}
        placeholder="Employee Email"
      />
      <input
        type="date"
        name="idCardExpiry"
        value={employeeData.idCardExpiry}
        onChange={handleChange}
        placeholder="ID Card Expiry Date"
      />
      <input
        type="date"
        name="passportExpiry"
        value={employeeData.passportExpiry}
        onChange={handleChange}
        placeholder="Passport Expiry Date"
      />
      <input
        type="date"
        name="airportPassExpiry"
        value={employeeData.airportPassExpiry}
        onChange={handleChange}
        placeholder="Airport Pass Expiry Date"
      />
      <input
        type="date"
        name="licenseExpiry"
        value={employeeData.licenseExpiry}
        onChange={handleChange}
        placeholder="License Expiry Date"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;