// export default function DashboardPage() {
//   return (
//     <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold">Dashboard</h1>

//         <p className="mt-4 text-zinc-400">
//           Welcome to LexPilot AI
//         </p>
//       </div>
//     </main>
//   );
// }
// import Container from "@/components/common/Container";

// export default function DashboardPage() {
//   return (
//     <Container>
//       <h1 className="text-3xl font-bold">
//         Welcome to LexPilot AI
//       </h1>

//       <p className="mt-2 text-zinc-400">
//         Sprint 2 • Design Foundation
//       </p>
//     </Container>
//   );
// }


/* <Container>
  <Hero />

  <StatsGrid />

  <QuickActions />
<div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 text-white">
  <h2 className="text-xl font-semibold">
    Today & apos;s Routine
  </h2>

  <ul className="mt-4 space-y-2 text-zinc-400">
    <li>📖 Read Contract Law</li>
    <li>📝 Revise Jurisprudence</li>
    <li>🤖 Practice AI Assistant</li>
  </ul>
</div>
    <TodaysRoutine />
  </div>
</Container>


import Container from "@/components/common/Container";
import Hero from "@/components/dashboard/Hero";
import DashboardCard from "@/components/dashboard/DashboardCard";
import QuickActions from "@/components/dashboard/QuickActions";
import AISummary from "@/components/dashboard/AISummary";
import RecentNotes from "@/components/dashboard/RecentNotes";
import UpcomingExam from "@/components/dashboard/UpcomingExam";
import TodaysRoutine from "@/components/dashboard/TodaysRoutine";

export default function DashboardPage() {
  return (
    <Container>
      <Hero />

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard title="Notes" value="24" />
        <DashboardCard title="AI Chats" value="18" />
        <DashboardCard title="Routine" value="7" />
        <DashboardCard title="Progress" value="82%" />
      </div>

      <QuickActions />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AISummary />
        </div>

        <UpcomingExam />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentNotes />
        </div>

        <TodaysRoutine />
      </div>
    </Container>
  );
// } */

import Container from "@/components/common/Container";
import Hero from "@/components/dashboard/Hero";
import DashboardCard from "@/components/dashboard/DashboardCard";
import QuickActions from "@/components/dashboard/QuickActions";
import AISummary from "@/components/dashboard/AISummary";
import RecentNotes from "@/components/dashboard/RecentNotes";
import UpcomingExam from "@/components/dashboard/UpcomingExam";
import TodaysRoutine from "@/components/dashboard/TodaysRoutine";

export default function DashboardPage() {
  return (
    <Container>
      <Hero />

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard title="Notes" value="24" />
        <DashboardCard title="AI Chats" value="18" />
        <DashboardCard title="Routine" value="7" />
        <DashboardCard title="Progress" value="82%" />
      </div>

      <QuickActions />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AISummary />
        </div>

        <UpcomingExam />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentNotes />
        </div>

        <TodaysRoutine />
      </div>
    </Container>
  );
}

