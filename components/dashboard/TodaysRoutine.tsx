import { Card, CardContent } from "@/components/ui/card";
import { getTodaysRoutine } from "@/lib/api/dashboard";

export default async function TodaysRoutine() {
  const routine = await getTodaysRoutine();

  return (
    <Card className="border-zinc-800 bg-zinc-900 text-white">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold">
          {"Today's Routine"}
        </h2>

        <ul className="mt-4 space-y-2 text-zinc-400">
          {routine.map((task) => (
            <li key={task.title}>
              📖 {task.title}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}