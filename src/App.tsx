import { Route, Routes } from "react-router-dom";
import { SettingsProvider } from "./contexts/SettingsContext";
import { HomePage } from "./pages/home/HomePage";
import { SettingsPage } from "./pages/settings/SettingsPage";
import { TheoryPage } from "./pages/theory/TheoryPage";
import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <SettingsProvider>
      <div>
        <NavBar />
        <div className="mt-16">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/settings" element={<SettingsPage />}></Route>
            <Route path="/theory" element={<TheoryPage />}></Route>
          </Routes>
        </div>
      </div>
    </SettingsProvider>
  );
}
