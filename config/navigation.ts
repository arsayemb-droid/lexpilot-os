


export type NavigationItem = {
  title: string;
  href: string;
  // icon: "dashboard" | "bot" | "notes" | "calendar" | "settings";
};

export const navigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    // icon: "dashboard",
  },
  {
    title: "AI Assistant",
    href: "/ai",
    // icon: "bot",
  },
  {
    title: "Notes",
    href: "/notes",
    // icon: "notes",
  },
  {
    title: "Routine",
    href: "/routine",
    // icon: "calendar",
  },
  {
    title: "Settings",
    href: "/settings",
    // icon: "settings",
  },
];