import { NavBar } from "components";
import { Outlet } from "react-router-dom";
import { SettingsProvider } from "contexts";

export default function PagesLayout() {
  return (
    <SettingsProvider>
      <div className="mt-16">
        <NavBar />
        <Outlet />
      </div>
    </SettingsProvider>
  );
}
