import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <p className="text-sm text-blue-400">
        Welcome back 👋
      </p>

      <h1 className="mt-3 text-4xl font-bold text-white">
        LexPilot AI
      </h1>

      <p className="mt-4 max-w-2xl text-zinc-400">
        AI Powered Law Student Operating System
      </p>

      <div className="mt-8 flex gap-4">
        <Button>Start AI</Button>

        <Button variant="outline">
          Open Notes
        </Button>
      </div>
    </div>
  );
}