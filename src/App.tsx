import { Route, Routes } from "react-router-dom";
import { SettingsProvider } from "./contexts/SettingsContext";
import { HomePage } from "./pages/home/HomePage";
import { SettingsPage } from "./pages/settings/SettingsPage";
import { TheoryPage } from "./pages/theory/TheoryPage";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <SettingsProvider>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/settings" element={<SettingsPage />}></Route>
          <Route path="/theory" element={<TheoryPage />}></Route>
        </Routes>
      </div>
    </SettingsProvider>
  );
}

export default App;
