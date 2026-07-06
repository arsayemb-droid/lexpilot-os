import { Card, CardContent } from "@/components/ui/card";

export default function TodaysRoutine() {
  return (
    <Card className="border-zinc-800 bg-zinc-900 text-white">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold">
          {"Today's Routine"}
        </h2>

        <ul className="mt-4 space-y-2 text-zinc-400">
          <li>📖 Read Contract Law</li>
          <li>📝 Revise Jurisprudence</li>
          <li>🤖 Practice AI Assistant</li>
        </ul>
      </CardContent>
    </Card>
  );
}