



import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
  return (
    <header className="flex h-16 items-center border-b border-zinc-800 bg-zinc-900 px-6">
      <h2 className="text-lg font-semibold text-white">
        Dashboard
      </h2>
      <ThemeToggle />
    </header>
  );
}
