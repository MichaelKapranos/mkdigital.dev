import React, { useRef, useEffect, useState } from 'react';
import './Accomplishments.css';
import { generateClient } from "aws-amplify/data";
import type { Schema } from '../amplify/data/resource'; // Adjust the path if necessary

const client = generateClient<Schema>();

type Goal = {
  id: string;
  task: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

const Accomplishments: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft === 0) {
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
      } else {
        scrollRef.current.scrollBy({ left: -220, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
        scrollRef.current.scrollLeft = 0;
      } else {
        scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
      }
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  const [currentGoals, setCurrentGoals] = useState<Goal[]>([]);
  const [futureGoals, setFutureGoals] = useState<Goal[]>([]);

  useEffect(() => {
    try {
      console.log(client.models); // Check if JobSalary is present
    const observeCurrentGoals = client.models.CurrentGoal.observeQuery().subscribe({
      next: (data) => setCurrentGoals(data.items as Goal[]),
    });

    const observeFutureGoals = client.models.FutureGoal.observeQuery().subscribe({
      next: (data) => setFutureGoals(data.items as Goal[]),
    });


    return () => {
      observeCurrentGoals.unsubscribe();
      observeFutureGoals.unsubscribe();
    };
  } catch (error) {
    console.error('Error fetching salaries:', error);
  }
  }, []);

  const handleStatusChange = async (index: number, type: 'current' | 'future', newStatus: string) => {
    try {
      if (type === 'current') {
        const updatedGoals = [...currentGoals];
        const goalToUpdate = updatedGoals[index];
        goalToUpdate.status = newStatus;
        setCurrentGoals(updatedGoals);
        await client.models.CurrentGoal.update({ id: goalToUpdate.id, status: newStatus });
      } else {
        const updatedGoals = [...futureGoals];
        const goalToUpdate = updatedGoals[index];
        goalToUpdate.status = newStatus;
        setFutureGoals(updatedGoals);
        await client.models.FutureGoal.update({ id: goalToUpdate.id, status: newStatus });
      }
    } catch (error) {
      console.error('Error updating goal status:', error);
    }
  };

  return (
    <div className="accomplishments-container">
      <h1 className="accomplishments-title">Goals & Accomplishments</h1>
      
      <div className="certifications">
        <h2>Certifications</h2>
        <div className="certifications-wrapper">
          <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>
          <div className="certifications-scroll" ref={scrollRef}>
            <div className="credly-badge">
              <a href="https://www.credly.com/badges/36c93887-ab85-4615-bc35-bea4f7181064" target="_blank" rel="noopener noreferrer">
                <img src="https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" alt="Credly Badge 1" />
              </a>
            </div>
            <div className="credly-badge">
              <a href="https://www.credly.com/badges/436fccd1-d732-49ed-97fe-574bdadb35b3" target="_blank" rel="noopener noreferrer">
                <img src="https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" alt="Credly Badge 3" />
              </a>
            </div>
            <div className="credly-badge">
              <a href="https://www.credly.com/badges/a81169e4-13ce-49ae-a7a4-07ad68bce4d9/public_url" target="_blank" rel="noopener noreferrer">
                <img src="https://images.credly.com/size/340x340/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png" alt="Credly Badge 2" />
              </a>
            </div>
          </div>
          <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
        </div>
      </div>

      <div className="projects-goals">
        <h2>Current Work & Goals</h2>
        <table className="goals-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {currentGoals.map((goal, index) => (
              <tr key={goal.id}>
                <td>{goal.task}</td>
                <td>{goal.status}</td>
                <td>
                  <select value={goal.status ?? ''} onChange={(e) => handleStatusChange(index, 'current', e.target.value)}>
                    <option value="Not Started">Not Started</option>
                    <option value="On Hold">On Hold</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="future-goals">
        <h2>Future Goals</h2>
        <table className="goals-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {futureGoals.map((goal, index) => (
              <tr key={goal.id}>
                <td>{goal.task}</td>
                <td>{goal.status}</td>
                <td>
                  <select value={goal.status ?? ''} onChange={(e) => handleStatusChange(index, 'future', e.target.value)}>
                    <option value="Not Started">Not Started</option>
                    <option value="On Hold">On Hold</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accomplishments;