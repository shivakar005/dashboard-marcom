import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; 
import "../assets/css/Sidebar.css";

const Sidebar = ({ setToggleActive, toggleActive }) => {
  const location = useLocation();

  useEffect(() => {
    setToggleActive(false);
  }, [location, setToggleActive]);

  const handleToggle = () => {
    setToggleActive(!toggleActive);
  };

  return (
    <div className={`sidebar ${toggleActive ? 'toggle--slide' : ''}`}>
      <div className="toggle--arrow" onClick={handleToggle}>
        <img src="/chevron.png" alt="Toggle" />
      </div>
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">
            <img src="/menu.png" alt="Dashboard Icon" />
            <span> Dashboard</span>
          </Link>
        </li>
        <li className={location.pathname === '/enrollment-trends' ? 'active' : ''}>
          <Link to="/enrollment-trends">
            <img src="/contract.png" alt="Enrollment Icon" />
            <span> Enrollment</span>
          </Link>
        </li>
        <li className={location.pathname === '/department-performance' ? 'active' : ''}>
          <Link to="/department-performance">
            <img src="/sitemap.png" alt="Department Icon" />
            <span> Department</span>
          </Link>
        </li>
        <li className={location.pathname === '/placement-statistics' ? 'active' : ''}>
          <Link to="/placement-statistics">
            <img src="/job-offer.png" alt="Placement Icon" />
            <span> Placement & Internship</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
