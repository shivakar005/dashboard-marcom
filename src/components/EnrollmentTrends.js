import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

const EnrollmentTrends = ({ data }) => {
  const maleData = data.data.map((entry) => entry.male);
  const femaleData = data.data.map((entry) => entry.female);

  const chartData = {
    labels: data.years,
    datasets: [
      {
        label: 'Male Students',
        data: maleData,
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Female Students',
        data: femaleData,
        borderColor: 'pink',
        fill: false,
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
    <div className="chart-container" style={{ maxWidth: '100%', margin: 'auto' }}>
      <h1>Student Enrollment Trends</h1>
      <div className="box--common" style={{ position: 'relative', height: '300px' }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default EnrollmentTrends;
