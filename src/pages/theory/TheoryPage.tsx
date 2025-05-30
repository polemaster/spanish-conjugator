import { Sidebar, TheorySection } from "./components";
import { TENSES } from "./data/tenses";

export function TheoryPage() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="overflow-y-auto flex justify-center items-center lg:ml-80 2xl:mr-50">
        <div className="px-6 py-8 max-w-4xl  border-red-500">
          {TENSES.map(({ id, label, component: Comp }) => (
            <TheorySection key={id} id={id} title={label}>
              <Comp />
            </TheorySection>
          ))}
        </div>
      </main>
    </div>
  );
}
