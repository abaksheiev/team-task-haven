export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: string; // ISO string
  isCompleted: boolean;
  assignees: { id: string; username: string }[];
  status : string
}