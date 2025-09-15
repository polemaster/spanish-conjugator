import { Outlet } from "react-router-dom";
import { LoadingSpinner, NavBar } from "components";
import { useVerbsContext } from "contexts/VerbsContext";

export function PagesLayout() {
  const { isLoading } = useVerbsContext();

  // if (error) return <div>Error ocurred: {error}</div>;

  const addClasses = isLoading ? "flex flex-center mt-50" : "";
  return (
    <div className={"mt-16" + addClasses}>
      <NavBar />
      {isLoading && <LoadingSpinner text="Loading data..." />}
      {!isLoading && <Outlet />}
    </div>
  );
}
