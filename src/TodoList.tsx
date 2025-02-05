import { useState, useEffect } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const client = generateClient<Schema>();

export default function TodoList() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    const jobTitle = window.prompt("Job Title");
    const costInput = window.prompt("Cost");
  
    if (jobTitle && costInput) {
      const cost = parseFloat(costInput);
      if (!isNaN(cost)) {
        client.models.Todo.create({ jobTitle, cost });
      } else {
        alert("Please enter a valid number for cost.");
      }
    } else {
      alert("Job Title and Cost are required.");
    }
  }

  const data = {
    labels: todos.map(todo => todo.jobTitle),
    datasets: [
      {
        label: 'Cost',
        data: todos.map(todo => todo.cost),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.jobTitle} - ${todo.cost}</li>
        ))}
      </ul>
      <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Job Title vs Cost' } } }} />
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}