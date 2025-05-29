import { Sidebar, PresentSimple, PresentSubjunctive } from "./components";

export function TheoryPage() {
  return (
    <div className="border flex">
      <Sidebar />
      <main className="px-5 pb-5 max-w-200 border border-red-300">
        <PresentSimple />
        <PresentSubjunctive />
      </main>
    </div>
  );
}
