import { apiGet, apiPut } from "./client";
import type { User } from "../modules/profile/types";

export async function getProfile(): Promise<User> {
  return apiGet<User>("/profile");
}

export async function updateProfile(profile: Partial<User>): Promise<User> {
  return apiPut<User>("/profile", profile);
}