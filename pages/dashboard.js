import React from 'react';
import Header from '../components/Header';
import EmployeeForm from '../components/EmployeeForm';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <h1>Dashboard</h1>
      <EmployeeForm />
      {/* Add your employee data display here */}
    </div>
  );
};

export default Dashboard;