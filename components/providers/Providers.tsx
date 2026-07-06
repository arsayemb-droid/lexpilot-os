"use client";

import { ReactNode } from "react";
import ThemeProvider from "./ThemeProvider";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({
  children,
}: ProvidersProps) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}