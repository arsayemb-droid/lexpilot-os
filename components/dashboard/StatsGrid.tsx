import DashboardCard from "./DashboardCard";
import { getDashboardStats } from "@/lib/api/dashboard";

export default async function StatsGrid() {
  const stats = await getDashboardStats();

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <DashboardCard
          key={item.title}
          title={item.title}
          value={item.value}
        />
      ))}
    </div>
  );
}