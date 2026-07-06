import { dashboardStats } from "@/data/dashboard";
import {
  dashboardStats,
  recentNotes,
  todaysRoutine,
} from "@/data/dashboard";

export async function getDashboardStats() {
  return dashboardStats;
}

export async function getRecentNotes() {
  return recentNotes;
}

export async function getTodaysRoutine() {
  return todaysRoutine;
}
