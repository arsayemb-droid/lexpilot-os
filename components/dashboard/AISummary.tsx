import { Card, CardContent } from "@/components/ui/card";

export default function AISummary() {
  return (
    <Card className="border-zinc-800 bg-zinc-900 text-white">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold">
          AI Summary
        </h2>

        <p className="mt-4 text-zinc-400 leading-7">
          Welcome back! Today you have 3 pending study tasks,
          2 notes to revise, and your next exam is in 12 days.
        </p>
      </CardContent>
    </Card>
  );
}