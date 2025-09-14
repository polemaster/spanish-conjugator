import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { SettingsPage } from "./pages/settings/SettingsPage";
import { TheoryPage } from "./pages/theory/TheoryPage";
import { PagesLayout } from "PagesLayout";

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
  return <RouterProvider router={router} />;
}
