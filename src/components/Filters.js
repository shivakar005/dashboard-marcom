import React from "react";

const Filters = ({ filters, setFilters }) => {
  const handleYearChange = (e) => {
    setFilters({ ...filters, year: e.target.value });
  };

  const handleDepartmentChange = (e) => {
    setFilters({ ...filters, department: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setFilters({ ...filters, gender: e.target.value });
  };

  return (
    <div className="filters">
      <div>
        <label htmlFor="year">Select Year: </label>
        <select id="year" value={filters.year} onChange={handleYearChange}>
          <option value="All">All</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>

      <div>
        <label htmlFor="department">Select Department: </label>
        <select
          id="department"
          value={filters.department}
          onChange={handleDepartmentChange}
        >
          <option value="All">All</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
        </select>
      </div>

      <div>
        <label htmlFor="gender">Select Gender: </label>
        <select
          id="gender"
          value={filters.gender}
          onChange={handleCategoryChange}
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
