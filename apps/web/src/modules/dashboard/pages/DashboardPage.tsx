import { useTasksByStatus } from "../hooks/useTasksByStatus";
import TaskCard from "../components/TaskCard";

const columns = [
  { key: "Todo", title: "To Do" },
  { key: "In Progress", title: "In Progress" },
  { key: "In Review", title: "In Review" },
  { key: "Done", title: "Done" }
];

export default function DashboardPage() {
  const { tasksByStatus, loading, error, refresh } = useTasksByStatus();

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      {columns.map(col => (
        <div
          key={col.key}
          style={{
            flex: 1,
            backgroundColor: "#f4f4f4",
            padding: "8px",
            borderRadius: "4px"
          }}
        >
          <h3>{col.title}</h3>
          {tasksByStatus[col.key]?.map(task => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
        </div>
      ))}
    </div>
  );
}