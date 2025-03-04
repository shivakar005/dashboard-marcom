import React from 'react';

const StudentList = ({ students, filters }) => {
  const filteredStudents = students.filter((student) => {
    return (
      (filters.year === 'All' || student.year === filters.year) &&
      (filters.department === 'All' || student.department === filters.department) &&
      (filters.gender === 'All' || student.gender === filters.gender)
    );
  });

  return (
    <div className="student-table-container">
      {filteredStudents.length === 0 ? (
        <p>No student data found</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Year</th>
              <th>Category</th>
              <th>Placement Status</th>
              <th>Average Package (₹)</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.department}</td>
                <td>{student.year}</td>
                <td>{student.gender}</td>
                <td>{student.placementStatus}</td>
                <td>{student.placementStatus === 'Placed' ? student.averagePackage : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;
