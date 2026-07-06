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


import Container from "@/components/common/Container";
import Hero from "@/components/dashboard/Hero";
import DashboardCard from "@/components/dashboard/DashboardCard";

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
    </Container>
  );
}