import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SettingsPage() {
  const [tense, setTense] = useState<string>("Presente"); // Default value
  const navigate = useNavigate();

  // Handle the tense change
  const handleTenseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTense(event.target.value);
    // Store the setting in localStorage (for persistence)
    localStorage.setItem("selectedTense", event.target.value);
  };

  // Save the selection and redirect to home page
  const saveSettings = () => {
    // Navigate to home page (optional if using react-router)
    navigate("/home");
  };

  return (
    <div>
      <h1>Settings</h1>
      <label>
        Select Tense:
        <select value={tense} onChange={handleTenseChange}>
          <option value="Presente">Presente</option>
          <option value="Pretérito">Pretérito</option>
          <option value="Futuro">Futuro</option>
          {/* Add more tenses as needed */}
        </select>
      </label>
      <button onClick={saveSettings}>Save Settings</button>
    </div>
  );
}

export default SettingsPage;
