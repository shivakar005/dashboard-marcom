import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PlacementStatistics = ({ data, studentData }) => {
  const chartData = {
    labels: [
      "Placed Students",
      "Not Placed",
      "Average Package",
      "Companies Visited",
    ],
    datasets: [
      {
        data: [
          data.placed,
          studentData.length - data.placed,
          data.averagePackage,
          data.companiesVisited,
        ],
        backgroundColor: ["#4CAF50", "#FF5722", "#FFC107", "#2196F3"],
        hoverBackgroundColor: ["#45A049", "#FF4519", "#FFB400", "#1976D2"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const listItemColors = ["#4CAF50", "#FF5722", "#FFC107", "#2196F3"];

  return (
    <div className="chart-container">
      <h1>Placement & Internship Statistics</h1>

      <div className="chart--container box--common">
        <div className="chart-labels">
          <ul>
            <li style={{ backgroundColor: listItemColors[0] }}>
              <strong>Placed Students:</strong> {data.placed}
            </li>
            <li style={{ backgroundColor: listItemColors[1] }}>
              <strong>Not Placed:</strong> {studentData.length - data.placed}
            </li>
            <li style={{ backgroundColor: listItemColors[2] }}>
              <strong>Average Package (₹):</strong> {data.averagePackage}
            </li>
            <li style={{ backgroundColor: listItemColors[3] }}>
              <strong>Companies Visited:</strong> {data.companiesVisited}
            </li>
          </ul>
        </div>

        <div className="chart-layout">
          <div className="pia--chart">
            <Pie data={chartData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementStatistics;
