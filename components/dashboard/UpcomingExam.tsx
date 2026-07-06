import { Card, CardContent } from "@/components/ui/card";

export default function UpcomingExam() {
  return (
    <Card className="border-zinc-800 bg-zinc-900 text-white">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold">
          Upcoming Exam
        </h2>

        <p className="mt-4 text-zinc-400">
          Constitutional Law
        </p>

        <p className="mt-2 text-3xl font-bold">
          12 Days Left
        </p>
      </CardContent>
    </Card>
  );
}