export interface Board {
  id: string;
  name: string;
  description?: string;
  lists: { id: string; name: string; taskIds: string[] }[];
}