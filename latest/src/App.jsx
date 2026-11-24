import { createBrowserRouter, RouterProvider } from "react-router";
import AdminLayout from "./layout/layout";
import Dashboard from "./pages/dashbosrd";
import Product from "./pages/product";

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
        {
          path:"/product",
          element: <Product />
        }
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
