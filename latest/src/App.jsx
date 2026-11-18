import { createBrowserRouter, RouterProvider } from "react-router";
import AdminLayout from "./layout/layout";
import Dashboard from "./pages/dashbosrd";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
