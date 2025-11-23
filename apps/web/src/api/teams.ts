import { apiGet, apiPost, apiPut, apiDelete } from "./client";
import type { Team, TeamMember } from "../modules/teams/types";

export async function getTeams(): Promise<Team[]> {
  return apiGet<Team[]>("/teams");
}

export async function getTeamById(id: string): Promise<Team> {
  return apiGet<Team>(`/teams/${id}`);
}

export async function createTeam(team: Partial<Team>): Promise<Team> {
  return apiPost<Team>("/teams", team);
}

export async function updateTeam(id: string, team: Partial<Team>): Promise<Team> {
  return apiPut<Team>(`/teams/${id}`, team);
}

export async function deleteTeam(id: string): Promise<void> {
  return apiDelete(`/teams/${id}`);
}

export async function addTeamMember(teamId: string, member: TeamMember): Promise<void> {
  return apiPost<void>(`/teams/${teamId}/members`, member);
}