import MoodAndTenseSelector from "../components/MoodAndTenseSelector";
import PersonSelector from "../components/PersonSelector";
import PopularVerbsSelector from "../components/PopularVerbsSelector";

export default function SettingsPage() {
  return (
    <main>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold my-6 text-center">Settings</h1>
        <MoodAndTenseSelector />
        <PersonSelector />
        <PopularVerbsSelector />
      </div>
    </main>
  );
}
