import { Route, Routes } from "react-router-dom";
import { SettingsProvider } from "./contexts/SettingsContext";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import NavBar from "./components/NavBar";
import TheoryPage from "./pages/TheoryPage";

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
