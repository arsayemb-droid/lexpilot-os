import { Card, CardContent } from "@/components/ui/card";

const notes = [
  "Law of Contract",
  "Law of Torts",
  "Constitutional Law",
];

export default function RecentNotes() {
  return (
    <Card className="border-zinc-800 bg-zinc-900 text-white">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold">
          Recent Notes
        </h2>

        <ul className="mt-5 space-y-3">
          {notes.map((note) => (
            <li
              key={note}
              className="rounded-lg border border-zinc-800 p-3 hover:bg-zinc-800 transition"
            >
              {note}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}