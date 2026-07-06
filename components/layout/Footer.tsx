import { appConfig } from "@/config/app";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-4 text-center text-sm text-zinc-500">
      © {new Date().getFullYear()} {appConfig.appName} • v{appConfig.version}
    </footer>
  );
}
