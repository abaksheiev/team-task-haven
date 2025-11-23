import type { Task } from "../../tasks/types";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard(props: TaskCardProps){
      const { task  } = props;

    return(
        <div
              key={task.id}
              style={{
                backgroundColor: "white",
                padding: "8px",
                marginBottom: "8px",
                borderRadius: "4px",
                boxShadow: "0 0 4px rgba(0,0,0,0.1)"
              }}
            >
              <strong>{task.title}</strong>
              <p>{task.description}</p>
            </div>
    );
}