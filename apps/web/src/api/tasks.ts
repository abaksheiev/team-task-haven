//  # все endpoints по задачам
import { apiGet, apiPost, apiPut, apiDelete } from "./client";
import type { Task } from "../modules/tasks/types";

export async function getTasks(): Promise<Task[]> {
    return new Promise((resolve) => {
    setTimeout(() => resolve(mockTasks), 300); // имитация API
  });

  //return apiGet<Task[]>("/tasks");
}
export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Fix login bug",
    description: "Users cannot log in with Google OAuth",
    dueDate: "2025-01-20T12:00:00.000Z",
    isCompleted: false,
    assignees: [
      { id: "u1", username: "anton" },
      { id: "u2", username: "maria" }
    ],
    status: "In Progress"
  },
  {
    id: "2",
    title: "Add task filtering",
    description: "Implement filter by status and assignee",
    dueDate: "2025-01-18T09:00:00.000Z",
    isCompleted: false,
    assignees: [{ id: "u3", username: "john" }],
    status: "Todo"
  },
  {
    id: "3",
    title: "Refactor API layer",
    description: "Move fetch logic to reusable API client",
    dueDate: "2025-01-25T16:00:00.000Z",
    isCompleted: false,
    assignees: [{ id: "u1", username: "anton" }],
    status: "In Review"
  },
  {
    id: "4",
    title: "Design profile page",
    description: "Create wireframes and UI layout",
    isCompleted: true,
    assignees: [{ id: "u4", username: "designer" }],
    status: "Done"
  },
  {
    id: "5",
    title: "Implement dark mode",
    description: "Add light/dark theme switch",
    dueDate: "2025-02-01T08:00:00.000Z",
    isCompleted: false,
    assignees: [{ id: "u2", username: "maria" }],
    status: "Todo"
  },
  {
    id: "6",
    title: "Optimize bundle size",
    description: "Remove unused dependencies and enable code splitting",
    isCompleted: false,
    assignees: [{ id: "u3", username: "john" }],
    status: "In Progress"
  },
  {
    id: "7",
    title: "Add notifications",
    dueDate: "2025-01-30T14:00:00.000Z",
    isCompleted: false,
    assignees: [{ id: "u5", username: "alex" }],
    status: "Todo"
  },
  {
    id: "8",
    title: "Fix responsive layout",
    description: "Grid breaks on mobile screens",
    isCompleted: true,
    assignees: [{ id: "u4", username: "designer" }],
    status: "Done"
  },
  {
    id: "9",
    title: "Implement task comments",
    dueDate: "2025-02-10T10:00:00.000Z",
    isCompleted: false,
    assignees: [
      { id: "u1", username: "anton" },
      { id: "u3", username: "john" }
    ],
    status: "In Progress"
  },
  {
    id: "10",
    title: "Integrate CI/CD",
    description: "Use GitHub Actions for automatic deploy",
    dueDate: "2025-02-15T08:30:00.000Z",
    isCompleted: false,
    assignees: [{ id: "u2", username: "maria" }],
    status: "Todo"
  }
];

export async function getTaskById(id: string): Promise<Task> {
  return apiGet<Task>(`/tasks/${id}`);
}

export async function createTask(task: Partial<Task>): Promise<Task> {
  return apiPost<Task>("/tasks", task);
}

export async function updateTask(id: string, task: Partial<Task>): Promise<Task> {
  return apiPut<Task>(`/tasks/${id}`, task);
}

export async function deleteTask(id: string): Promise<void> {
  return apiDelete(`/tasks/${id}`);
}


