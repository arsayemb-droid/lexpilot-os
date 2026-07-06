import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function QuickActions() {
  return (
    <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-xl font-semibold text-white">
        Quick Actions
      </h2>

      <div className="mt-5 flex flex-wrap gap-4">

        <Link href="/ai">
          <Button>Open AI</Button>
        </Link>

        <Link href="/notes">
          <Button variant="outline">My Notes</Button>
        </Link>

        <Link href="/routine">
          <Button variant="outline">Today;s Routine</Button>
        </Link>

        <Link href="/settings">
          <Button variant="outline">Settings</Button>
        </Link>

      </div>
    </div>
  );
}