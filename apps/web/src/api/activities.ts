import { apiGet } from "./client";
import type { Activity } from "../modules/activities/types";

export async function getActivities(): Promise<Activity[]> {
  return apiGet<Activity[]>("/activities");
}