import {
  MoodAndTenseSelector,
  PersonSelector,
  PopularVerbsSelector,
} from "./components";

export function SettingsPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold my-6 text-center">Settings</h1>
      <MoodAndTenseSelector />
      <PersonSelector />
      <PopularVerbsSelector />
    </main>
  );
}
