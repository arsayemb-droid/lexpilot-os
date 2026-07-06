import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({
  children,
}: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-8">
      {children}
    </div>
  );
}