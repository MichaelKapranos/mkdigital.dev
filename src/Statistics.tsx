import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource'; // Adjust the path if necessary
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Statistics.css';

const client = generateClient<Schema>();

type JobSalary = {
  jobTitle: string | null;
  cost: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

const Statistics = () => {
  const [salaryData, setSalaryData] = useState<JobSalary[]>([]);

  useEffect(() => {
    fetchSalaries();
  }, []);

  const fetchSalaries = async () => {
    try {
      console.log(client.models); // Check if JobSalary is present
      const { data: jobSalaries } = await client.models.JobSalary.list();
      setSalaryData(jobSalaries as JobSalary[]);
    } catch (error) {
      console.error('Error fetching salaries:', error);
    }
  };

  const data = {
    labels: salaryData.map(job => job.jobTitle),
    datasets: [
      {
        label: 'Average Salary',
        data: salaryData.map(job => job.cost),
        backgroundColor: 'rgba(117, 81, 194, 0.6)',
        borderColor: 'rgba(117, 81, 194, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: string | number) {
            if (typeof value === 'number') {
              return '$' + value.toLocaleString();
            }
            return value;
          }
        }
      }
    }
  };

  return (
    <div className="Statistics-container">
      <h1 className="Statistics-title">Statistics</h1>
      <div className="Statistics">
        <h2>Average Incomes for Cloud Engineering Jobs</h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Statistics;