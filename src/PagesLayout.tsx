import { Outlet } from "react-router-dom";
import { NavBar } from "components";
import { SettingsProvider } from "contexts";

export function PagesLayout() {
  return (
    <SettingsProvider>
      <div className="mt-16">
        <NavBar />
        <Outlet />
      </div>
    </SettingsProvider>
  );
}
