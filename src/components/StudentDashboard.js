
import React, { useState } from 'react';
import Filters from './Filters';
import StudentList from './StudentList';

const StudentDashboard = ({data}) => {
  const [filters, setFilters] = useState({
    year: 'All',
    department: 'All',
    gender: 'All',
  });

  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <StudentList students={data} filters={filters} />
    </div>
  );
};

export default StudentDashboard;
