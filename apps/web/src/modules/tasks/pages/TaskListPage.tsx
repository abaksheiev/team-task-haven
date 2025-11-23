import { useTasks } from "../hooks/useTasks";

export default function TaskListPage() {
  const { tasks, loading, error, refresh } = useTasks();

  if (loading) return <p>Loading tasks…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Tasks</h1>
      <button onClick={refresh}>Refresh</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>
            {task.isCompleted ? " ✅" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}