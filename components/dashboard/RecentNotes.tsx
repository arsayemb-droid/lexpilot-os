import { Card, CardContent } from "@/components/ui/card";
import { getRecentNotes } from "@/lib/api/dashboard";

export default async function RecentNotes() {
  const notes = await getRecentNotes();

  return (
    <Card className="border-zinc-800 bg-zinc-900 text-white">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold">
          Recent Notes
        </h2>

        <ul className="mt-5 space-y-3">
          {notes.map((note) => (
            <li
              key={note.title}
              className="rounded-lg border border-zinc-800 p-3 transition hover:bg-zinc-800"
            >
              {note.title}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}