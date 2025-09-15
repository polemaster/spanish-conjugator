import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { SettingsPage } from "./pages/settings/SettingsPage";
import { TheoryPage } from "./pages/theory/TheoryPage";
import { PagesLayout } from "PagesLayout";
import { SettingsProvider } from "contexts";
import { VerbsProvider } from "contexts/VerbsContext";

const router = createBrowserRouter([
  {
    path: "/",
    Component: PagesLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "settings",
        Component: SettingsPage,
      },
      {
        path: "theory",
        Component: TheoryPage,
      },
    ],
  },
]);

export default function App() {
  return (
    <SettingsProvider>
      <VerbsProvider>
        <RouterProvider router={router} />
      </VerbsProvider>
    </SettingsProvider>
  );
}
