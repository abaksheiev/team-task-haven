//  # все endpoints по задачам
import { apiGet, apiPost, apiPut, apiDelete } from "./client";
import type { Task } from "../modules/tasks/types";

export async function getTasks(): Promise<Task[]> {
    return apiGet<Task[]>("/tasks");

}

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


