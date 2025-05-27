import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function SettingsBoxTitle({ children }: Props) {
  return <h2 className="text-xl font-bold mb-4">{children}</h2>;
}
