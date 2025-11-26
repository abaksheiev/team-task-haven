import type { Task } from "../../tasks/types";
import { useNavigate } from "react-router";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard(props: TaskCardProps) {
  const { task } = props;
  const navigate = useNavigate();

  return (
    <div
      key={task.id}
      style={{
        width: "100%",
        backgroundColor: "white",
        padding: "8px",
        marginBottom: "8px",
        borderRadius: "4px",
        boxShadow: "0 0 4px rgba(0,0,0,0.1)",
        boxSizing: "border-box",
      }}
    >
      <strong>{task.title}</strong>
      <p>{task.description}</p>
      <input type="button" value="Quick VIew" />
      <input type="button" value="Edit"  onClick={() => navigate(`/task/${task.id}`)}/>
    </div>
  );
}
