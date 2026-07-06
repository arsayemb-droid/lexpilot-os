import { Card, CardContent } from "@/components/ui/card";

type DashboardCardProps = {
  title: string;
  value: string;
};

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <Card className="border-zinc-800 bg-zinc-900 text-white">
      <CardContent className="p-6">
        <p className="text-sm text-zinc-400">{title}</p>

        <h2 className="mt-3 text-3xl font-bold">
          {value}
        </h2>
      </CardContent>
    </Card>
  );
}