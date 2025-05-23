import { Route, Routes } from "react-router-dom";
import { SettingsProvider } from "./contexts/SettingsContext";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <SettingsProvider>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/settings" element={<SettingsPage />}></Route>
        </Routes>
      </div>
    </SettingsProvider>
  );
}

export default App;
