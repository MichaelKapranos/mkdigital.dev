import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../amplify/data/resource'; // Adjust the path if necessary
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Statistics.css';
import type { TooltipItem } from 'chart.js';

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

  const calculatePercentageIncrease = (oldValue: number, newValue: number) => {
    const increase = newValue - oldValue;
    return ((increase / oldValue) * 100).toFixed(2);
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
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem: TooltipItem<'bar'>) {
            const cost = tooltipItem.raw as number;
            const percentageIncrease = calculatePercentageIncrease(37064, cost);
            return `${tooltipItem.dataset.label}: $${cost.toLocaleString()} (${percentageIncrease}% increase from £37,064)`;
          }
        }
      },
      legend: {
        labels: {
          color: '#333', // Set the color to match the <h2> tags
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: string | number) {
            if (typeof value === 'number') {
              return '£' + value.toLocaleString();
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
      <div className="projects-goals">
        <h2>Average pay</h2>
        <p>
          Cloud engineer, £32K - £52K/yr. £41K/yr Average base pay <br/>
          Devops Engineer, £33K - £49K/yr. £40K/yr Average base pay <br/>
          Site Reliability Engineer(SRE), £35K - £53K/yr. £43K/yr Average base pay <br/>
          Aws Cloud Engineer, £34K - £57K/yr. £44K/yr Average base pay (Average 2k bonus) <br/>
          Aws Devops Engineer, £33K - £51K/yr. £41K/yr Average base pay (Average 3k bonus)<br/>
          <br/><br/>Most of these jobs also have an average bonus of 1-3k
        </p>
      </div>
    </div>
  );
};

export default Statistics;