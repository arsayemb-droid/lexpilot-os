// import Link from "next/link";

// type NavItemProps = {
//   title: string;
//   href: string;
// };

// export default function NavItem({
//   title,
//   href,
// }: NavItemProps) {
//   return (
//     <Link
//       href={href}
//       className="block rounded-lg px-3 py-2 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
//     >
//       {title}
//     </Link>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  title: string;
  href: string;
};

export default function NavItem({
  title,
  href,
}: NavItemProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block rounded-lg px-3 py-2 transition ${
        isActive
          ? "bg-blue-600 text-white"
          : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
      }`}
    >
      {title}
    </Link>
  );
}