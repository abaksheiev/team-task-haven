import { useEffect, useState, useCallback } from "react";
import { getTasks } from "../../../api/tasks";
import type { Task } from "../../tasks/types";

export function useTasksByStatus() {
  const [tasksByStatus, setTasksByStatus] = useState<Record<string, Task[]>>({
    todo: [],
    "in-progress": [],
    done: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTasks();
      console.log(data);
      const grouped: Record<string, Task[]> = {
        todo: [],
        "in-progress": [],
        done: []
      };

      data.forEach(task => {
        grouped[task.status] = [...(grouped[task.status] || []), task];
      });

      setTasksByStatus(grouped);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return { tasksByStatus, loading, error, refresh: fetchTasks };
}