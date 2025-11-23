import { apiGet, apiPost, apiPut, apiDelete } from "./client";
import {type Board } from "../modules/dashboard/types";

export async function getBoards(): Promise<Board[]> {
  return apiGet<Board[]>("/boards");
}

export async function getBoardById(id: string): Promise<Board> {
  return apiGet<Board>(`/boards/${id}`);
}

export async function createBoard(board: Partial<Board>): Promise<Board> {
  return apiPost<Board>("/boards", board);
}

export async function updateBoard(id: string, board: Partial<Board>): Promise<Board> {
  return apiPut<Board>(`/boards/${id}`, board);
}

export async function deleteBoard(id: string): Promise<void> {
  return apiDelete(`/boards/${id}`);
}