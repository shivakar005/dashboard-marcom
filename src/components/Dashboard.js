import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import { enrollmentData, departmentData, placementData, studentData } from '../data/dummyData';
import EnrollmentTrends from './EnrollmentTrends';
import DepartmentPerformance from './DepartmentPerformance';
import PlacementStatistics from './PlacementStatistics';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, ArcElement, PointElement } from 'chart.js'; // Import required components
import '../assets/css/Dashboard.css';
import StudentDashboard from './StudentDashboard';

ChartJS.register(Title, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, ArcElement, PointElement);

const Dashboard = () => {

  const [toggleActive, setToggleActive] = useState(false);
  console.log(toggleActive,'toggleActive')

  return (
    <Router>
      <div className="dashboard-container">
        <Sidebar setToggleActive={setToggleActive} toggleActive={toggleActive}/>
        <div className={`main-content ${toggleActive ? 'active--toggle': ''}`}>
          <div className='wellcome'>
              <div>
                <p>Welcome to Dashboard!</p>
              </div>
          </div>
          <div className='inner--content'>
            <Routes>
              <Route path="/" element={<StudentDashboard data={studentData} />} />
              <Route path="/enrollment-trends" element={<EnrollmentTrends data={enrollmentData} />} />
              <Route path="/department-performance" element={<DepartmentPerformance data={departmentData} />} />
              <Route path="/placement-statistics" element={<PlacementStatistics data={placementData} studentData={studentData} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
