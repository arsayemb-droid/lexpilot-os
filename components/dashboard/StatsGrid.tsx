import DashboardCard from "./DashboardCard";

export default function StatsGrid() {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <DashboardCard title="Notes" value="24" />
      <DashboardCard title="AI Chats" value="18" />
      <DashboardCard title="Routine" value="7" />
      <DashboardCard title="Progress" value="82%" />
    </div>
  );
}