import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const DepartmentPerformance = ({ data }) => {
  const departmentNames = data.map((dept) => dept.name);
  const passRates = data.map((dept) => dept.passRate);

  const chartData = {
    labels: departmentNames,
    datasets: [
      {
        label: 'Pass Rate (%)',
        data: passRates,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container" style={{ width: '100%', maxWidth: '100%' }}>
      <h1>Department-Wise Performance</h1>
      <div className="box--common" style={{ position: 'relative', height: '300px' }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default DepartmentPerformance;
