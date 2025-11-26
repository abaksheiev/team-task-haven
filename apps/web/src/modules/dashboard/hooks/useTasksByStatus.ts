import { useEffect, useState, useCallback } from "react";
import { getTasks, changeTaskStatus } from "../../../api/tasks";
import type { Task } from "../../tasks/types";

export function useTasksByStatus() {
  const [tasksByStatus, setTasksByStatus] = useState<Record<string, Task[]>>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTasks();

      const grouped: Record<string, Task[]> = {};

      data.forEach((task) => {
        grouped[task.status] = [...(grouped[task.status] || []), task];
      });
      console.log(grouped);
      setTasksByStatus(grouped);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  async function updateTaskStatus(id: string, status: string)  {
    try {
      setLoading(true);
      setError(null);
      await changeTaskStatus(id, status);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return {
    tasksByStatus,
    loading,
    error,
    refresh: fetchTasks,
    updateTaskStatus,
  };
}
